export interface Task {
  task_id?: number;
  description: string;
  assigned_to: number;
  status: number;
  due_date: string;
  created_at?: string;
  updated_at?: string;
}
