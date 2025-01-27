import { useCounterStore } from "@/stores/counter-store";

export function ZustandCounter() {
  const { count, increment } = useCounterStore();

  return (
    <div>
      <h2>Zustand Counter Store</h2>
      <h4>{count}</h4>
      <button onClick={increment}>One Up</button>
    </div>
  );
}
