import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  padding?: number
}

export const Main = ({ children, padding = 10 }: Props) => {
  return (
    <main
      className={`relative h-screen overflow-auto bg-app-700 bg-app-linear bg-app-4em p-${padding}`}
    >
      {children}
    </main>
  )
}
