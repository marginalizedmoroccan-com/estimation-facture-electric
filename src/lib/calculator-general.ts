// ==============================
// General Tariff Calculator (HT / THT)
// ==============================
// Implements formulas from reference/formulate-electric-generale.md

import type { GeneralTariffInput, GeneralTariffResult } from './types';
import { getOptionalTariff, COS_PHI_MIN_GENERAL, COS_PHI_PENALTY_RATE } from './tariffs';

function round2(n: number): number {
    return Math.round((n + Number.EPSILON) * 100) / 100;
}

/**
 * Calculate General Tariff Bill
 * 
 * RC = pHP × ConsHP + pHPL × ConsHPL + pHC × ConsHC
 * RP = Pf/12 × PS
 * RDPS = 1.5 × Pf/12 × (PA - PS)  [if PA > PS]
 * Maj(cos phi) = 2 × (0.8 - cos_phi) × (RC + RP + RDPS)  [if cos_phi < 0.8]
 */
export function calculateGeneralTariff(input: GeneralTariffInput): GeneralTariffResult {
    const tariff = getOptionalTariff(input.voltageLevel, input.option);

    // Redevance de Consommation (RC) 
    const rcHP = round2(tariff.priceHP * input.consHP);
    const rcHPL = round2(tariff.priceHPL * input.consHPL);
    const rcHC = round2(tariff.priceHC * input.consHC);
    const rc = round2(rcHP + rcHPL + rcHC);

    // Redevance de Puissance (RP) = Pf/12 × PS
    const rp = round2((tariff.primFixe / 12) * input.puissanceSouscrite);

    // Redevance de Dépassement (RDPS)
    let rdps = 0;
    if (!input.isFirstSixMonths && input.puissanceAppelee > input.puissanceSouscrite) {
        rdps = round2(1.5 * (tariff.primFixe / 12) * (input.puissanceAppelee - input.puissanceSouscrite));
    }

    // Cos Phi Surcharge
    let majCosPhi = 0;
    if (input.cosPhi < COS_PHI_MIN_GENERAL) {
        // 2% per 0.01 shortfall
        const shortfall = Math.round((COS_PHI_MIN_GENERAL - input.cosPhi) * 100);
        majCosPhi = round2(COS_PHI_PENALTY_RATE * shortfall * (rc + rp + rdps) / 100);
    }

    const totalHT = round2(rc + rp + rdps + majCosPhi);

    return {
        rc,
        rcHP,
        rcHPL,
        rcHC,
        rp,
        rdps,
        majCosPhi,
        totalHT,
        primFixe: tariff.primFixe,
        priceHP: tariff.priceHP,
        priceHPL: tariff.priceHPL,
        priceHC: tariff.priceHC,
    };
}
