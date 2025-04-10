import { Title } from "@solidjs/meta";
import { createSignal, For } from "solid-js";

export default function List() {
  const [items, setItems] = createSignal(
    Array.from({ length: 10000 }, (_, i) => `Item ${i}`)
  );

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length}`]);
  };

  const add10Items = () => {
    setItems((prev) => [
      ...prev,
      ...Array.from({ length: 10 }, (_, i) => `Item ${prev.length + i}`),
    ]);
  };

  const removeItem = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  const remove10Items = () => {
    setItems((prev) => prev.slice(0, -10));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={add10Items}>Add 10 Items</button>
      <button onClick={removeItem}>Remove Item</button>
      <button onClick={remove10Items}>Remove 10 Items</button>
        <h2>List</h2>
        <p> Amount of items: {items().length} Items</p>
      <ul>
        <For each={items()}>{(item, index) => <li>{item}</li>}</For>
      </ul>
    </div>
  );
}
