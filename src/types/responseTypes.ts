export interface TasksResponse {
  data: {
    name: string;
    tasks: {
      description: string;
      name?: string;
      value: number;
      checked: boolean;
    }[];
  }
}
