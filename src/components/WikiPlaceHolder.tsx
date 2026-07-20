export const WikiPlaceholder = () => {
  // Gelecekte bu veriyi roles.ts'den veya bir JSON'dan çekebilirsin.
  const sampleRoles = [
    {
      name: "Jailor",
      alignment: "Town (Power)",
      color: "text-emerald-400",
      desc: "You may choose one person to drag off to jail each night.",
      attack: "Unstoppable",
      defense: "None",
    },
    {
      name: "Sheriff",
      alignment: "Town (Investigative)",
      color: "text-emerald-400",
      desc: "Check one person each night for suspicious activity.",
      attack: "None",
      defense: "None",
    },
    {
      name: "Godfather",
      alignment: "Mafia (Killing)",
      color: "text-red-500",
      desc: "Kill someone each night. You are immune to basic attacks.",
      attack: "Basic",
      defense: "Basic",
    },
    {
      name: "Serial Killer",
      alignment: "Neutral (Killing)",
      color: "text-blue-400",
      desc: "Kill someone each night. If you are roleblocked you will attack the roleblocker.",
      attack: "Basic",
      defense: "Basic",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Arama Çubuğu (Placeholder) */}
      <div className="shrink-0">
        <input
          type="text"
          placeholder="Rol ara (Örn: Jailor)..."
          disabled
          className="w-full cursor-not-allowed rounded border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs text-slate-300 outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Rol Kartları */}
      <div className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-1">
        {sampleRoles.map((role) => (
          <div
            key={role.name}
            className="rounded-md border border-slate-700/50 bg-slate-800/40 p-2.5 transition-colors hover:bg-slate-800/60"
          >
            <div className="mb-1.5 flex items-baseline justify-between">
              <h3 className={`text-sm font-bold tracking-wide ${role.color}`}>
                {role.name}
              </h3>
              <span className="text-[10px] font-medium uppercase text-slate-400">
                {role.alignment}
              </span>
            </div>

            <p className="mb-2 text-xs leading-relaxed text-slate-300">
              {role.desc}
            </p>

            <div className="flex gap-2">
              <span className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                Atk: <span className="text-slate-300">{role.attack}</span>
              </span>
              <span className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                Def: <span className="text-slate-300">{role.defense}</span>
              </span>
            </div>
          </div>
        ))}

        {/* Bilgi Kutusu */}
        <div className="mt-4 rounded-md border border-dashed border-slate-700 p-4 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            Yerel Wiki Modülü
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Fandom iframe'i çalışmadığında tüm rol veritabanı burada
            listelenecektir.
          </p>
        </div>
      </div>
    </div>
  );
};
