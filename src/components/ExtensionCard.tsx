"use client";

import { Switch } from "@heroui/react";
import type { Extension } from "@/types/extension";
import { useToggleExtension, useDeleteExtension } from "@/hooks/useExtensions";

interface ExtensionCardProps {
  extension: Extension;
}

const extensionIcons: Record<string, string> = {
  "Two-Factor Authentication": "\u{1F510}",
  "Live Chat": "\u{1F4AC}",
  "Dark Mode Toggle": "\u{1F319}",
  "Data Backup": "\u{1F4BE}",
  "File Uploader": "\u{1F4C1}",
  "Theme Customizer": "\u{1F3A8}",
  "Email Notifications": "\u{1F4E7}",
  "User Roles & Permissions": "\u{1F465}",
  "Multi-Language Support": "\u{1F310}",
  "Calendar Integration": "\u{1F4C5}",
  "Social Media Share": "\u{1F4F1}",
  "Image Optimizer": "\u{1F5BC}",
};

export default function ExtensionCard({ extension }: ExtensionCardProps) {
  const toggleMutation = useToggleExtension();
  const deleteMutation = useDeleteExtension();

  const isActive = extension.status === "active";
  const isToggling = toggleMutation.isPending;
  const isDeleting = deleteMutation.isPending;

  const handleToggle = (selected: boolean) => {
    const newStatus = selected ? "active" : "inactive";
    toggleMutation.mutate({ id: extension.id, status: newStatus });
  };

  const handleRemove = () => {
    deleteMutation.mutate(extension.id);
  };

  const icon = extensionIcons[extension.name] || "\u{1F9E9}";

  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--icon-bg)] text-2xl">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-[var(--foreground)]">
            {extension.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleRemove}
          disabled={isDeleting}
          className="rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-semibold text-[var(--muted)] transition-colors hover:border-red-400 hover:text-red-500 disabled:opacity-50"
        >
          {isDeleting ? "Removing..." : "Remove"}
        </button>
        <Switch
          isSelected={isActive}
          onChange={handleToggle}
          isDisabled={isToggling}
          aria-label={`Toggle ${extension.name}`}
          size="sm"
        >
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Content>
        </Switch>
      </div>
    </div>
  );
}
