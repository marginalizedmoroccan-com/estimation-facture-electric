
/*********************************************************/
/****** GLOBAL SCRIPT ******/
/*********************************************************/
$(".alert").each(function () {
    $(this).addClass("animated flash");
});

$('input[type="number"]').on("keyup change", function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

function addSeparatorsNF(nStr, inD, outD, sep) {
    nStr += '';
    var dpos = nStr.indexOf(inD);
    var nStrEnd = '';
    if (dpos != -1) {
        nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
        nStr = nStr.substring(0, dpos);
    }
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(nStr)) {
        nStr = nStr.replace(rgx, '$1' + sep + '$2');
    }
    return nStr + nStrEnd;
}

/*********************************************************/
/****** Page Simulateur de la facture d'éléctricité ******/
/*********************************************************/
var tarif = $('#selectTarif option:selected').text();
$('.post-it-note').removeClass('hidden');
switch (tarif) {
    case "Choisir":
        $('.post-it-note p').text("L’usage tarifaire pour lequel vous avez souscrit");
        break;
    case "Domestique ou éclairage privé":
        $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client particulier ayant une habitation.");
        $('.icon-acompte-menage').removeClass('hidden');
        $('.icon-acompte-forcemotrice').addClass('hidden');
        break;
    case "Patenté":
        $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client exerçant une activité soumise à l'impôt de la patente (commerce, fabrication, professions libérales, hôtellerie, etc....)");
        $('.icon-acompte-menage').removeClass('hidden');
        $('.icon-acompte-forcemotrice').addClass('hidden');
        break;
    case "Force Motrice Industrielle":
        $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client disposant de circuits autres que celui destiné à l'éclairage, permettant d'alimenter des appareils de force motrice tels que les moteurs, les fours…");
        $('.icon-acompte-menage').addClass('hidden');
        $('.icon-acompte-forcemotrice').removeClass('hidden');
        break;
    case "Force Motrice Agricole":
        $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client disposant des appareils destinés à usage agricole tels que les appareils de pompage.");
        $('.icon-acompte-menage').addClass('hidden');
        $('.icon-acompte-forcemotrice').removeClass('hidden');
        break;
    default:
        $('.post-it-note').addClass('hidden');
        break;
}
$('#selectTarif').change(function () {
    var tarif = $('#selectTarif option:selected').text();
    $('.post-it-note').removeClass('hidden');
    $('.post-it-note2').addClass('hidden');
    switch (tarif) {
        case "Choisir":
            $('.post-it-note p').text("L’usage tarifaire pour lequel vous avez souscrit");
            break;
        case "Domestique ou éclairage privé":
            $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client particulier n’exerçant aucune activité soumise à la taxe professionnelle.");
            $('.icon-acompte-menage').removeClass('hidden');
            $('.icon-acompte-forcemotrice').addClass('hidden');
            break;
        case "Patenté":
            $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client exerçant une activité soumise à l'impôt de la patente (commerce, fabrication, professions libérales, hôtellerie, etc....)");
            $('.icon-acompte-menage').removeClass('hidden');
            $('.icon-acompte-forcemotrice').addClass('hidden');
            break;
        case "Force Motrice Industrielle":
            $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client disposant de circuits autres que celui destiné à l'éclairage, permettant d'alimenter des appareils de force motrice tels que les moteurs, les fours…");
            $('.icon-acompte-menage').addClass('hidden');
            $('.icon-acompte-forcemotrice').removeClass('hidden');
            break;
        case "Force Motrice Agricole":
            $('.post-it-note p').text("Ce tarif vous concerne si vous êtes un client disposant des appareils destinés à usage agricole tels que les appareils de pompage.");
            $('.icon-acompte-menage').addClass('hidden');
            $('.icon-acompte-forcemotrice').removeClass('hidden');
            break;
        default:
            $('.post-it-note').addClass('hidden');
            break;
    }
});

$('#selectTypeReleve').change(function () {
    vider();
    var tr = $('#selectTypeReleve option:selected').text();
    $('.post-it-note').addClass('hidden');
    $('.post-it-note2').removeClass('hidden');
    if (tr == 'Réel') {
        $('.post-it-note2 p').text("Il s’agit de recalculer votre facture sur la base de votre index réel tout en régularisant votre dernière facture estimée.");
        $('.index-icon').removeClass('hidden');
        $('.index-cons-estimee').addClass('hidden');
    }
    else {
        $('.post-it-note2').addClass('hidden');
        $('.index-icon').addClass('hidden');
        $('.index-cons-estimee').removeClass('hidden');
    }
});

