// contexts/use-counter-store-context.tsx
import { type ReactNode, createContext, useRef } from "react";
import { createStore } from "zustand";
// import { useStoreWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { CounterStore, counterStoreCreator } from "@/stores/counter-store";

export const createCounterStore = () => {
  return createStore<CounterStore>(counterStoreCreator);
};

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const counterStoreRef = useRef<CounterStoreApi>();
  if (!counterStoreRef.current) {
    counterStoreRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={counterStoreRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export type UseCounterStoreContextSelector<T> = (store: CounterStore) => T;

// export const useCounterStoreContext = <T,>(
//   selector: UseCounterStoreContextSelector<T>
// ): T => {
//   const counterStoreContext = useContext(CounterStoreContext);

//   if (counterStoreContext === undefined) {
//     throw new Error(
//       "useCounterStoreContext must be used within CounterStoreProvider"
//     );
//   }

//   return useStoreWithEqualityFn(counterStoreContext, selector, shallow);
// };
