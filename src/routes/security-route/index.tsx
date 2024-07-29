import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const SecurityRouter = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" />
  }

  return children
}