$('#selectCompteur').change(function () {
    $('.post-it-note').addClass('hidden');
    // if ($('#radoui').prop('checked')) {
    if ($('#selectCompteur option:selected').val() == 1) {
        $('#tc,#radoui,#radnon').attr("disabled", "disabled");
        $('.alert-tc-consom').addClass('hidden');
    }
    else {
        $('#tc,#radoui,#radnon').removeAttr("disabled");
        $('.alert-tc-consom').removeClass('hidden');
    }
    //  }
});
$('.post-it-note .fa-close').click(function () {
    $('.post-it-note').addClass('hidden');
});
$('.post-it-note2 .fa-close').click(function () {
    $('.post-it-note2').addClass('hidden');
});

// Script redirection vers les autres page en basant sur le type de client sélectionné
$('#selectClient').change(function () {
    var selected = $('#selectClient option:selected').val();
    switch (selected) {
        case '1':
            $('#simulerFacture').attr('href', 'facture_bt.html').removeClass('disabled');
            $('#estimezFacture').removeClass('disabled');
            $('#optimisezPuissance').addClass('disabled');
            break;
        case '2':
            $('#simulerFacture').attr('href', 'facture_prepaiement.html').removeClass('disabled');
            $('#estimezFacture').removeClass('disabled');
            $('#optimisezPuissance').addClass('disabled');
            break;
        case '3':
            $('#simulerFacture').attr('href', 'facture_mt.html').removeClass('disabled');
            $('#estimezFacture').addClass('disabled');
            $('#optimisezPuissance').removeClass('disabled');
            break;
        case '4':
            $('#simulerFacture').attr('href', 'facture_gc.html').removeClass('disabled');
            $('#estimezFacture').addClass('disabled');
            $('#optimisezPuissance').removeClass('disabled');
            break;
        default:
            $('.form-simulateur a').addClass('disabled');
    }
});

// Si le type de relevé n'est pas sélectionnés ===> désactiver les zones index
if ($('#selectTypeReleve option:selected').text() == 'Choisir') {
    $('.table-consommation input,#dateDebEstimee,#dateFinEstimee').attr('disabled', 'disabled');
}
else {
    $('.table-consommation input,#dateDebEstimee,#dateFinEstimee').removeAttr('disabled');
    $('#consommation,#difference').attr('disabled', 'disabled');
    $('.alert-consommation').addClass('hidden');
}

// Si le TARIF ou le Type de Compteur ne sont pas sélectionnés ===> désactiver le tableau des indexes
$('#selectCompteur,#selectTarif').change(function () {
    $(".trAcompte,.alert-consomEstimee").addClass('hidden');
    if ($('#selectCompteur option:selected').text() == 'Choisir' || $('#selectTarif option:selected').text() == 'Choisir') {

        $('#selectTypeReleve option[value="0"]').attr('selected', 'selected');
        $('.table-consommation .form-control,#dateDebEstimee,#dateFinEstimee,#dateDebReelle,#dateFinReelle,#consomEstimee,.tc-radio input[type="radio"]').attr('disabled', 'disabled');
        $('.alert-index').removeClass('hidden');
        $('.trConsomEstimee,.alert-indextypereleve,.alert-tc').addClass('hidden');
    }
    else {
        $('.alert-index').addClass('hidden');
        if ($('#selectTypeReleve option:selected').text() == 'Choisir') {

            $('.alert-indextypereleve').removeClass('hidden');
        }
        else {
            $('.alert-indextypereleve').addClass('hidden');
        }
        $('#selectTypeReleve').removeAttr('disabled');
        $('.tc-radio input[type="radio"]').removeAttr('disabled');
        $('.alert-tc').removeClass('hidden');
    }

    CalculerRF();
    CheckTC();
});

