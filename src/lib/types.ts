// ==============================
// TypeScript Types for Electricity Bill Estimation
// ==============================

// --- BT (Basse Tension) Types ---

export type TarifType = 'domestique' | 'patente' | 'force_motrice_industrielle' | 'force_motrice_agricole';
export type MeterType = '2fils' | '4fils_5_15' | '4fils_20_60';
export type ReleveType = 'estime' | 'reel';

export interface BTInput {
    tarif: TarifType;
    meter: MeterType;
    consumption: number;         // kWh
    days: number;                // billing period in days
    tcRatio: number;             // transformer ratio (default 1)
}

export interface TrancheDetail {
    tranche: number;
    nameFr: string;
    nameAr: string;
    quantity: number;
    unitPrice: number;
    amount: number;
}

export interface BTResult {
    tranches: TrancheDetail[];
    rc: number;                  // Redevance de Consommation
    rf: number;                  // Redevances Fixes
    totalHT: number;             // Total Hors Taxes
    tppa: number;                // Taxe pour la Promotion du Paysage Audiovisuel
    tva: number;                 // Total TVA
    timbreFiscal: number;        // Timbre Fiscal (0.25%)
    totalTaxes: number;          // TPPA + TVA + Timbre
    totalEspece: number;         // Total with timbre (cash)
    totalCheque: number;         // Total without timbre (cheque)
    // TVA detail
    tvaRC: number;
    tvaTPPA: number;
    tvaEntretien: number;
    tvaLocation: number;
    // Meter costs
    entretien: number;
    location: number;
    // TPPA detail
    seuilExoneration: number;
    plafondTPPA: number;
}

// --- General Tariff Types ---

export type VoltageLevel = 'tht' | 'ht';
export type TariffOption = 'tlu' | 'mu' | 'cu' | 'tcu';

export interface GeneralTariffInput {
    voltageLevel: VoltageLevel;
    option: TariffOption;
    consHP: number;              // kWh Heures de Pointe
    consHPL: number;             // kWh Heures Pleines
    consHC: number;              // kWh Heures Creuses
    puissanceSouscrite: number;  // kW subscribed power
    puissanceAppelee: number;    // kW max called power (for RDPS)
    cosPhi: number;              // power factor (0-1)
    isFirstSixMonths?: boolean;  // first 6 months = no RDPS
}

export interface GeneralTariffResult {
    rc: number;                  // Redevance de Consommation
    rcHP: number;
    rcHPL: number;
    rcHC: number;
    rp: number;                  // Redevance de Puissance
    rdps: number;                // Redevance de Dépassement
    majCosPhi: number;           // Cos phi surcharge
    totalHT: number;
    primFixe: number;            // Prime fixe used
    priceHP: number;
    priceHPL: number;
    priceHC: number;
}

// --- Super Pointe Types ---

export interface SuperPointeInput {
    voltageLevel: VoltageLevel;
    option: TariffOption;
    consSHP: number;             // kWh Super Heures de Pointe
    consHP: number;
    consHPL: number;
    consHC: number;
    psSHP: number;               // Puissance souscrite Super Pointe
    ps1: number;                 // Puissance souscrite HP
    ps2: number;                 // Puissance souscrite HPL
    ps3: number;                 // Puissance souscrite HC
    paSHP: number;               // Puissance appelée Super Pointe
    pa1: number;                 // Puissance appelée HP
    pa2: number;                 // Puissance appelée HPL
    pa3: number;                 // Puissance appelée HC
    cosPhi: number;
    isFirstSixMonths?: boolean;
}

export interface SuperPointeResult {
    rc: number;
    rcSHP: number;
    rcHP: number;
    rcHPL: number;
    rcHC: number;
    rp: number;
    rdps: number;
    majCosPhi: number;
    totalHT: number;
    primFixe: number;
}
