export interface INote {
  id: string
  username: string | null
  position: { x: number; y: number }
  body: string
  colors: {
    id: string
    colorHeader: string
    colorBody: string
    colorText: string
  }
  updatedAt: Date
}

const key = '@appnote-note'

export const LocalNoteStorage = {
  get: (username: string | null): INote[] => {
    const notes = localStorage.getItem(key)

    if (notes) {
      const parseNotes: INote[] = JSON.parse(notes)
      const filterNote = parseNotes.filter((note) => note.username === username)
      return filterNote
    }
    return []
  },

  create: (note: INote): void => {
    const notes = localStorage.getItem(key)

    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    parseNotes.push(note)
    localStorage.setItem(key, JSON.stringify(parseNotes))
  },

  updatePosition: (note: INote): void => {
    const notes = localStorage.getItem(key)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].position = note.position
      localStorage.setItem(key, JSON.stringify(parseNotes))
    }
  },

  updateColors: (note: INote): void => {
    const notes = localStorage.getItem(key)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].colors = note.colors
      localStorage.setItem(key, JSON.stringify(parseNotes))
    }
  },
  deleteNote: (note: INote): void => {
    const notes = localStorage.getItem(key)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const filteredNote = parseNotes.filter((item) => item.id !== note.id)
    localStorage.setItem(key, JSON.stringify(filteredNote))
  },

  updateNoteBody: (note: INote): void => {
    const notes = localStorage.getItem(key)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].body = note.body
      localStorage.setItem(key, JSON.stringify(parseNotes))
    }
  },
}