var sign = 0;
// Calcule de difference et de consommation
$('#nouvelIndex,#ancienIndex,#tc').on('keyup', function () {
    if ($('#selectTypeReleve').val() == 2) {
        var nouvelIndex = parseInt($('#nouvelIndex').val());
        var ancienIndex = parseInt($('#ancienIndex').val());
        var difference = parseInt(nouvelIndex - ancienIndex);
        if (!isNaN(difference)) {
            difference = parseInt(nouvelIndex - ancienIndex);
            $('#difference').val(difference);

            if (nouvelIndex < ancienIndex) {
                sign = 1;
            }
            else {
                sign = 0;
            }
            $('#difference').val(sign * Math.pow(10, 8) + difference)
            $('#consommation').val($('#difference').val() * $('#tc').val());
        }
        else {
            $('#difference,#consommation').text(0);
        }
        CalculerConsomJournaliere();
    }
    if ($('#tc').val() != 0) {
        $('.alert-tc-consom').addClass('hidden');
    }
    else {
        $('.alert-tc-consom').removeClass('hidden');
    }
});

// Recuperer le nombre du jours entre les deux date (Partie estimée)
CalculerNbrJoursEstime();
// Recuperer le nombre du jours entre les deux date (Partie Reelle)
CalculerNbrJoursReelle();

// Calcule de la Redevance de Consommation
$('#selectTarif').change(function () {
    if ($('#selectTarif option:selected').text() == 'Choisir') {
        vider();
    }
    else {
        //CalculerBT();
    }
    CalculerRF();
    $('#radnon').prop("checked", true);
});

function vider() {
    nbrJoursEstimee = 0; nbrJoursReelle = 0; rc = 0; rc_due = 0; rf = 0; rf_due = 0; totalHT = 0; totalHT_due = 0;
    tppa_due = 0; totalTVA = 0; totalTVA_due = 0; tf = 0; tf_due = 0; totalTaxes = 0; totalTaxes_due = 0; rcFactureEstimee = 0; tppaFactureEstimee = 0;
    acompte = 0; nbrJoursPeriode = 0; consomJournaliere = 0; rcPeriode = 0; rcPeriode_due = 0; rc_estimee = 0; rc_reelle = 0;
    $(".table-consommation input,.table-calcul .form-control").each(function () {
        $(this).val(0);
    });
    $(".table-consommation td[id],.table-consommation td p[id],.table-calcul td[id],.table-calcul td p[id],.table-calcul td[id] p,.table-calcul td#trancheEstimeFr p,.table-calcul td#trancheEstimeAr p").each(function () {
        $(this).text("");
    });
    $('#totalRegler,#totalTaxe,#totalEspece,#totalcheque').text("00.00");
    nbrJoursEstimee = 0; nbrJoursReelle = 0;
    $('.table-consommation #tc').val(1);
    CalculerRF();
}

function CalculerTotalHT() {
    totalHT = 0;
    totalHT = Number(Math.round(parseFloat(rc) + parseFloat(rf_due) + 'e2') + 'e-2');
    totalHT_due = parseFloat(rc_due) + parseFloat(rf_due);
    // if (isNaN(totalHT)) {
    //     $('#totalHT').text('-');
    // }
    // else {
    //     $('#totalHT').text(addSeparatorsNF(totalHT, '.', ',', '.'));
    // }
}

function CalculerTotalHTPeriode() {
    totalHT = Number(Math.round(parseFloat(rcPeriode_due) + parseFloat(rf_due) - acompte + 'e2') + 'e-2');
    totalHT_due = parseFloat(rcPeriode_due) + parseFloat(rf_due) - acompte;
    // if (isNaN(totalHT)) {
    //     $('#totalHT').text('-');
    // }
    // else {
    //     $('#totalHT').text(totalHT);
    // }
}

function CalculerTotalRCPeriode() {
    rcPeriode_due = rc_estimee + rc_reelle;
    $('#rc_duePeriode').text(rc_estimee + rc_reelle);
}

