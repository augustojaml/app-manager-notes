import { HtmlHTMLAttributes, ReactNode } from 'react'

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  colors?: {
    primary: string
    secondary: string
  }
  icon?: ReactNode
}

export const BoxButton = ({ colors, icon, ...rest }: Props) => {
  return (
    <button
      className={`bg-app-green-700 border-app-green-500 flex h-12 w-12 items-center justify-center rounded-full`}
      style={{
        backgroundColor: colors?.secondary,
        border: `3px solid ${colors?.primary}`,
      }}
      {...rest}
    >
      {icon}
    </button>
  )
}
