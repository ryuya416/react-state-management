import type { NextPage } from "next";
<<<<<<< HEAD
import { useRecoilState } from "recoil";
import { todosState } from "src/state/todo";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };
=======
import { useTodos, useTodosDispatch } from "src/state/todos";

const Home: NextPage = () => {
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();
>>>>>>> 908401b327a80d465fa23144250fe8c218f83618

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
