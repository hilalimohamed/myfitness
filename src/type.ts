export interface allOfList {
  name?: string
  goals?: string[]
  isActivity?: string
  sex?: string
  birthdate?: any
  country?: string
  tall?: number
  weight?: number
  weightGoal?: number
}
export interface UpdateFormProps {
  userData: UserData
}
export interface UserData {
  id: string
  username: string
  email: string
  password: string
  isVerified: boolean
  verifyToken: string
  verifyTokenExpiry: string
  meals?: Meal[]
  profile: Profile
}

export interface Meal {
  id?: string
  mealtype?: string
  userId?: string
  items?: FoodItem[]
}

export interface FoodItem {
  id: number
  name: string
  // servings: number
  calories: number
  carbs: number
  fat: number
  protein: number
  sodium: number
  sugar: number
  mealId: string
}

export interface Profile {
  id: string
  userId: string
  imagePath: any
  activitie: string
  sex: string
  birthdate: string
  country: string
  tall: number
  weight: number
  weightGoal: number
  goals: Goal[]
}

export interface Goal {
  id: number
  name: string
  profileId: string
}

export interface Item {
  // id: number
  name: string
  // servings: number
  calories: number
  carbs: number
  fat: number
  protein: number
  sodium: number
  sugar: number
  // mealId: string
}
