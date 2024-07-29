const key = '@appnote-user'

export const UserStorage = {
  get: () => {
    const user = localStorage.getItem(key)
    return user
  },
  set: (username: string | null) => {
    if (!username) {
      return
    }
    const user = localStorage.setItem(key, username)
    return user
  },
  remove: () => {
    localStorage.removeItem(key)
  },
}
