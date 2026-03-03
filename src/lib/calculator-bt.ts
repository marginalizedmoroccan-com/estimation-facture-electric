// ==============================
// BT (Basse Tension) Bill Calculator
// ==============================
// Ported from reference/calculation.js + reference/gobal.js

import type { BTInput, BTResult, TrancheDetail } from './types';
import {
    BT_TRANCHES_LOW, BT_TRANCHES_HIGH, METER_FEES,
    TVA_RC, TVA_TPPA, TVA_ENTRETIEN, TVA_LOCATION, TIMBRE_FISCAL,
    TPPA_SEUIL_BASE, TPPA_RATES, TPPA_PLAFOND_BASE
} from './tariffs';

function round2(n: number): number {
    return Math.round((n + Number.EPSILON) * 100) / 100;
}

function floor2(n: number): number {
    return Math.floor(n * 100) / 100;
}

/**
 * Calculate the TPPA (Taxe Promotion Paysage Audiovisuel)
 */
function calculateTPPA(consumption: number, days: number): { tppa: number; seuil: number; plafond: number } {
    let seuil: number;
    let plafond: number;

    if (days >= 28 && days <= 31) {
        seuil = TPPA_SEUIL_BASE;
        plafond = round2(TPPA_PLAFOND_BASE);
    } else {
        seuil = Math.ceil(TPPA_SEUIL_BASE * days / 30);
        plafond = round2(TPPA_PLAFOND_BASE * days / 30);
    }

    if (consumption <= seuil) {
        return { tppa: 0, seuil, plafond };
    }

    const ratio = days >= 28 && days <= 31 ? 1 : days / 30;
    let tppa = 0;
    tppa += 100 * ratio * TPPA_RATES[0].rate;
    tppa += 100 * ratio * TPPA_RATES[1].rate;
    tppa += (consumption - seuil) * TPPA_RATES[2].rate;

    tppa = round2(tppa);

    // Cap
    if (tppa > plafond) {
        tppa = plafond;
    }

    return { tppa, seuil, plafond };
}

/**
 * Calculate BT tranches for consumption
 * 
 * Logic from ONEE reference:
 * - If consumption <= 150 kWh: progressive (T1: 0-100, T2: 101-150)
 * - If consumption > 150 kWh: single tranche applies to entire consumption
 * - If billing period != 28-31 days: thresholds are adjusted proportionally
 */
