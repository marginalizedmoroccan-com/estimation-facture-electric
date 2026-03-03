/*********************************/
/****** VARIABLES GLOBALES ******/
/*******************************/
var nbrJoursEstimee = 0, nbrJoursReelle = 0, rc = 0, rc_due = 0, rf = 0, rf_due = 0, totalHT = 0, totalHT_due = 0,
    tppa_due = 0, totalTVA = 0, totalTVA_due = 0, tf = 0, tf_due = 0, totalTaxes = 0, totalTaxes_due = 0, rcFactureEstimee = 0, tppaFactureEstimee = 0,
    acompte = 0, nbrJoursPeriode = 0, consomJournaliere = 0, rcPeriode = 0, rcPeriode_due = 0, rc_estimee = 0, rc_reelle = 0;

/*********************************/
/*********** FONCTIONS ***********/
/********************************/

function CalculerRCEstimee() {
    $('#consommation,#difference,#tc,.tc-radio input,#selectCompteur,#dateDebEstimee,#dateFinEstimee').on('keyup change', function () {
        CheckTC();
        var consommation = $('#difference').val() * $('#tc').val();
        var consom1 = 0, consom2 = 0;
        var puEstime = 0;
        var seuilSelectivite = consommation * nbrJoursEstimee / 30;
        $('#seuilSelectivite').text(seuilSelectivite);
        if (nbrJoursEstimee >= 28 && nbrJoursEstimee <= 31) { // Tranches Normales
            if (consommation <= 150) {
                if (consommation <= 100) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(100 * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + 100 + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - 100) * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").append("<p>Tranche 2</p>");
                    $("#trancheEstimeAr").append("<p>2 الشطر</p>");
                    $('#qteEstime').append("<p>" + (consommation - 100) + "</p>");
                    $('#puEstime').append("<p>" + puEstime + "</p>");
                    $('#montantEstime').append("<p>" + consom2 + "</p>");
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
            }
            else {
                if (consommation >= 151 && consommation <= 210) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 3</p><br>");
                    $("#trancheEstimeAr").html("<p>3 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 210 && consommation <= 310) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 4</p><br>");
                    $("#trancheEstimeAr").html("<p>4 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 310 && consommation <= 510) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 5</p><br>");
                    $("#trancheEstimeAr").html("<p>5 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 6</p><br>");
                    $("#trancheEstimeAr").html("<p>6 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
            }
        }
        else { // Tranches Ajustées
            var tr1 = Math.ceil((100 * nbrJoursEstimee / 30)), tr2 = (150 * nbrJoursEstimee / (365 / 12)), tr3 = Math.ceil((200 * nbrJoursEstimee / 30)),
                tr4 = Math.ceil((300 * nbrJoursEstimee / 30)), tr5 = Math.ceil((500 * nbrJoursEstimee / 30));
            if (consommation <= tr2) {
                if (consommation <= tr1) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + Math.round(consommation) + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(tr1 * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + tr1 + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - tr1) * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").append("<p>Tranche 2</p>");
                    $("#trancheEstimeAr").append("<p>2 الشطر</p>");
                    $('#qteEstime').append("<p>" + (consommation - tr1) + "</p>");
                    $('#puEstime').append("<p>" + puEstime + "</p>");
                    $('#montantEstime').append("<p>" + consom2 + "</p>");
                }
                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
            }
            else {
                // Variables pour ajustement des bornes sup et inf
                var tr3sup = Math.ceil((210 * nbrJoursEstimee / 30)), tr4sup = Math.ceil((310 * nbrJoursEstimee / 30)), tr5sup = Math.ceil((510 * nbrJoursEstimee / 30));
                if (consommation > (150 * nbrJoursEstimee / (365 / 12)) && consommation <= tr3sup) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 3</p><br>");
                    $("#trancheEstimeAr").html("<p>3 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr3sup && consommation <= tr4sup) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 4</p><br>");
                    $("#trancheEstimeAr").html("<p>4 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr4sup && consommation <= tr5sup) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 5</p><br>");
                    $("#trancheEstimeAr").html("<p>5 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 6</p><br>");
                    $("#trancheEstimeAr").html("<p>6 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
            }
        }
        //#########################################
        // Calcules

        CalculerTotalHT();
        CalculerTotalTVA();
        CalculerTF();
        CalculerTotalTaxes();
        CalculerTotalFacture();
        console.log("Partie Estimée =====>>    rc_due = " + rc_due + "  rf_due = " + rf_due + "  totalHT = " + totalHT);
        $('#totalHT').text(totalHT);
    });
}

function CalculerRCAcompte() {
    $('#consomEstimee,#tc,#selectCompteur,#dateDebEstimee,#dateFinEstimee,#acompte').on('keyup change', function () {
        CheckTC();
        var consommation = $('#consomEstimee').val();
        var consom1 = 0, consom2 = 0;
        var puEstime = 0;
        if (nbrJoursEstimee >= 28 && nbrJoursEstimee <= 31) { // Tranches Normales
            if (consommation <= 150) {
                if (consommation <= 100) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(100 * parseFloat(puEstime) + 'e2') + 'e-2');
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - 100) * parseFloat(puEstime) + 'e2') + 'e-2');
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
            }
            else {
                if (consommation >= 151 && consommation <= 210) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > 210 && consommation <= 310) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > 310 && consommation <= 510) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
            }

        }
        else { // Tranches Ajustées
            var tr1 = Math.ceil((100 * nbrJoursEstimee / 30)), tr2 = (150 * nbrJoursEstimee / (365 / 12)), tr3 = Math.ceil((200 * nbrJoursEstimee / 30)),
                tr4 = Math.ceil((300 * nbrJoursEstimee / 30)), tr5 = Math.ceil((500 * nbrJoursEstimee / 30));
            if (consommation <= tr2) {
                if (consommation <= tr1) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(tr1 * parseFloat(puEstime) + 'e2') + 'e-2');
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - tr1) * parseFloat(puEstime) + 'e2') + 'e-2');
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
            }
            else {
                seuilSelectivite = consommation * nbrJoursEstimee / 30;
                // Variables pour ajustement des bornes sup et inf
                var tr3sup = Math.ceil((210 * nbrJoursEstimee / 30)), tr4sup = Math.ceil((310 * nbrJoursEstimee / 30)), tr5sup = Math.ceil((510 * nbrJoursEstimee / 30));
                if (consommation > (150 * nbrJoursEstimee / (365 / 12)) && consommation <= tr3sup) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > tr3sup && consommation <= tr4sup) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > tr4sup && consommation <= tr5sup) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
            }
        }

        rcFactureEstimee = rc_due;
        tppaFactureEstimee = tppa_due;

        $('#rcE').text(Number(Math.floor(rcFactureEstimee * 0.18 + 'e2') + 'e-2'));
        $('#tppaE').text(Number(Math.floor(tppaFactureEstimee * 0.2 + 'e2') + 'e-2'));

        //#########################################
        $('#rcestimereelle').text(rc_due);
        // Calcules
        CalculerAcompte();
    });
}

