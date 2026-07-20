import type { GameMode } from "../types";

export const gameModes: GameMode[] = [
  {
    id: "ranked",
    name: "Ranked / Ranked Practice",
    description:
      "Standard game mode with a fixed role distribution (15 Slots).",
    slots: [
      "Jailor",
      "Town Investigative",
      "Town Investigative",
      "Town Protective",
      "Random Town",
      "Random Town",
      "Random Town",
      "Random Town",
      "Random Town",
      "Godfather",
      "Mafioso",
      "Mafia Support",
      "Random Mafia",
      "Neutral Evil",
      "Neutral Killing",
    ],
  },
  {
    id: "classic",
    name: "Classic",
    description:
      "Fixed and distinct role distribution for beginners (15 Slots).",
    slots: [
      "Town Investigative",
      "Town Investigative",
      "Jailor",
      "Town Protective",
      "Town Support",
      "Town Support",
      "Town Killing",
      "Random Town",
      "Godfather",
      "Mafioso",
      "Mafia Deception",
      "Neutral Killing",
      "Neutral Evil",
      "Neutral Evil",
      "Any",
    ],
  },
  {
    id: "all_any",
    name: "All Any",
    description: "Fully chaotic, random role distribution (15 Slots).",
    slots: Array(15).fill("Any"),
  },
];
