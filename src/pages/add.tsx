import type { NextPage } from "next";
<<<<<<< HEAD
import { ComponentProps } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "src/state/todo";

const Add: NextPage = () => {
  const setTodos = useSetRecoilState(todosState);
=======
import { ComponentProps, useContext } from "react";
import { TodoContext } from "src/pages/_app";
import { Todo } from "src/types";

const Add: NextPage = () => {
  const { setTodos } = useContext(TodoContext);
>>>>>>> 908401b327a80d465fa23144250fe8c218f83618

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
