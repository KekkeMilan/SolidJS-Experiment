import { createSignal } from "solid-js";

function fib(n: number): number {
    const memo: Record<number, number> = {};
    const fibHelper = (x: number): number => {
        if (x in memo) return memo[x];
        if (x <= 1) return x;
        memo[x] = fibHelper(x - 1) + fibHelper(x - 2);
        return memo[x];
    };
    const start = performance.now(); // Start the timer
    const result = fibHelper(n);
    const duration = performance.now() - start; // Calculate the duration
    console.log(`Fibonacci(${n}) took ${duration.toFixed(2)}ms`);
    return result;
}

export default function Fibonacci() {
  const [count, setCount] = createSignal(30); // Start with a higher number for noticeable load

  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>Increase</button>
      <p>
        Fibonacci({count()}): {fib(count())}
      </p>
    </div>
  );
}
