export type Alignment =
  | "Jailor"
  | "Town Investigative"
  | "Town Protective"
  | "Town Killing"
  | "Town Support"
  | "Random Town"
  | "Godfather"
  | "Mafioso"
  | "Mafia Deception"
  | "Mafia Support"
  | "Random Mafia"
  | "Neutral Evil"
  | "Neutral Killing"
  | "Neutral Benign"
  | "Neutral Chaos"
  | "Any";

export interface SlotStatus {
  id: string;
  alignment: Alignment;
  selectedRole: string | null;
  playerName: string;
  isDead: boolean;
}

export interface GameMode {
  id: string;
  name: string;
  description: string;
  slots: Alignment[];
}

export interface RoleOption {
  label: string;
  value: string;
}
