import { UserStorage } from '@global/local-storage/user'
import { create } from 'zustand'

interface IUserStore {
  username: string | null
  getUsername: () => void
  signIn: (username: string) => void
  signOut: () => void
}

export const useUserStore = create<IUserStore>((set) => ({
  username: null,
  getUsername: () => {
    const username = UserStorage.get()
    set({ username })
  },
  signIn: (username: string) => {
    set({ username })
    UserStorage.set(username)
  },
  signOut: () => {
    UserStorage.set(null)
    set({ username: null })
  },
}))
