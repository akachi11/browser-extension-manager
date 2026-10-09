export interface Extension {
  id: string;
  name: string;
  status: "active" | "inactive";
  description: string;
  avatarUrl: string;
  dateCreated: string;
}

export interface ExtensionsResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    extensions: Extension[];
  };
  timestamp: string;
}

export type FilterStatus = "all" | "active" | "inactive";
