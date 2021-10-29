import { Task } from '../types/domainTypes';

export const flatten = (arr: any[]) => arr.reduce((a, b) => a.concat(b), []);
const sum = (arr: any[]) => arr.reduce((a, b) => a + b, 0);

export const calculatePercentage = (tasks: Task[]) => {
  const total = sum(tasks.map(task => task.value));
  const checked = sum(
    tasks
      .filter(task => task.checked === true)
      .map(task => task.value)
  );
  const percentage = Math.floor((checked * 100) / total);

  return percentage;
};
