export interface Group {
  name: string;
  tasks: {
    description: string;
    value: number;
    checked: boolean;
  }[];
}
