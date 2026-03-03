// ==============================
// ONEE Electricity Tariff Data
// ==============================

import type { MeterType, VoltageLevel, TariffOption } from './types';

// --- BT Tranches (Basse Tension) ---
// Prices are in DH/kWh (HT)

export interface TrancheConfig {
    tranche: number;
    nameFr: string;
    nameAr: string;
    minKwh: number;      // inclusive
    maxKwh: number;      // inclusive (Infinity for last)
    unitPrice: number;   // DH/kWh HT
}

// For consumption <= 150 kWh (split into T1 + T2)
export const BT_TRANCHES_LOW: TrancheConfig[] = [
    { tranche: 1, nameFr: 'Tranche 1', nameAr: 'الشطر 1', minKwh: 0, maxKwh: 100, unitPrice: 0.76356 },
    { tranche: 2, nameFr: 'Tranche 2', nameAr: 'الشطر 2', minKwh: 101, maxKwh: 150, unitPrice: 0.90950 },
];

// For consumption > 150 kWh (single tranche applies to entire consumption)
export const BT_TRANCHES_HIGH: TrancheConfig[] = [
    { tranche: 3, nameFr: 'Tranche 3', nameAr: 'الشطر 3', minKwh: 151, maxKwh: 210, unitPrice: 0.90950 },
    { tranche: 4, nameFr: 'Tranche 4', nameAr: 'الشطر 4', minKwh: 211, maxKwh: 310, unitPrice: 0.98950 },
    { tranche: 5, nameFr: 'Tranche 5', nameAr: 'الشطر 5', minKwh: 311, maxKwh: 510, unitPrice: 1.17094 },
    { tranche: 6, nameFr: 'Tranche 6', nameAr: 'الشطر 6', minKwh: 511, maxKwh: Infinity, unitPrice: 1.35238 },
];

// --- Fixed Fees by Meter Type (DH/month HT) ---

export interface MeterFees {
    redevanceFixes: number;  // RF total
    entretien: number;
    location: number;
}

export const METER_FEES: Record<MeterType, MeterFees> = {
    '2fils': { redevanceFixes: 17.42, entretien: 7.86, location: 9.56 },
    '4fils_5_15': { redevanceFixes: 33.28, entretien: 15, location: 18.28 },
    '4fils_20_60': { redevanceFixes: 44.57, entretien: 15, location: 29.57 },
};

// --- TVA Rates ---
export const TVA_RC = 0.18;          // 18% on consumption
export const TVA_TPPA = 0.20;        // 20% on TPPA
export const TVA_ENTRETIEN = 0.20;   // 20% on maintenance
export const TVA_LOCATION = 0.15;    // 15% on meter rental
export const TIMBRE_FISCAL = 0.0025; // 0.25%

// --- TPPA (Taxe pour la Promotion du Paysage Audiovisuel National) ---
export const TPPA_SEUIL_BASE = 200;   // kWh exemption threshold for 30 days
export const TPPA_RATES = [
    { max: 100, rate: 0.08333 },       // first 100 kWh above threshold
    { max: 200, rate: 0.125 },         // next 100 kWh
    { max: Infinity, rate: 0.18667 },  // remainder
];
export const TPPA_PLAFOND_BASE = 100 / 1.2; // cap per 30 days

// --- Optional Tariffs (HT/THT) ---
// Prices in DH TTC (TVA 20% included)

export interface OptionalTariffRate {
    primFixe: number;     // DH kW/Year
    priceHP: number;      // DH/kWh
    priceHPL: number;     // DH/kWh
    priceHC: number;      // DH/kWh
}

export const THT_TARIFFS: Record<TariffOption, OptionalTariffRate> = {
    tlu: { primFixe: 2128.60, priceHP: 0.7833, priceHPL: 0.6473, priceHC: 0.6077 },
    mu: { primFixe: 852.17, priceHP: 1.2477, priceHPL: 0.7673, priceHC: 0.6077 },
    cu: { primFixe: 426.08, priceHP: 1.6454, priceHPL: 0.8924, priceHC: 0.6348 },
    tcu: { primFixe: 378.00, priceHP: 1.9088, priceHPL: 0.9213, priceHC: 0.6391 },
};

export const HT_TARIFFS: Record<TariffOption, OptionalTariffRate> = {
    tlu: { primFixe: 2379.13, priceHP: 0.8265, priceHPL: 0.6613, priceHC: 0.6263 },
    mu: { primFixe: 952.76, priceHP: 1.3561, priceHPL: 0.7988, priceHC: 0.6263 },
    cu: { primFixe: 475.46, priceHP: 1.8101, priceHPL: 0.9388, priceHC: 0.6567 },
    tcu: { primFixe: 421.81, priceHP: 2.0999, priceHPL: 0.9692, priceHC: 0.6611 },
};

// --- Power Reduction Coefficients ---
export const COEFF_HP = 1;
export const COEFF_HPL = 0.6;
export const COEFF_HC = 0.4;

// --- Cos Phi Thresholds ---
export const COS_PHI_MIN_GENERAL = 0.8;
export const COS_PHI_MIN_SUPERPOINTE = 0.9;
export const COS_PHI_PENALTY_RATE = 2; // 2% per 0.01 shortfall (expressed as multiplier)

// --- Tariff option duration descriptions ---
export const TARIFF_OPTION_INFO: Record<TariffOption, { nameFr: string; descFr: string; nameAr: string }> = {
    tlu: { nameFr: 'Très Longue Utilisation', descFr: '> 6000 heures/an', nameAr: 'استعمال طويل جدا' },
    mu: { nameFr: 'Moyenne Utilisation', descFr: '3500 - 6000 heures/an', nameAr: 'استعمال متوسط' },
    cu: { nameFr: 'Courte Utilisation', descFr: '1000 - 3500 heures/an', nameAr: 'استعمال قصير' },
    tcu: { nameFr: 'Très Courte Utilisation', descFr: '< 1000 heures/an', nameAr: 'استعمال قصير جدا' },
};

// Helper to get tariff by voltage level
export function getOptionalTariff(level: VoltageLevel, option: TariffOption): OptionalTariffRate {
    return level === 'tht' ? THT_TARIFFS[option] : HT_TARIFFS[option];
}
