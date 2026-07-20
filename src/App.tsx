import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { SlotList } from "./components";
import { gameModes } from "./data/gameModes";
import { roleOptionsByAlignment } from "./roles";
import type { GameMode, SlotStatus } from "./types";

function createInitialSlots(mode: GameMode): SlotStatus[] {
  return mode.slots.map((alignment, index) => ({
    id: `${mode.id}-${index + 1}`,
    alignment,
    selectedRole: null,
    playerName: "",
    isDead: false,
  }));
}

function App() {
  const [selectedMode, setSelectedMode] = useState<GameMode>(() => {
    const savedModeId = localStorage.getItem("tos_mode");
    if (savedModeId) {
      const found = gameModes.find((m) => m.id === savedModeId);
      if (found) return found;
    }
    return gameModes[0];
  });

  const [slots, setSlots] = useState<SlotStatus[]>(() => {
    const savedSlots = localStorage.getItem("tos_slots");
    if (savedSlots) return JSON.parse(savedSlots);
    return createInitialSlots(gameModes[0]);
  });

  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("tos_mode", selectedMode.id);
    localStorage.setItem("tos_slots", JSON.stringify(slots));
  }, [selectedMode, slots]);

  const handleModeSelect = (mode: GameMode) => {
    setSelectedMode(mode);
    setSlots(createInitialSlots(mode));
    setActiveSlotId(null);
  };

  const handleRoleSelect = (slotId: string, role: string) => {
    setSlots((current) =>
      current.map((slot) =>
        slot.id === slotId ? { ...slot, selectedRole: role } : slot,
      ),
    );
    setActiveSlotId(null);
  };

  const handlePlayerNameChange = (slotId: string, value: string) => {
    setSlots((current) =>
      current.map((slot) =>
        slot.id === slotId ? { ...slot, playerName: value } : slot,
      ),
    );
  };

  const handleToggleDead = (slotId: string) => {
    setSlots((current) =>
      current.map((slot) =>
        slot.id === slotId ? { ...slot, isDead: !slot.isDead } : slot,
      ),
    );
  };

  const handleResetGame = () => {
    if (window.confirm("Do you want to reset the game?")) {
      setSlots(createInitialSlots(selectedMode));
      setActiveSlotId(null);
    }
  };

  const deadCount = useMemo(
    () => slots.filter((slot) => slot.isDead).length,
    [slots],
  );

  return (
    <main
      style={{ backgroundImage: "url('/bg.jpg')" }}
      /* justify-center KALDIRILDI, gap-4 EKLENDİ */
      className="flex h-screen w-screen items-stretch overflow-hidden bg-cover bg-center bg-no-repeat p-4 pt-8 gap-4 before:absolute before:inset-0 before:bg-black/40"
    >
      {/* ========================================= */}
      {/* SOL BÖLÜM: ROL LİSTESİ (Genişliği Sabit) */}
      {/* ========================================= */}
      <div className="relative z-10 flex  h-fit max-h-full w-full max-w-[320px] flex-col gap-1">
        <header className="flex shrink-0 items-center justify-between gap-2 rounded-md border border-slate-700/60 bg-slate-900/80 px-2 py-1 shadow-md backdrop-blur-sm">
          <select
            value={selectedMode.id}
            onChange={(event) => {
              const mode = gameModes.find(
                (item) => item.id === event.target.value,
              );
              if (mode) handleModeSelect(mode);
            }}
            className="w-full cursor-pointer bg-transparent text-xs font-medium text-slate-200 outline-none"
          >
            {gameModes.map((mode) => (
              <option
                key={mode.id}
                value={mode.id}
                className="bg-slate-900 text-slate-100"
              >
                {mode.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleResetGame}
            className="shrink-0 rounded border border-red-900/50 bg-red-500/10 px-2 py-1 text-[10px] font-bold tracking-wider text-red-400 transition-colors hover:bg-red-500/20"
          >
            RESET
          </button>
        </header>

        <div className="flex min-h-0 flex-col rounded-md border border-slate-700/60 bg-slate-900/80 shadow-lg backdrop-blur-sm">
          <div className="flex shrink-0 items-center justify-between border-b border-slate-700/60 px-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>Graveyard</span>
            <span className="rounded bg-slate-800/80 px-1.5 py-0.5 text-slate-200">
              {deadCount} / {slots.length}
            </span>
          </div>

          <div className="custom-scrollbar overflow-y-auto">
            <SlotList
              slots={slots}
              roleOptionsByAlignment={roleOptionsByAlignment}
              activeSlotId={activeSlotId}
              onOpenDropdown={(slotId) =>
                setActiveSlotId((current) =>
                  current === slotId ? null : slotId,
                )
              }
              onRoleSelect={handleRoleSelect}
              onPlayerNameChange={handlePlayerNameChange}
              onToggleDead={handleToggleDead}
            />
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SAĞ BÖLÜM: WIKI / BİLGİ EKRANI (Esnek Genişlik) */}
      {/* ========================================= */}
      <div className="relative z-10 hidden md:flex flex-1 h-full flex-col overflow-hidden rounded-md border border-slate-700/60 bg-slate-900/90 shadow-xl backdrop-blur-md">
        {/* Wiki Üst Bar */}
        <header className="flex shrink-0 items-center border-b border-slate-700/60 bg-slate-800/50 px-4 py-2">
          <h2 className="text-sm font-bold tracking-wider text-slate-200 uppercase">
            Town of Salem Database
          </h2>
        </header>

        {/* Wiki İçerik Alanı */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {/* Iframe örneği (Fandom büyük ihtimalle engelleyecektir, ancak yapıyı görmen için ekledim) */}
          {/* Eğer iframe çalışmazsa buraya kendi oluşturacağın statik bilgi bileşenlerini (Component) ekleyebilirsin. */}
          <iframe
            src="https://town-of-salem.fandom.com/wiki/Town_of_Salem_Wiki"
            title="ToS Wiki"
            className="flex-1 h-full w-full rounded border border-slate-800 bg-white"
          />
          {/* <WikiPlaceholder /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
