import { Button } from '@global/components/button'
import { Input } from '@global/components/input'
import { useUserStore } from '@global/store/use-user-store'
import { Form, Formik } from 'formik'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

const authSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'O nome de usuário é muito curto')
    .max(20, 'O nome de usuário é muito longo')
    .required('O campo Nome de usuário é obrigatório'),
})

const DEFAULT_AUTH = {
  username: '',
}

export const FormSignIn = () => {
  const { signIn, username } = useUserStore((store) => store)

  if (username) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-app-600 p-8">
      <strong className="text-[var(--app-green-500)]">Entrar</strong>
      <Formik
        initialValues={DEFAULT_AUTH}
        validationSchema={authSchema}
        validateOnChange={false}
        validateOnBlur={true}
        className="mb-4 flex flex-col gap-2"
        onSubmit={(values) => signIn(values.username)}
      >
        {({ errors }) => (
          <Form className="flex flex-col gap-4">
            <Input
              name="username"
              type="text"
              placeholder="Seu nome"
              error={errors.username}
            />
            <Button title="Entrar" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  )
}
