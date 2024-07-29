/* eslint-disable react/display-name */
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { Spinner } from '../spinner'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ title, isLoading, ...rest }, ref) => (
    <button
      ref={ref}
      className={`relative flex w-full items-center justify-center rounded-lg border-2 border-slate-300 bg-[var(--app-green-500)] p-3 font-semibold text-[var(--app-700)] transition hover:brightness-90`}
      {...rest}
    >
      {isLoading && (
        <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{title}</span>
    </button>
  ),
)
