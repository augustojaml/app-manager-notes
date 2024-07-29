import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const SecurityRouter = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = true

  // console.log('isAuthenticated', JSON.stringify(isAuthenticated, null, 2))

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" />
  }

  return children
}
