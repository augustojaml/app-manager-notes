import { useUserStore } from '@global/store/use-user-store'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const SecurityRouter = ({ children }: { children: ReactNode }) => {
  const { username } = useUserStore((store) => store)

  if (!username) {
    return <Navigate to="/auth/sign-in" />
  }

  return children
}