function calculateTranches(consumption: number, days: number): TrancheDetail[] {
    const tranches: TrancheDetail[] = [];
    const isNormal = days >= 28 && days <= 31;

    if (isNormal) {
        // Normal period (28-31 days)
        if (consumption <= 150) {
            // Progressive: T1 + T2
            if (consumption <= 100) {
                tranches.push({
                    tranche: 1,
                    nameFr: 'Tranche 1',
                    nameAr: 'الشطر 1',
                    quantity: consumption,
                    unitPrice: BT_TRANCHES_LOW[0].unitPrice,
                    amount: round2(consumption * BT_TRANCHES_LOW[0].unitPrice),
                });
            } else {
                tranches.push({
                    tranche: 1,
                    nameFr: 'Tranche 1',
                    nameAr: 'الشطر 1',
                    quantity: 100,
                    unitPrice: BT_TRANCHES_LOW[0].unitPrice,
                    amount: round2(100 * BT_TRANCHES_LOW[0].unitPrice),
                });
                tranches.push({
                    tranche: 2,
                    nameFr: 'Tranche 2',
                    nameAr: 'الشطر 2',
                    quantity: consumption - 100,
                    unitPrice: BT_TRANCHES_LOW[1].unitPrice,
                    amount: round2((consumption - 100) * BT_TRANCHES_LOW[1].unitPrice),
                });
            }
        } else {
            // Single tranche for all consumption
            const t = BT_TRANCHES_HIGH.find(
                t => consumption >= t.minKwh && consumption <= t.maxKwh
            ) || BT_TRANCHES_HIGH[BT_TRANCHES_HIGH.length - 1];

            tranches.push({
                tranche: t.tranche,
                nameFr: t.nameFr,
                nameAr: t.nameAr,
                quantity: consumption,
                unitPrice: t.unitPrice,
                amount: round2(consumption * t.unitPrice),
            });
        }
    } else {
        // Adjusted thresholds for non-standard period
        const tr1 = Math.ceil(100 * days / 30);
        const tr2 = 150 * days / (365 / 12);
        const tr3sup = Math.ceil(210 * days / 30);
        const tr4sup = Math.ceil(310 * days / 30);
        const tr5sup = Math.ceil(510 * days / 30);

        if (consumption <= tr2) {
            // Progressive with adjusted thresholds
            if (consumption <= tr1) {
                tranches.push({
                    tranche: 1,
                    nameFr: 'Tranche 1',
                    nameAr: 'الشطر 1',
                    quantity: Math.round(consumption),
                    unitPrice: BT_TRANCHES_LOW[0].unitPrice,
                    amount: round2(consumption * BT_TRANCHES_LOW[0].unitPrice),
                });
            } else {
                tranches.push({
                    tranche: 1,
                    nameFr: 'Tranche 1',
                    nameAr: 'الشطر 1',
                    quantity: tr1,
                    unitPrice: BT_TRANCHES_LOW[0].unitPrice,
                    amount: round2(tr1 * BT_TRANCHES_LOW[0].unitPrice),
                });
                tranches.push({
                    tranche: 2,
                    nameFr: 'Tranche 2',
                    nameAr: 'الشطر 2',
                    quantity: Math.round(consumption - tr1),
                    unitPrice: BT_TRANCHES_LOW[1].unitPrice,
                    amount: round2((consumption - tr1) * BT_TRANCHES_LOW[1].unitPrice),
                });
            }
        } else {
            // Single adjusted tranche
            let unitPrice: number;
            let tranche: number;
            let nameFr: string;
            let nameAr: string;

            if (consumption <= tr3sup) {
                unitPrice = 0.90950; tranche = 3; nameFr = 'Tranche 3'; nameAr = 'الشطر 3';
            } else if (consumption <= tr4sup) {
                unitPrice = 0.98950; tranche = 4; nameFr = 'Tranche 4'; nameAr = 'الشطر 4';
            } else if (consumption <= tr5sup) {
                unitPrice = 1.17094; tranche = 5; nameFr = 'Tranche 5'; nameAr = 'الشطر 5';
            } else {
                unitPrice = 1.35238; tranche = 6; nameFr = 'Tranche 6'; nameAr = 'الشطر 6';
            }

            tranches.push({
                tranche,
                nameFr,
                nameAr,
                quantity: consumption,
                unitPrice,
                amount: round2(consumption * unitPrice),
            });
        }
    }

    return tranches;
}

/**
 * Main BT bill calculator
 */
export function calculateBT(input: BTInput): BTResult {
    const { meter, consumption, days } = input;
    const fees = METER_FEES[meter];

    // 1. Calculate consumption charge (RC) by tranches
    const tranches = calculateTranches(consumption, days);
    const rc = round2(tranches.reduce((sum, t) => sum + t.amount, 0));

    // 2. Fixed fees (RF)
    const rf = fees.redevanceFixes;

    // 3. Total HT
    const totalHT = round2(rc + rf);

    // 4. TPPA
    const { tppa, seuil: seuilExoneration, plafond: plafondTPPA } = calculateTPPA(consumption, days);

    // 5. TVA breakdown
    const tvaRC = floor2(rc * TVA_RC);
    const tvaTPPA = floor2(tppa * TVA_TPPA);
    const tvaEntretien = floor2(fees.entretien * TVA_ENTRETIEN);
    const tvaLocation = floor2(fees.location * TVA_LOCATION);
    const tva = round2(tvaRC + tvaTPPA + tvaEntretien + tvaLocation);

    // 6. Timbre fiscal
    const timbreFiscal = round2((totalHT + tppa + tva) * TIMBRE_FISCAL);

    // 7. Total taxes
    const totalTaxes = round2(tppa + tva + timbreFiscal);

    // 8. Total to pay
    const totalEspece = round2(totalHT + totalTaxes);
    const totalCheque = round2(totalEspece - timbreFiscal);

    return {
        tranches,
        rc,
        rf,
        totalHT,
        tppa,
        tva,
        timbreFiscal,
        totalTaxes,
        totalEspece,
        totalCheque,
        tvaRC,
        tvaTPPA,
        tvaEntretien,
        tvaLocation,
        entretien: fees.entretien,
        location: fees.location,
        seuilExoneration,
        plafondTPPA,
    };
}
