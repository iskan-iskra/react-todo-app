export type TiTodo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
};

export type TiTodoParams = Omit<TiTodo, "id" | "createdAt">;
