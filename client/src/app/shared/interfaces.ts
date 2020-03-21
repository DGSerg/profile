export interface User {
  email: string
  password: string
}

export interface Message {
  message: string
}
export  interface Profile {
  _id: string
  firstName: string
  lastName: string
  comment: string
  user?: string
}
