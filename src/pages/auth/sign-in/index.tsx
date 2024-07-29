import { Main } from '@global/components/main'

import { Logo } from '../../../_global/components/logo'
import { FormSignIn } from './components/form-sign'

export const SignIn = () => {
  return (
    <Main padding={0}>
      <div className="flex h-full w-full">
        <div className="hidden flex-1 flex-col items-center justify-center gap-3 bg-app-600 md:flex">
          <strong className="text-3xl text-[var(--app-green-500)]">
            Note Manager
          </strong>
          <Logo width={150} height={150} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <FormSignIn />
        </div>
      </div>
    </Main>
  )
}

export default SignIn
