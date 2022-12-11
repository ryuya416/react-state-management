<<<<<<< HEAD
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Layout } from "src/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
=======
import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useTodosDispatch } from "src/state/todos";

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    addTodo(text);
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
>>>>>>> 908401b327a80d465fa23144250fe8c218f83618
  );
};

export default Add;
