import { FC } from "react";
<<<<<<< HEAD
import { useRecoilValue } from "recoil";
import { todosLengthState } from "src/state/todo";

export const TodoCounter: FC = () => {
  const todosLength = useRecoilValue(todosLengthState);
  return <h2>TODO: {todosLength}件</h2>;
=======
import { useTodos } from "src/state/todos";

export const TodoCounter: FC = () => {
  const todos = useTodos();
  return <h2>TODO: {todos.length}件</h2>;
>>>>>>> 908401b327a80d465fa23144250fe8c218f83618
};
