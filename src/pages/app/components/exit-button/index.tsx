import { useUserStore } from '@global/store/use-user-store'
import { LogOut } from 'lucide-react'

export const ExistButton = () => {
  const { signOut, username } = useUserStore((store) => store)

  return (
    <button
      onClick={signOut}
      className="absolute right-8 top-8 flex items-center justify-center gap-4 rounded-full bg-slate-500 px-4 py-2 text-white transition-colors hover:bg-slate-700"
    >
      {username}
      <LogOut className="h-4 w-4" />
    </button>
  )
}
