import type { Alignment, RoleOption } from "./types";

// TEMEL KATEGORİLER
const townInvestigative: RoleOption[] = [
  { label: "Investigator", value: "Investigator" },
  { label: "Lookout", value: "Lookout" },
  { label: "Sheriff", value: "Sheriff" },
  { label: "Spy", value: "Spy" },
];

const townProtective: RoleOption[] = [
  { label: "Bodyguard", value: "Bodyguard" },
  { label: "Doctor", value: "Doctor" },
];

const townKilling: RoleOption[] = [
  { label: "Veteran", value: "Veteran" },
  { label: "Vigilante", value: "Vigilante" },
  { label: "Vampire Hunter", value: "Vampire Hunter" },
];

const townSupport: RoleOption[] = [
  { label: "Escort", value: "Escort" },
  { label: "Mayor", value: "Mayor" },
  { label: "Medium", value: "Medium" },
  { label: "Retributionist", value: "Retributionist" },
  { label: "Transporter", value: "Transporter" },
];

const mafiaDeception: RoleOption[] = [
  { label: "Disguiser", value: "Disguiser" },
  { label: "Forger", value: "Forger" },
  { label: "Framer", value: "Framer" },
  { label: "Hypnotist", value: "Hypnotist" },
  { label: "Janitor", value: "Janitor" },
];

const mafiaSupport: RoleOption[] = [
  { label: "Blackmailer", value: "Blackmailer" },
  { label: "Consigliere", value: "Consigliere" },
  { label: "Consort", value: "Consort" },
];

const neutralEvil: RoleOption[] = [
  { label: "Executioner", value: "Executioner" },
  { label: "Jester", value: "Jester" },
  { label: "Witch", value: "Witch" },
];

const neutralKilling: RoleOption[] = [
  { label: "Arsonist", value: "Arsonist" },
  { label: "Serial Killer", value: "Serial Killer" },
  { label: "Werewolf", value: "Werewolf" },
];

const neutralBenign: RoleOption[] = [
  { label: "Amnesiac", value: "Amnesiac" },
  { label: "Survivor", value: "Survivor" },
];

const neutralChaos: RoleOption[] = [{ label: "Vampire", value: "Vampire" }];

// BİRLEŞTİRİLMİŞ HAVUZLAR
const allTownRoles: RoleOption[] = [
  ...townInvestigative,
  ...townProtective,
  ...townKilling,
  ...townSupport,
];

const allMafiaRoles: RoleOption[] = [...mafiaDeception, ...mafiaSupport];

const allRoles: RoleOption[] = [
  ...allTownRoles,
  ...allMafiaRoles,
  { label: "Godfather", value: "Godfather" },
  { label: "Mafioso", value: "Mafioso" },
  ...neutralEvil,
  ...neutralKilling,
  ...neutralBenign,
  ...neutralChaos,
];

// UI İÇİN EXPORT EDİLEN EŞLEŞTİRME OBJESİ
export const roleOptionsByAlignment: Record<Alignment, RoleOption[]> = {
  Jailor: [{ label: "Jailor", value: "Jailor" }],
  "Town Investigative": townInvestigative,
  "Town Protective": townProtective,
  "Town Killing": townKilling,
  "Town Support": townSupport,
  "Random Town": allTownRoles.sort((a, b) => a.label.localeCompare(b.label)), // Alfabetik sıralama kullanımı kolaylaştırır

  Godfather: [{ label: "Godfather", value: "Godfather" }],
  Mafioso: [{ label: "Mafioso", value: "Mafioso" }],
  "Mafia Deception": mafiaDeception,
  "Mafia Support": mafiaSupport,
  "Random Mafia": allMafiaRoles.sort((a, b) => a.label.localeCompare(b.label)),

  "Neutral Evil": neutralEvil,
  "Neutral Killing": neutralKilling,
  "Neutral Benign": neutralBenign,
  "Neutral Chaos": neutralChaos,

  Any: allRoles.sort((a, b) => a.label.localeCompare(b.label)),
};
