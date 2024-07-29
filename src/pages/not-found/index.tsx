import { Main } from '@global/components/main'

export const NotFound = () => {
  return (
    <Main padding={0}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <strong className="text-3xl text-[var(--app-green-500)]">
          Page Not found
        </strong>
        <span className="text-xl text-[var(--app-green-500)]">404</span>
      </div>
    </Main>
  )
}

export default NotFound
