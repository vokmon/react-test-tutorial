import { CounterStoreContext, CounterStoreProvider } from "@/contexts/use-counter-store-context"
import { useContext } from "react";
import { useStore } from "zustand"


const Counter = () => {
  
  // const { count, increment } = useCounterStoreContext((state) => state)

  const counterStoreContext = useContext(CounterStoreContext);
  const { count, increment } = useStore(counterStoreContext!, (state) => state)
 

  return (
    <div>
      <h2>Counter Store Context</h2>
      <h4>{count}</h4>
      <button onClick={increment}>One Up</button>
    </div>
  )
}

export const ZustandCounterWithContext = () => {
  return (
    <CounterStoreProvider>
      <Counter />
    </CounterStoreProvider>
  )
}
