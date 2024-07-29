import { Main } from '@global/components/main'

export const Loading = () => {
  return (
    <Main padding={0}>
      <div className="flex h-full w-full items-center justify-center">
        <strong className="text-[var(--app-green-500)]">Loading</strong>
      </div>
    </Main>
  )
}

export default Loading
