export const USER_TOKEN_KEY = 'TOKEN'
export const USER_KEY = 'USER'

export const getToken = () => localStorage.getItem(USER_TOKEN_KEY)

export const signIn = (token: string) => {
  localStorage.setItem(USER_TOKEN_KEY, token)
}

export const signOut = () => {
  localStorage.removeItem(USER_TOKEN_KEY)
}
