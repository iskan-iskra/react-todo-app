import { TiTodo, TiTodoParams } from "@/types";
import { TODO_ENDPOINT } from "@/consts";
import httpClient from "./core";

const getTodoList = (): Promise<TiTodo[]> =>
  httpClient.get(TODO_ENDPOINT).then((res) => res.data);

const createTodo = (params: TiTodoParams): Promise<TiTodo> =>
  httpClient.post(TODO_ENDPOINT, params).then((res) => res.data);

const updateTodo = (
  id: TiTodo["id"],
  params: Partial<TiTodoParams>
): Promise<TiTodo> =>
  httpClient.patch(`${TODO_ENDPOINT}/${id}`, params).then((res) => res.data);

const deleteTodo = (id: TiTodo["id"]): Promise<TiTodo> =>
  httpClient.delete(`${TODO_ENDPOINT}/${id}`).then((res) => res.data);

export default {
  getTodoList,
  createTodo,
  updateTodo,
  deleteTodo,
};
