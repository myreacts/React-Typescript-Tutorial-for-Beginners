import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={"Hello"} />
      <Section>This is my Section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
