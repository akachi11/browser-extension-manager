"use client";

import { useFilterStore } from "@/store/useFilterStore";
import type { FilterStatus } from "@/types/extension";

const tabs: { label: string; value: FilterStatus }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export default function FilterTabs() {
  const { filter, setFilter } = useFilterStore();

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setFilter(tab.value)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            filter === tab.value
              ? "bg-red-500 text-white shadow-sm"
              : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:bg-[var(--hover)]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
