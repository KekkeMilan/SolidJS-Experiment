import { Title } from "@solidjs/meta";
import { createSignal, onCleanup } from "solid-js";

export default function Progress() {
  const [count, setCount] = createSignal(0);

  const interval = setInterval(() => setCount((c) => c + 2), 10);
  onCleanup(() => clearInterval(interval));

  return <p>Updating: {count()}</p>;
}
