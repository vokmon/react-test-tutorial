import { create, type StateCreator } from 'zustand'

export type CounterStore = {
  count: number
  increment: () => void
}

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
})

export const useCounterStore = create<CounterStore>()(counterStoreCreator)