function CalculerRF() {
    var selectCompteur = $('#selectCompteur option:selected').text();
    switch (selectCompteur) {
        case '2 Fils':
            $('#redevancesFixes').text(17.42);

            break;
        case '4 Fils 5-15 Ampères':
            $('#redevancesFixes').text(33.28);
            break;
        case '4 Fils 20-60 Ampères ou 10-60 Ampères':
            $('#redevancesFixes').text(44.57);
            break;
        default:
            $('#redevancesFixes').text(0);
    }
    rf = $('#redevancesFixes').text();
    rf_due = $('#redevancesFixes').text();
}
$('#dateDebEstimee').datepicker($.datepicker.regional['fr']);
$(function () {
    $("#dateDebEstimee").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        minDate: new Date('1-01-2017'),
        onChange: function () {
            $(this).change();
        }
    }).on("change", function () {
        var date2 = $('#dateDebEstimee').datepicker('getDate');
        date2.setDate(date2.getDate() + 1);
        $("#dateFinEstimee").datepicker("setDate", date2).datepicker('option', 'minDate', date2);
    });
});

$(function () {
    $("#dateFinEstimee").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        minDate: new Date('1-01-2017'),
        onChange: function () {
            $(this).change();
        }
    }).on("change", function () {
        var date2 = $('#dateFinEstimee').datepicker('getDate');
        var date3 = $('#dateFinEstimee').datepicker('getDate');
        date2.setDate(date2.getDate() + 1);
        $("#dateDebReelle").datepicker("setDate", date2).datepicker('option', 'minDate', date2);
        date3.setDate(date3.getDate() + 2);
        $("#dateFinReelle").datepicker("setDate", date3).datepicker('option', 'minDate', date3);
    });
});

function CalculerNbrJoursEstime() {
    $("#dateDebEstimee,#dateFinEstimee").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        minDate: new Date('1-01-2017'),
        onChange: function () {
            $(this).change();
        }
    }).on("change", function () {
        var d1 = $('#dateDebEstimee').datepicker('getDate');
        var d2 = $('#dateFinEstimee').datepicker('getDate');

        var oneDay = 24 * 60 * 60 * 1000;
        if (d1 && d2) {
            nbrJoursEstimee = Math.round(((d2 - d1) / (oneDay))) + 1;
        }
        $('#nbrjrsEstimee').html(nbrJoursEstimee + "  Jour(s)");

        if ($('#selectTypeReleve option:selected').text() == 'Réel') {
            $('#date1').text($('#dateFinReelle').val());
            $('#date2').text($('#dateDebEstimee').val());
        }
        else {
            $('#date1').text("");
            $('#date2').text("");
        }
        CalculerNbrJoursReelle();
        nbrJoursPeriode = nbrJoursEstimee + nbrJoursReelle;
        $('#nbrJoursPeriode').text(nbrJoursPeriode);
        CalculerConsomJournaliere();
        CalculerBT();
        $('#dateFinReelle').blur();
    });
}

function CalculerNbrJoursReelle() {
    $("#dateDebReelle,#dateFinReelle").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        minDate: new Date('1-01-2017'),
        onChange: function () {
            $(this).change();
        }
    }).on("change", function () {
        CalculerNbrJoursEstime();
        var d1 = $('#dateDebReelle').datepicker('getDate');
        var d2 = $('#dateFinReelle').datepicker('getDate');
        var oneDay = 24 * 60 * 60 * 1000;
        if (d1 && d2) {
            nbrJoursReelle = Math.round(((d2 - d1) / (oneDay))) + 1;
        }
        $('#nbrjrsReelle').html(nbrJoursReelle + "  Jour(s)");

        if ($('#selectTypeReleve option:selected').text() == 'Réel') {
            $('#date1').text($('#dateFinReelle').val());
            $('#date2').text($('#dateDebEstimee').val());
        }
        else {
            $('#date1').text("");
            $('#date2').text("");
        }
        nbrJoursPeriode = nbrJoursEstimee + nbrJoursReelle;
        $('#nbrJoursPeriode').text(nbrJoursPeriode);
        CalculerConsomJournaliere();
        CalculerBT();
        $('#dateFinEstimee').blur();
    });
}

