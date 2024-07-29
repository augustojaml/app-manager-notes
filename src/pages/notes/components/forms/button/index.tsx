import { HtmlHTMLAttributes } from 'react'

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  title?: string
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <button
      className="rounded bg-slate-500 px-4 py-2 text-white transition-colors hover:bg-slate-700"
      {...rest}
    >
      <span>{title}</span>
    </button>
  )
}
