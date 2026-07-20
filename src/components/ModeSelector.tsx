import type { GameMode } from "../types";

interface ModeSelectorProps {
  modes: GameMode[];
  selectedModeName: string;
  onSelect: (mode: GameMode) => void;
}

export const ModeSelector = ({
  modes,
  selectedModeName,
  onSelect,
}: ModeSelectorProps) => {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-100">Game mode</h2>
        <p className="text-sm text-slate-400">
          Choose the mode you want to track.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {modes.map((mode) => {
          const isSelected = mode.name === selectedModeName;

          return (
            <button
              key={mode.name}
              type="button"
              onClick={() => onSelect(mode)}
              className={`rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-emerald-500/40 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                  : "border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-800/80"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-100">
                  {mode.name}
                </span>
                {isSelected ? (
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-300">
                    Selected
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-slate-400">{mode.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                {mode.slots.length} slot{mode.slots.length > 1 ? "s" : ""}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};
