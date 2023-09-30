import { create } from 'zustand'
import { allOfList } from '../type'
export interface lista {
  arr: allOfList[]
}

const listcal = create<lista>((set, get) => ({
  arr: [],
  addlist: (name: string) => {
    const array = get().arr

    array.push({ name })
    set({ arr: get().arr })
    // set({ arr: get().arr.map((e) => e.name !== ''? {e.name===name}:e })
    // set((state) => ({ ...state, namo: name }))
  },

  // addGoal: (goal: any) => set((state) => ({ arr: [...state.arr, goal] })),
  addgoal: (goals: []) => {
    const array2 = get().arr
    if (array2.length === 0) {
      console.log('rr')
    } else {
      array2.push({ goals })
    }
    set({ arr: get().arr })
  },

  addActivity: (isActivity: string) => {
    const array3 = get().arr
    if (array3.length === 0) {
      console.log('rr')
    } else {
      array3.push({ isActivity })
    }
    set({ arr: get().arr })
  },

  addDemogh: (sex: string, birthdate: any, country: string) => {
    const array4 = get().arr
    if (array4.length === 0) {
      console.log('rr')
    } else {
      array4.push({ sex, birthdate, country })
    }
    set({ arr: get().arr })
  },
  addDemogh2: (tall: number, weight: number, weightGoal: number) => {
    const array5 = get().arr
    if (array5.length === 0) {
      console.log('rr')
    } else {
      array5.push({ tall, weight, weightGoal })
    }
    set({ arr: get().arr })
  },
}))

export default listcal
