export interface Task {
  description: string;
  name?: string;
  value: number;
  checked: boolean;
}

export interface Group {
  name: string;
  tasks: Task[];
}
