import Loading from '@pages/loading'
import NotFound from '@pages/not-found'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { SecurityRouter } from './security-route'

const App = lazy(() => import('@pages/app'))
const Admin = lazy(() => import('@pages/admin'))
const SignIn = lazy(() => import('@pages/auth/sign-in'))

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      errorElement: <NotFound />,
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <SecurityRouter>
            <App />
          </SecurityRouter>
        </Suspense>
      ),
    },
    {
      errorElement: <NotFound />,
      path: '/admin',
      element: (
        <Suspense fallback={<Loading />}>
          <SecurityRouter>
            <Admin />
          </SecurityRouter>
        </Suspense>
      ),
    },
    {
      path: '/auth/sign-in',
      element: (
        <Suspense fallback={<Loading />}>
          <SignIn />
        </Suspense>
      ),
    },
  ])