function CalculerTPPAN(consommation, days) {
    var seuilExoneration = 0;
    if (days >= 28 && days <= 31) {
        seuilExoneration = 200;
        $('#seuilExoneration').text(seuilExoneration);
        if (consommation > seuilExoneration) {
            $('#tppa').text(Number(Math.round(100 * 0.08333 + 100 * 0.125 + (consommation - 200) * 0.18667 + 'e2') + 'e-2'));
            tppa_due = 100 * 0.08333 + 100 * 0.125 + (consommation - 200) * 0.18667;
        }
        else {
            $('#seuilExoneration').text(seuilExoneration);
            $('#tppa').text(0);
            tppa_due = 0;
        }
    }
    else {
        seuilExoneration = Number(Math.ceil(200 * days / 30));
        $('#seuilExoneration').text(seuilExoneration);
        if (consommation > seuilExoneration) {
            $('#tppa').text(Number(Math.round((100 * (days / 30) * 0.08333) + (100 * (days / 30) * 0.125) + ((consommation - (200 * (days / 30))) * 0.18667) + 'e2') + 'e-2'));
            tppa_due = 100 * (days / 30) * 0.08333 + 100 * (days / 30 * 0.125) + ((consommation - (200 * (days / 30))) * 0.18667);
        }
        else {
            $('#seuilExoneration').text(seuilExoneration);
            $('#tppa').text(0);
            tppa_due = 0;
        }
    }

    var plafondtppa = 0;
    if (days == 30) {
        plafondtppa = Number(Math.round(100 / 1.2 + 'e2') + 'e-2');;
    }
    else {
        plafondtppa = Number(Math.round(100 / 1.2 * days / 30 + 'e2') + 'e-2');
    }

    $('#plafondtppa').text(plafondtppa);
    $('#tppadue').text(tppa_due);

    if (tppa_due > plafondtppa) {
        $('#tppa').text(plafondtppa);
        tppa_due = plafondtppa;
    }
}

function CalculerTotalTVA() {
    var entretien = 0, location = 0;
    if ($('#selectCompteur option:selected').text() == '2 Fils') {
        entretien = 7.86; location = 9.56;
    }
    else if ($('#selectCompteur option:selected').text() == '4 Fils 5-15 Ampères') {
        entretien = 15; location = 18.28;
    }
    else if ($('#selectCompteur option:selected').text() == '4 Fils 20-60 Ampères ou 10-60 Ampères') {
        entretien = 15; location = 29.57;
    }
    else {
        entretien = 0; location = 0;
    }

    totalTVA = Number(Math.floor((rc * 0.18) + 'e2') + 'e-2') + Number(Math.floor((entretien * 0.2) + 'e2') + 'e-2') + Number(Math.floor((location * 0.15) + 'e2') + 'e-2') + Number(Math.floor((tppa_due * 0.2) + 'e2') + 'e-2');
    totalTVA_due = totalTVA;

    $('#totalTVA').text(totalTVA.toFixed(2));

    // infos supp
    $('#tvarc').text(rc_due * 0.18);
    $('#tvatppa').text(tppa_due * 0.2);
    $('#tvaentretien').text(entretien * 0.2);
    $('#tvalocation').text(location * 0.15);
}

function CalculerTotalTVAPeriode() {
    var entretien = 0, location = 0;
    if ($('#selectCompteur option:selected').text() == '2 Fils') {
        entretien = 7.86; location = 9.56;
    }
    else if ($('#selectCompteur option:selected').text() == '4 Fils 5-15 Ampères') {
        entretien = 15; location = 18.28;
    }
    else if ($('#selectCompteur option:selected').text() == '4 Fils 20-60 Ampères ou 10-60 Ampères') {
        entretien = 15; location = 29.57;
    }
    else {
        entretien = 0; location = 0;
    }

    totalTVA = Number(Math.floor((rc_due * 0.18) + 'e2') + 'e-2') + Number(Math.floor((entretien * 0.2) + 'e2') + 'e-2') + Number(Math.floor((location * 0.15) + 'e2') + 'e-2') + Number(Math.floor((tppa_due * 0.2) + 'e2') + 'e-2') - Number(Math.floor((rcFactureEstimee * 0.18) + 'e2') + 'e-2') - Number(Math.floor((tppaFactureEstimee * 0.2) + 'e2') + 'e-2');
    totalTVA_due = totalTVA;
    $('#totalTVA').text(totalTVA.toFixed(2));

    // infos supp
    $('#tvarc').text(rc_due * 0.18);
    $('#tvatppa').text(tppa_due * 0.2);
    $('#tvaentretien').text(entretien * 0.2);
    $('#tvalocation').text(location * 0.15);
}

