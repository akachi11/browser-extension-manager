"use client";

import { useExtensions } from "@/hooks/useExtensions";
import { useFilterStore } from "@/store/useFilterStore";
import ExtensionCard from "./ExtensionCard";
import { Spinner } from "@heroui/react";

export default function ExtensionGrid() {
  const { data: extensions, isLoading, isError, error, refetch } = useExtensions();
  const filter = useFilterStore((s) => s.filter);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Spinner size="lg" />
        <p className="mt-4 text-sm text-[var(--muted)]">Loading extensions...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-4xl">{"⚠️"}</div>
        <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
          Failed to load extensions
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
        <button
          onClick={() => refetch()}
          className="mt-4 rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  const filtered =
    filter === "all"
      ? extensions
      : extensions?.filter((ext) => ext.status === filter);

  if (!filtered || filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-4xl">{"\u{1F4ED}"}</div>
        <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
          No extensions found
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {filter === "all"
            ? "There are no extensions available."
            : `There are no ${filter} extensions.`}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((extension) => (
        <ExtensionCard key={extension.id} extension={extension} />
      ))}
    </div>
  );
}
