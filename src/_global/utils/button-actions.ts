export interface IButtonColor {
  primary: string
  secondary: string
  text: string
}

export interface IButtonsAction {
  id: string
  colors: IButtonColor
}

export const buttonsActions: IButtonsAction[] = [
  {
    id: 'app-green',
    colors: {
      primary: 'var(--app-green-500)',
      secondary: 'var(--app-green-400)',
      text: 'var(--app-700)',
    },
  },
  {
    id: 'app-yellow',
    colors: {
      primary: 'var(--app-yellow-500)',
      secondary: 'var(--app-yellow-400)',
      text: 'var(--app-700)',
    },
  },
  {
    id: 'app-blue',
    colors: {
      primary: 'var(--app-blue-500)',
      secondary: 'var(--app-blue-400)',
      text: 'var(--app-700)',
    },
  },
  {
    id: 'app-orange',
    colors: {
      primary: 'var(--app-orange-500)',
      secondary: 'var(--app-orange-400)',
      text: 'var(--app-700)',
    },
  },
  {
    id: 'app-red',
    colors: {
      primary: 'var(--app-red-500)',
      secondary: 'var(--app-red-400)',
      text: 'var(--app-700)',
    },
  },
  {
    id: 'app-white',
    colors: {
      primary: 'var(--app-white-500)',
      secondary: 'var(--app-white-400)',
      text: 'var(--app-700)',
    },
  },
]

export const randomButton = () => {
  const randomIndex = Math.floor(Math.random() * buttonsActions.length)
  return buttonsActions[randomIndex]
}
