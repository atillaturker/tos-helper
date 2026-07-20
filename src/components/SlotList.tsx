import type { RoleOption, SlotStatus } from "../types";
import { SlotItem } from "./SlotItem";

interface SlotListProps {
  slots: SlotStatus[];
  roleOptionsByAlignment: Record<string, RoleOption[]>;
  activeSlotId: string | null;
  onOpenDropdown: (slotId: string) => void;
  onRoleSelect: (slotId: string, role: string) => void;
  onPlayerNameChange: (slotId: string, value: string) => void;
  onToggleDead: (slotId: string) => void;
}

export const SlotList = ({
  slots,
  roleOptionsByAlignment,
  activeSlotId,
  onOpenDropdown,
  onRoleSelect,
  onPlayerNameChange,
  onToggleDead,
}: SlotListProps) => {
  return (
    <div className="flex flex-col border-t border-slate-800/50">
      {slots.map((slot, index) => (
        <SlotItem
          key={slot.id}
          slot={slot}
          index={index + 1}
          roleOptions={roleOptionsByAlignment[slot.alignment] ?? []}
          isOpen={activeSlotId === slot.id}
          onOpenDropdown={onOpenDropdown}
          onRoleSelect={onRoleSelect}
          onPlayerNameChange={onPlayerNameChange}
          onToggleDead={onToggleDead}
        />
      ))}
    </div>
  );
};