function CalculerTF() {
    tf = Number(Math.round((totalHT + tppa_due + totalTVA_due) * 0.0025 + 'e2') + 'e-2');
    tf_due = (totalHT_due + tppa_due + totalTVA_due) * 0.0025;
    if (isNaN(tf)) {
        $('#timbreFiscal').text("-");
    }
    else {
        $('#timbreFiscal').text(tf);
    }
}

function CalculerTotalTaxes() {
    totalTaxes = Number(Math.round(tppa_due + totalTVA + tf + 'e2') + 'e-2');
    totalTaxes_due = tppa_due + totalTVA + tf;
    if (isNaN(totalTaxes)) {
        $('#totalTaxes').text("-");
    }
    else {
        $('#totalTaxes').text(totalTaxes);
    }
}

function CalculerTotalFacture() {
    var totalEspece = Number(Math.round(totalHT_due + totalTaxes_due + 'e2') + 'e-2');
    var totalcheque = Number(Math.round(totalEspece - tf_due + 'e2') + 'e-2');
    $('#totalEspece').text(addSeparatorsNF(totalEspece.toFixed(2), '.', ',', ' '));
    $('#totalcheque').text(addSeparatorsNF(totalcheque.toFixed(2), '.', ',', ' '));
    $('#totalRegler').text(addSeparatorsNF(totalEspece.toFixed(2), '.', ',', ' '));
    $('#totalTaxe').text(addSeparatorsNF(totalTaxes, '.', ',', ' '));

    if (isNaN(totalEspece)) {
        $('#totalEspece,#totalcheque,#totalRegler,#totalTaxe').text("-");
    }
    else {
        $('#totalEspece').text(addSeparatorsNF(totalEspece.toFixed(2), '.', ',', ' '));
    }
}

function CalculerConsomJournaliere() {
    consomJournaliere = $('#consommation').val() / nbrJoursPeriode;
    if (consomJournaliere == 'Infinity' || isNaN(consomJournaliere)) {
        $('#consomJournaliere').text("-");
    }
    else {
        $('#consomJournaliere').text(Math.round($('#consommation').val() / nbrJoursPeriode));
    }
}

function CheckDate() {
    if ($('#selectTypeReleve option:selected').text() == 'Estimé') {
        if ($('#dateDebEstimee').val() == 0 || $('#dateFinEstimee').val() == 0) {
            $('#consommation,#difference').attr('disabled', 'disabled');
            $('.alert-indexdate').removeClass('hidden');
        }
        else {
            if (nbrJoursEstimee <= 1) {
                $('#erreurDateEstimee').html('<p class="animated flash">la date de début doit être supérieure strictement au date de fin</p>');
                $('#consommation,#difference').attr('disabled', 'disabled');
                $('.alert-consommation').addClass('hidden');
            }
            else {
                $('#erreurDateEstimee').html('');
                $('.alert-indexdate').addClass('hidden');
                $('.alert-consommation').removeClass('hidden');
                $('#difference').removeAttr('disabled');
            }
        }
    }
    else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
        $('#consommation,#difference').attr('disabled', 'disabled');
        $('.alert-consommation').addClass('hidden');
        $('#dateDebReelle,#dateFinReelle').removeAttr('disabled');
        $('#consomEstimee').removeAttr('disabled');
        $('#dateDebEstimee,#dateFinEstimee').on('change', function () {
            if ($('#dateDebEstimee').val() == 0 || $('#dateFinEstimee').val() == 0) {
                $('.alert-indexdate').removeClass('hidden');
            }
            else {
                if (nbrJoursEstimee <= 1) {
                    $('#erreurDateEstimee').html('<p class="animated flash">la date de début doit être supérieure strictement au date de fin</p>');
                }
                else {
                    $('#erreurDateEstimee').html('');
                    $('.alert-indexdate').addClass('hidden');
                }
            }
        });

        $('#dateDebReelle,#dateFinReelle').on('change', function () {
            if ($('#dateDebReelle').val() == 0 || $('#dateFinReelle').val() == 0) {
                $('.alert-indexdate').removeClass('hidden');
            }
            else {
                if (nbrJoursReelle <= 1) {
                    $('#erreurDateReelle').html('<p class="animated flash">la date de début doit être supérieure strictement au date de fin</p>');
                }
                else {
                    $('#erreurDateReelle').html("");
                    $('.alert-indexdate').addClass('hidden');
                }
            }
        });
    }
    else {
        $('.alert-indexdate').addClass('hidden');
        $('.alert-consommation').addClass('hidden');
    }
}

