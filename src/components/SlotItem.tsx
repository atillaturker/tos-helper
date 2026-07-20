import type { RoleOption, SlotStatus } from "../types";

interface SlotItemProps {
  slot: SlotStatus;
  index: number;
  roleOptions: RoleOption[];
  isOpen: boolean;
  onOpenDropdown: (slotId: string) => void;
  onRoleSelect: (slotId: string, role: string) => void;
  onPlayerNameChange: (slotId: string, value: string) => void;
  onToggleDead: (slotId: string) => void;
}

function getFactionStyles(alignment: string, isDead: boolean) {
  if (isDead) return "text-slate-500 line-through opacity-70";

  if (
    alignment === "Jailor" ||
    alignment.includes("Town") ||
    alignment === "Random Town"
  ) {
    return "text-emerald-400"; // Town green
  }
  if (
    alignment.includes("Mafia") ||
    alignment === "Godfather" ||
    alignment === "Mafioso"
  ) {
    return "text-red-500"; // Mafia red
  }
  if (alignment.includes("Neutral Killing")) {
    return "text-blue-400"; // Neutral Killing blue
  }
  if (
    alignment.includes("Neutral Evil") ||
    alignment.includes("Neutral Benign")
  ) {
    return "text-gray-300"; // Neutral gray
  }
  if (alignment === "Any") {
    return "text-white";
  }

  return "text-sky-400";
}

const UNIQUE_ROLE_ALIGNMENTS = new Set(["Jailor", "Godfather", "Mafioso"]);

export const SlotItem = ({
  slot,
  index,
  roleOptions,
  isOpen,
  onOpenDropdown,
  onRoleSelect,
  onPlayerNameChange,
  onToggleDead,
}: SlotItemProps) => {
  const factionStyles = getFactionStyles(slot.alignment, slot.isDead);
  const isUniqueRole = UNIQUE_ROLE_ALIGNMENTS.has(slot.alignment);

  return (
    <div className="border-b border-slate-800/50 bg-slate-900/40 hover:bg-slate-800/40 transition-colors">
      <button
        type="button"
        onClick={() => onOpenDropdown(slot.id)}
        className="flex w-full items-center justify-between gap-2 px-1.5 py-1 text-left"
      >
        <span className="flex min-w-0 items-baseline gap-1.5 truncate">
          <span className="text-[10px] font-bold text-slate-600 w-4">
            {index}.
          </span>
          <span
            className={`text-xs font-semibold tracking-wide ${factionStyles}`}
          >
            {slot.alignment}
            {slot.selectedRole && (
              <span className="ml-1.5 text-slate-300 font-normal">
                [{slot.selectedRole}]
              </span>
            )}
          </span>
        </span>

        <span className="flex shrink-0 justify-end">
          {slot.playerName ? (
            <span
              className={`text-xs truncate max-w-20 ${
                slot.isDead
                  ? "text-slate-500 line-through opacity-70"
                  : "text-amber-100 font-medium"
              }`}
            >
              {slot.playerName}
            </span>
          ) : (
            <span className="text-xs text-slate-600">—</span>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="mx-1 mb-1 mt-0.5 rounded-md bg-slate-950/80 p-1.5 shadow-inner border border-slate-800">
          <div className="flex flex-col gap-1.5">
            {!isUniqueRole ? (
              <select
                value={slot.selectedRole ?? ""}
                onChange={(event) => onRoleSelect(slot.id, event.target.value)}
                className="w-full rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200 outline-none focus:border-slate-500 transition-colors"
              >
                <option value="">Select a role</option>
                {roleOptions.map((role) => (
                  <option
                    key={role.value}
                    value={role.value}
                    className="bg-slate-900"
                  >
                    {role.label}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex items-center gap-1 rounded border border-slate-700/50 bg-slate-800/50 px-2 py-1">
                <span
                  className={`text-xs font-medium ${getFactionStyles(slot.alignment, false)}`}
                >
                  {slot.alignment}
                </span>
                <span className="text-xs text-slate-500">(Unique)</span>
              </div>
            )}

            <div className="flex gap-1.5">
              <input
                value={slot.playerName}
                onChange={(event) =>
                  onPlayerNameChange(slot.id, event.target.value)
                }
                placeholder={"Name or #"}
                className="w-full rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200 outline-none focus:border-slate-500 transition-colors placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => onToggleDead(slot.id)}
                className={`shrink-0 rounded border px-3 py-1 text-xs font-medium transition-colors ${
                  slot.isDead
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                    : "border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                }`}
              >
                {slot.isDead ? "Revive" : "Kill"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