function CalculerRCEstimeeReelle() {
    $('#consommation,#difference,#tc,.tc-radio input,#selectCompteur,#dateDebEstimee,#dateFinEstimee,#dateFinReelle,#ancienIndex,#nouvelIndex').on('keyup change', function () {
        CheckTC();
        var consommation = Number(Math.floor(consomJournaliere * nbrJoursEstimee));
        var consom1 = 0, consom2 = 0;
        var puEstime = 0;
        var seuilSelectivite = 0;
        if (nbrJoursEstimee >= 28 && nbrJoursEstimee <= 31) { // Tranches Normales
            if (consommation <= 150) {
                if (consommation <= 100) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(100 * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + 100 + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - 100) * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").append("<p>Tranche 2</p>");
                    $("#trancheEstimeAr").append("<p>2 الشطر</p>");
                    $('#qteEstime').append("<p>" + (consommation - 100) + "</p>");
                    $('#puEstime').append("<p>" + puEstime + "</p>");
                    $('#montantEstime').append("<p>" + consom2 + "</p>");
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
                rc_estimee = consom1 + consom2;
            }
            else {
                if (consommation >= 151 && consommation <= 210) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 3</p><br>");
                    $("#trancheEstimeAr").html("<p>3 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 210 && consommation <= 310) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 4</p><br>");
                    $("#trancheEstimeAr").html("<p>4 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 310 && consommation <= 510) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 5</p><br>");
                    $("#trancheEstimeAr").html("<p>5 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 6</p><br>");
                    $("#trancheEstimeAr").html("<p>6 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
                rc_estimee = consom1;
            }
        }
        else { // Tranches Ajustées
            var tr1 = Math.ceil((100 * nbrJoursEstimee / 30)), tr2 = (150 * nbrJoursEstimee / (365 / 12)), tr3 = Math.ceil((200 * nbrJoursEstimee / 30)),
                tr4 = Math.ceil((300 * nbrJoursEstimee / 30)), tr5 = Math.ceil((500 * nbrJoursEstimee / 30));
            if (consommation <= tr2) {
                if (consommation <= tr1) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + Math.round(consommation) + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(tr1 * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 1</p><br>");
                    $("#trancheEstimeAr").html("<p>1 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + tr1 + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - tr1) * parseFloat(puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").append("<p>Tranche 2</p>");
                    $("#trancheEstimeAr").append("<p>2 الشطر</p>");
                    $('#qteEstime').append("<p>" + (consommation - tr1) + "</p>");
                    $('#puEstime').append("<p>" + puEstime + "</p>");
                    $('#montantEstime').append("<p>" + consom2 + "</p>");
                }
                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
                rc_estimee = consom1 + consom2;
            }
            else {
                seuilSelectivite = consommation * nbrJoursEstimee / 30;
                $('#seuilSelectivite').text(seuilSelectivite);
                // Variables pour ajustement des bornes sup et inf
                var tr3sup = Math.ceil((210 * nbrJoursEstimee / 30)), tr4sup = Math.ceil((310 * nbrJoursEstimee / 30)), tr5sup = Math.ceil((510 * nbrJoursEstimee / 30));
                if (consommation > (150 * nbrJoursEstimee / (365 / 12)) && consommation <= tr3sup) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 3</p><br>");
                    $("#trancheEstimeAr").html("<p>3 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr3sup && consommation <= tr4sup) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 4</p><br>");
                    $("#trancheEstimeAr").html("<p>4 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr4sup && consommation <= tr5sup) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 5</p><br>");
                    $("#trancheEstimeAr").html("<p>5 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    $("#trancheEstimeFr").html("<p>Tranche 6</p><br>");
                    $("#trancheEstimeAr").html("<p>6 الشطر</p><br>");
                    $('#qteEstime').html("<p>" + consommation + "</p><br>");
                    $('#puEstime').html("<p>" + puEstime + "</p><br>");
                    $('#montantEstime').html("<p>" + consom1 + "</p><br>");
                }

                CalculerTPPAN(consommation, nbrJoursEstimee);
                rc = consom1;
                rc_due = consom1;
                rc_estimee = consom1;
            }
        }
        //#########################################

        if (isNaN(consommation)) {
            $('#qteEstime p, #qteReelle p,#montantEstime p,#montantReelle p,#timbreFiscal,#totalTaxes').text("-");
        }
        // Calcules
        if ($('#selectTypeReleve option:selected').text() == 'Réel') {
            CalculerRCPeriode();
        }
        else {
            CalculerRCEstimee();
        }
    });
}

function CalculerRCReelle() {
    $('#dateDebEstimee,#dateFinEstimee,#dateDebReelle,#dateFinReelle,#consommation,#difference,#tc,.tc-radio input,#ancienIndex,#nouvelIndex').on("change keyup", function () {
        CheckTC();
        var consommation = Number(Math.ceil(consomJournaliere * nbrJoursReelle));
        var consom1 = 0, consom2 = 0;
        var puReelle = 0;
        var seuilSelectivite = 0;
        if (nbrJoursReelle >= 28 && nbrJoursReelle <= 31) { // Tranches Normales
            if (consommation <= 150) {
                if (consommation <= 100) {
                    puReelle = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 1</p><br>");
                    $("#trancheReelleAr").html("<p>1 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puReelle = '0.76356';
                    consom1 = Number(Math.round(100 * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 1</p><br>");
                    $("#trancheReelleAr").html("<p>1 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + 100 + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                    puReelle = '0.90950';
                    consom2 = Number(Math.round((consommation - 100) * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").append("<p>Tranche 2</p>");
                    $("#trancheReelleAr").append("<p>2 الشطر</p>");
                    $('#qteReelle').append("<p>" + (consommation - 100) + "</p>");
                    $('#puReelle').append("<p>" + puReelle + "</p>");
                    $('#montantReelle').append("<p>" + consom2 + "</p>");
                }
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
                rc_reelle = consom1 + consom2;
            }
            else {
                if (consommation >= 151 && consommation <= 210) {
                    puReelle = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 3</p><br>");
                    $("#trancheReelleAr").html("<p>3 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 210 && consommation <= 310) {
                    puReelle = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 4</p><br>");
                    $("#trancheReelleAr").html("<p>4 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > 310 && consommation <= 510) {
                    puReelle = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 5</p><br>");
                    $("#trancheReelleAr").html("<p>5 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puReelle = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 6</p><br>");
                    $("#trancheReelleAr").html("<p>6 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                rc = consom1;
                rc_due = consom1;
                rc_reelle = consom1;
            }
        }
        else { // Tranches Ajustées
            var tr1 = Math.ceil((100 * nbrJoursReelle / 30)), tr2 = (150 * nbrJoursReelle / (365 / 12)), tr3 = Math.ceil((200 * nbrJoursReelle / 30)),
                tr4 = Math.ceil((300 * nbrJoursReelle / 30)), tr5 = Math.ceil((500 * nbrJoursReelle / 30));
            if (consommation <= tr2) {
                if (consommation <= tr1) {
                    puReelle = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 1</p><br>");
                    $("#trancheReelleAr").html("<p>1 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + Math.round(consommation) + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puReelle = '0.76356';
                    consom1 = Number(Math.round(tr1 * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 1</p><br>");
                    $("#trancheReelleAr").html("<p>1 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + tr1 + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                    puReelle = '0.90950';
                    consom2 = Number(Math.round((consommation - tr1) * parseFloat(puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").append("<p>Tranche 2</p>");
                    $("#trancheReelleAr").append("<p>2 الشطر</p>");
                    $('#qteReelle').append("<p>" + (consommation - tr1) + "</p>");
                    $('#puReelle').append("<p>" + puReelle + "</p>");
                    $('#montantReelle').append("<p>" + consom2 + "</p>");
                }
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = consom1 + consom2;
                rc_reelle = consom1 + consom2;
            }

            else {
                seuilSelectivite = consommation * nbrJoursReelle / 30;
                $('#seuilSelectiviteR').text(seuilSelectivite);
                // Variables pour ajustement des bornes sup et inf
                var tr3sup = Math.ceil((210 * nbrJoursReelle / 30)), tr4sup = Math.ceil((310 * nbrJoursReelle / 30)), tr5sup = Math.ceil((510 * nbrJoursReelle / 30));
                if (consommation > (150 * nbrJoursReelle / (365 / 12)) && consommation <= tr3sup) {
                    puReelle = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 3</p><br>");
                    $("#trancheReelleAr").html("<p>3 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr3sup && consommation <= tr4sup) {
                    puReelle = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 4</p><br>");
                    $("#trancheReelleAr").html("<p>4 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else if (consommation > tr4sup && consommation <= tr5sup) {
                    puReelle = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 5</p><br>");
                    $("#trancheReelleAr").html("<p>5 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                else {
                    puReelle = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puReelle) + 'e2') + 'e-2');
                    $("#trancheReelleFr").html("<p>Tranche 6</p><br>");
                    $("#trancheReelleAr").html("<p>6 الشطر</p><br>");
                    $('#qteReelle').html("<p>" + consommation + "</p><br>");
                    $('#puReelle').html("<p>" + puReelle + "</p><br>");
                    $('#montantReelle').html("<p>" + consom1 + "</p><br>");
                }
                rc = consom1;
                rc_due = consom1;
                rc_reelle = consom1;
            }
        }

        //#########################################
        if (isNaN(consommation)) {
            $('#qteEstime p, #qteReelle p,#montantEstime p,#montantReelle p,#timbreFiscal,#totalTaxes').text("-");
        }
        // Calcules
        CalculerRCPeriode();
    });
}

function CalculerRCPeriode() {
    $('#consommation,#difference,#tc,.tc-radio input,#selectCompteur,#dateDebEstimee,#dateFinEstimee,#dateDebReelle,#dateFinReelle,#consomEstimee,#nouvelIndex,#ancienIndex').on('keyup change', function () {
        CheckTC();
        // var consommation = $('#difference').val() * $('#tc').val();
        var consommation = $('#consommation').val();
        var consom1 = 0, consom2 = 0, consom1_due = 0, consom2_due = 0;
        var puEstime = 0;
        if (nbrJoursPeriode >= 28 && nbrJoursPeriode <= 31) { // Tranches Normales
            if (consommation <= 150) {
                if (consommation <= 100) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(100 * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(100 * parseFloat(puEstime) + 'e2') + 'e-2');
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - 100) * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom2_due = Number(Math.floor((consommation - 100) * parseFloat(puEstime) + 'e2') + 'e-2');
                }
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = Number(Math.floor(consom1 + consom2 + 'e2') + 'e-2');
            }
            else {
                if (consommation >= 151 && consommation <= 210) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > 210 && consommation <= 310) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > 310 && consommation <= 510) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                rc = consom1;
                rc_due = consom1_due;
            }
        }
        else { // Tranches Ajustées
            var tr1 = Math.ceil((100 * nbrJoursPeriode / 30)), tr2 = (150 * nbrJoursPeriode / (365 / 12)), tr3 = Math.ceil((200 * nbrJoursPeriode / 30)),
                tr4 = Math.ceil((300 * nbrJoursPeriode / 30)), tr5 = Math.ceil((500 * nbrJoursPeriode / 30));

            if (consommation <= tr2) {
                if (consommation <= tr1) {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(consommation * parseFloat(puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '0.76356';
                    consom1 = Number(Math.round(tr1 * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(tr1 * parseFloat(puEstime) + 'e2') + 'e-2');
                    puEstime = '0.90950';
                    consom2 = Number(Math.round((consommation - tr1) * parseFloat(puEstime) + 'e2') + 'e-2');
                    consom2_due = Number(Math.floor((consommation - tr1) * parseFloat(puEstime) + 'e2') + 'e-2');

                }
                rc = Number(Math.round(consom1 + consom2 + 'e2') + 'e-2');
                rc_due = Number(Math.floor(consom1_due + consom2_due + 'e2') + 'e-2');
            }
            else {
                seuilSelectivite = consommation * nbrJoursPeriode / 30;
                // Variables pour ajustement des bornes sup et inf
                var tr3sup = Math.ceil((210 * nbrJoursPeriode / 30)), tr4sup = Math.ceil((310 * nbrJoursPeriode / 30)), tr5sup = Math.ceil((510 * nbrJoursPeriode / 30));
                if (consommation > (150 * nbrJoursPeriode / (365 / 12)) && consommation <= tr3sup) {
                    puEstime = '0.90950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > tr3sup && consommation <= tr4sup) {
                    puEstime = '0.98950';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else if (consommation > tr4sup && consommation <= tr5sup) {
                    puEstime = '1.17094';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                else {
                    puEstime = '1.35238';
                    consom1 = Number(Math.round(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                    consom1_due = Number(Math.floor(parseFloat(consommation * puEstime) + 'e2') + 'e-2');
                }
                rc = consom1;
                rc_due = consom1_due;
            }
        }
        rc = Number(Math.round(rc_estimee + rc_reelle + 'e2') + 'e-2');
        rc_due = Number(Math.floor(rc_estimee + rc_reelle + 'e2') + 'e-2');
        //#########################################
        // Calcules
        CalculerTPPAN(consommation, nbrJoursPeriode);

        CalculerTotalRCPeriode();
        CalculerTotalHTPeriode();
        CalculerTotalTVAPeriode();
        CalculerTF();
        CalculerTotalTaxes();
        CalculerTotalFacture();
        console.log("Partie Réelle =====>>    rc_due = " + rc_due + "  rf_due = " + rf_due + "  totalHT = " + totalHT);
        $('#totalHT').text(totalHT);
    });
}

// Transformateur de courant

// function CheckTC() {
//     //$('#radoui').prop('checked',true);
//     $('.tc-radio input[type="radio"],#difference').on("click keyup", function () {
//         $('#tc').val(1);
//         if ($('#radoui').prop('checked')) {
//             $('#tc').removeAttr("disabled");
//         }
//         else {
//             $('#tc').attr("disabled", "disabled");
//         }
//         $('#consommation').attr("disabled", "disabled");
//         if($('#selectTypeReleve option:selected').text() == 'Estimé') {
//             $('#consommation').val($('#difference').val() * $('#tc').val());

//         }
//         else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
//             //$('#consommation').val($('#consommation').val(sign * Math.pow(10, 8) + parseInt(nouvelIndex - ancienIndex) * $('#tc').val()));
//             $('#consommation').val(sign * Math.pow(10, 8) + $('#difference').val() * $('#tc').val());
//         }

//     });


// }