function CalculerAcompte() {
    acompte = Number(Math.round(rc_due + tppa_due + 'e2') + 'e-2');
    $('#acompte').text(acompte);
}
$('#radnon').prop("checked", true);
$('#selectTypeReleve,#consommation,#difference,#consomEstimee,#dateDebEstimee,#dateFinEstimee,#dateDebReelle,#dateFinReelle,#montantReelle,#redevancesFixes,#totalHT,#tppa,#totalTVA,#timbreFiscal,#totalTaxes').on("keyup change", function () {
    CheckDate();
    // CalculerBT();
    CheckTC();
});
$('#consommation,#difference').on('keyup change', function () {
    if ($(this).val() == 0) {
        $('.alert-consommation').removeClass('hidden');
    }
    else {
        $('.alert-consommation').addClass('hidden');
    }
});
// Si le type de relevé est Sélectionné
$('#selectTypeReleve').change(function () {
    vider();

    if ($('#selectTypeReleve option:selected').text() == 'Choisir') {
        $('.table-consommation input,#dateDebEstimee,#dateFinEstimee,#tc').attr('disabled', 'disabled');
        $('.trConsomEstimee,.trDateReelle,.trAcompte').addClass('hidden');
        $('.alert-indextypereleve').removeClass('hidden');
        $('#consomEstimee').val(0);
        $('.alert-consommation,.alert-tc-consom').addClass('hidden');
    }
    else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
        $('.trConsomEstimee,.trDateReelle,.trAcompte').removeClass('hidden');
        $('.table-consommation input,#dateDebEstimee,#dateFinEstimee').removeAttr('disabled');
        $('.alert-indextypereleve').addClass('hidden');
        $('.alert-consomEstimee').removeClass('hidden');
        $('.alert-indexdate').addClass('hidden');
        $('#consomEstimee').focus();

        $('#consomEstimee').on('keyup change', function () {
            if ($(this).val() == 0) {
                $('.alert-consomEstimee').removeClass('hidden');
                $('.alert-indextypereleve').addClass('hidden');
                $('.alert-indexdate').addClass('hidden');
            }
            else {
                $('.alert-consomEstimee').addClass('hidden');
                $('#selectTypeReleve').val(2);
                if ($('#nouvelIndex').val() == 0 || $('#ancienIndex').val() == 0) {
                    $('.alert-indexes').removeClass('hidden');
                }
                $('#nouvelIndex,#ancienIndex').on('keyup change', function () {
                    if ($('#nouvelIndex').val() == 0 || $('#ancienIndex').val() == 0) {
                        $('.alert-indexes').removeClass('hidden');
                    }
                    else {
                        $('.alert-indexes').addClass('hidden');
                        if ($('#radoui').prop('checked')) {
                            $('#tc').removeAttr("disabled");
                            $('.alert-tc-consom').removeClass('hidden');
                        }
                        else {
                            $('#tc').attr("disabled", "disabled");
                            $('.alert-tc-consom').addClass('hidden');
                            if ($('#dateDebEstimee').val() == 0 || $('#dateFinEstimee').val() == 0 || $('#dateDebReelle').val() == 0 || $('#dateFinReelle').val() == 0) {
                                $('.alert-indexdate').removeClass('hidden');
                            }
                        }

                        $('#tc').on("keyup", function () {
                            if ($(this).val() != 0) {
                                if ($('#dateDebEstimee').val() == 0 || $('#dateFinEstimee').val() == 0 || $('#dateDebReelle').val() == 0 || $('#dateFinReelle').val() == 0) {
                                    $('.alert-indexdate').removeClass('hidden');
                                }
                            }
                        });

                        $('.alert-consommation').addClass('hidden');
                    }
                });
            }
        });
        $('#difference').attr('disabled', 'disabled').val(difference);
        $('#consommation').attr('disabled', 'disabled');
    }
    else {
        $('#nouvelIndex,#ancienIndex').attr('disabled', 'disabled');
        if ($('#dateDebEstimee').val() == 0 || $('#dateFinEstimee').val() == 0) {
            $('.alert-indexdate').removeClass('hidden');
            $('#dateDebEstimee,#dateFinEstimee').removeAttr("disabled");
        }
        else {

            $('.alert-indexdate').addClass('hidden');
            if ($('#difference').val() == 0) {
                $('.alert-consommation').removeClass('hidden');
            }
            else {
                $('.alert-consommation').addClass('hidden');

                if ($('#radoui').prop('checked')) {
                    $('#tc').removeAttr("disabled");
                    $('.alert-tc-consom').removeClass('hidden');
                }
                else {
                    $('#tc').Attr("disabled", "disabled");
                    $('.alert-tc-consom').addClass('hidden');
                }
            }
        }
        //#################################
        $('.trConsomEstimee,.trDateReelle,.trAcompte').addClass('hidden');
        //$('.table-consommation input').attr('disabled', 'disabled');
        $('.alert-indextypereleve').addClass('hidden');
        $('.alert-consomEstimee').addClass('hidden');
        $('#consomEstimee').val(0);
    }

});
$('#difference,#tc,#radoui,#radnon').on("click keyup", function () {
    $('#consommation').val($('#difference').val() * $('#tc').val());
});
function CalculerBT() {
    CheckTC();
    if ($('#selectTypeReleve option:selected').text() == 'Estimé') {
        CalculerRCEstimee();
    }
    else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
        CalculerRCReelle();
        CalculerRCEstimeeReelle();
        CalculerRCAcompte();
    }
    else {
        vider();
        $('.trConsomEstimee').addClass('hidden');
    }
}
$('#selectTarif').attr("disabled", "disabled");
$('#selectTarif').change(function () {
    //vider();
    $('#selectCompteur').val(0);
    CalculerRF();
});

