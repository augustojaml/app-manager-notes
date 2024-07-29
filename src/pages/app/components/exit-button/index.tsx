import { useUserStore } from '@global/store/use-user-store'
import { LogOut } from 'lucide-react'

export const ExistButton = () => {
  const { signOut } = useUserStore((store) => store)

  return (
    <button
      onClick={signOut}
      className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-slate-500 px-4 py-2 text-white transition-colors hover:bg-slate-700"
    >
      <LogOut />
    </button>
  )
}
