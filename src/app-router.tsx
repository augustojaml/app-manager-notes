import { useUserStore } from '@global/store/use-user-store'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export const AppRoutes = () => {
  const { getUsername } = useUserStore((store) => store)

  useEffect(() => {
    getUsername()
  }, [getUsername])

  return <RouterProvider router={router} />
}
