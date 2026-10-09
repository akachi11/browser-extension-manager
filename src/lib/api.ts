import axios from "axios";
import type { Extension, ExtensionsResponse } from "@/types/extension";

const api = axios.create({
  baseURL: "https://api-backend-test-0qvm.onrender.com/api/v1",
});

export async function fetchExtensions(): Promise<Extension[]> {
  const { data } = await api.get<ExtensionsResponse>("/extensions");
  return data.data.extensions;
}

export async function toggleExtensionStatus(
  id: string,
  status: "active" | "inactive"
): Promise<void> {
  const formData = new FormData();
  formData.append("status", status);
  await api.patch(`/extensions/${id}`, formData);
}

export async function deleteExtension(id: string): Promise<void> {
  await api.delete(`/extensions/${id}`);
}
