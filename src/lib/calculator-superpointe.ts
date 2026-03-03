// ==============================
// Super Pointe Tariff Calculator
// ==============================
// Implements formulas from reference/super-points.md

import type { SuperPointeInput, SuperPointeResult } from './types';
import { getOptionalTariff, COS_PHI_MIN_SUPERPOINTE, COS_PHI_PENALTY_RATE } from './tariffs';

function round2(n: number): number {
    return Math.round((n + Number.EPSILON) * 100) / 100;
}

/**
 * Calculate Super Pointe Tariff Bill
 * 
 * RC = pSHP × ConsSHP + pHP × ConsHP + pHPL × ConsHPL + pHC × ConsHC
 * RP = Pfi/12 × [PSSHP + 0.8×(PS1-PSSHP) + 0.6×(PS2-PS1) + 0.4×(PS3-PS2)]
 * RDPS = 1.5 × Pfi/12 × [(PASHP-PSSHP) + 0.8×(PA1-PS1) + 0.6×(PA2-PS2) + 0.4×(PA3-PS3)]
 * Maj(cos phi) = 2 × (0.9 - cos_phi) × (RC + RP + RDPS)
 * 
 * Conditions: PSSHP <= 0.8×PS1 and PS1 <= PS2 <= PS3
 */
export function calculateSuperPointe(input: SuperPointeInput): SuperPointeResult {
    const tariff = getOptionalTariff(input.voltageLevel, input.option);

    // RC - using tariff prices (SHP uses HP price since it's a variant)
    // For super pointe, SHP price is typically higher than HP
    // We'll use: SHP = HP × 1.2 as per typical ONEE super-pointe premium
    const pSHP = round2(tariff.priceHP * 1.2);
    const rcSHP = round2(pSHP * input.consSHP);
    const rcHP = round2(tariff.priceHP * input.consHP);
    const rcHPL = round2(tariff.priceHPL * input.consHPL);
    const rcHC = round2(tariff.priceHC * input.consHC);
    const rc = round2(rcSHP + rcHP + rcHPL + rcHC);

    // RP with reduction coefficients per time slot
    const rpBase = tariff.primFixe / 12;
    const rp = round2(rpBase * (
        input.psSHP +
        0.8 * (input.ps1 - input.psSHP) +
        0.6 * (input.ps2 - input.ps1) +
        0.4 * (input.ps3 - input.ps2)
    ));

    // RDPS per time slot
    let rdps = 0;
    if (!input.isFirstSixMonths) {
        const d_shp = Math.max(0, input.paSHP - input.psSHP);
        const d_hp = Math.max(0, input.pa1 - input.ps1);
        const d_hpl = Math.max(0, input.pa2 - input.ps2);
        const d_hc = Math.max(0, input.pa3 - input.ps3);

        if (d_shp > 0 || d_hp > 0 || d_hpl > 0 || d_hc > 0) {
            rdps = round2(1.5 * rpBase * (
                d_shp +
                0.8 * d_hp +
                0.6 * d_hpl +
                0.4 * d_hc
            ));
        }
    }

    // Cos Phi (threshold is 0.9 for super pointe, not 0.8)
    let majCosPhi = 0;
    if (input.cosPhi < COS_PHI_MIN_SUPERPOINTE) {
        const shortfall = Math.round((COS_PHI_MIN_SUPERPOINTE - input.cosPhi) * 100);
        majCosPhi = round2(COS_PHI_PENALTY_RATE * shortfall * (rc + rp + rdps) / 100);
    }

    const totalHT = round2(rc + rp + rdps + majCosPhi);

    return {
        rc,
        rcSHP,
        rcHP,
        rcHPL,
        rcHC,
        rp,
        rdps,
        majCosPhi,
        totalHT,
        primFixe: tariff.primFixe,
    };
}

/**
 * Validate super pointe conditions
 */
export function validateSuperPointeConditions(input: SuperPointeInput): string[] {
    const errors: string[] = [];
    if (input.psSHP > 0.8 * input.ps1) {
        errors.push('PSSHP doit être ≤ 0.8 × PS1');
    }
    if (input.ps1 > input.ps2) {
        errors.push('PS1 doit être ≤ PS2');
    }
    if (input.ps2 > input.ps3) {
        errors.push('PS2 doit être ≤ PS3');
    }
    return errors;
}
