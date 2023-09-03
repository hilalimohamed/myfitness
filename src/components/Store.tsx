import { create } from 'zustand'
import { allOfList } from '../type'
export interface lista {
  arr: allOfList[]
}

const listcal = create<lista>((set, get) => ({
  arr: [],
  addlist: (name:string) => {
    const array = get().arr

    array.push({name})
    set({ arr: get().arr })
    // set({ arr: get().arr.map((e) => e.name !== ''? {e.name===name}:e })
    // set((state) => ({ ...state, namo: name }))
  },
  addgoals: (goal: string) => {
    const array2 = get().arr
    if (array2.length === 0) {
      console.log('rr')
    } else {
      array2.push({ goal })
    }
    set({ arr: get().arr })
  },
}))

export default listcal
