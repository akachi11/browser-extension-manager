import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchExtensions,
  toggleExtensionStatus,
  deleteExtension,
} from "@/lib/api";

export function useExtensions() {
  return useQuery({
    queryKey: ["extensions"],
    queryFn: fetchExtensions,
  });
}

export function useToggleExtension() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "active" | "inactive";
    }) => toggleExtensionStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["extensions"] });
    },
  });
}

export function useDeleteExtension() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteExtension(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["extensions"] });
    },
  });
}