// Transformateur de courant
function CheckTC() {
    //$('#radoui').prop('checked',true);
    $('.tc-radio input[type="radio"]').on("click", function () {
        $('#tc').val(1);

        if ($('#radoui').prop('checked') && $('#selectTypeReleve option:selected').text() != 'Choisir') {
            if ($('#selectCompteur option:selected').val() == 1) {
                // alert("OLLLLLLLL");
                $('#tc,#radoui,#radnon').attr("disabled", "disabled");
                $('.alert-tc-consom').addClass('hidden');
            }
            else {
                $('#tc,#radoui,#radnon').removeAttr("disabled");
                $('.alert-tc-consom').removeClass('hidden');
            }

        }
        else {
            $('#tc').attr("disabled", "disabled");
            $('.alert-tc-consom').addClass('hidden');
        }
        $('#consommation').attr("disabled", "disabled");
        if ($('#selectTypeReleve option:selected').text() == 'Estimé') {
            $('#consommation').val($('#difference').val() * $('#tc').val());

        }
        else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
            $('#difference').val(sign * Math.pow(10, 8) + parseInt($('#nouvelIndex').val() - $('#ancienIndex').val()));
            $('#consommation').val($('#difference').val() * $('#tc').val());
        }
    });

    $('#difference').on("keyup", function () {
        if ($('#radoui').prop('checked')) {
            $('#tc').removeAttr("disabled");
            if ($('#tc').val() <= 1) {
                $('.alert-tc-consom').removeClass('hidden');
            }
        }
        else {
            $('#tc').attr("disabled", "disabled");
            $('.alert-tc-consom').addClass('hidden');
        }
        $('#consommation').attr("disabled", "disabled");
        if ($('#selectTypeReleve option:selected').text() == 'Estimé') {
            $('#consommation').val($('#difference').val() * $('#tc').val());
        }
        else if ($('#selectTypeReleve option:selected').text() == 'Réel') {
            $('#difference').val(sign * Math.pow(10, 8) + parseInt($('#nouvelIndex').val() - $('#ancienIndex').val()));
            $('#consommation').val($('#difference').val() * $('#tc').val());
        }
    });

}


$('#selectCompteur').change(function () {
    if ($('#selectCompteur option:selected').val() == 1) {
        // alert("OLLLLLLLL");
        $('#tc,#radoui,#radnon').attr("disabled", "disabled");
        $('.alert-tc-consom').addClass('hidden');
    }
    else {
        $('#tc,#radoui,#radnon').removeAttr("disabled");
        $('.alert-tc-consom').removeClass('hidden');
    }

});