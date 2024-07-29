/* eslint-disable react/display-name */
import { Field } from 'formik'
import { CircleAlert } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputWithRefProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputWithRefProps>(
  ({ error, ...rest }, ref) => (
    <div>
      <Field
        ref={ref}
        className={`w-full rounded-lg border-2 border-slate-300 p-3 focus:border-emerald-500 focus:outline-none focus:ring-0`}
        {...rest}
      />
      <div className="h-4">
        {error && (
          <div className="flex items-center gap-2">
            <CircleAlert className="h-3 w-3 text-red-500" />
            <span className="text text-xs text-red-500">{error}</span>
          </div>
        )}
      </div>
    </div>
  ),
)
