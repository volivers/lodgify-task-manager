export interface TasksResponse {
  data: {
    name: string;
    tasks: {
      description: string;
      value: number;
      checked: boolean;
    }[];
  }
}
