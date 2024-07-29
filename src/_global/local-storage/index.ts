export interface INote {
  id: string
  position: { x: number; y: number }
  body: string
  colors: {
    id: string
    colorHeader: string
    colorBody: string
    colorText: string
  }
}

const noteKey = 'notes'

export const LocalStorage = {
  get: (): INote[] => {
    const notes = localStorage.getItem(noteKey)

    if (notes) {
      return JSON.parse(notes)
    }
    return []
  },

  create: (note: INote): void => {
    const notes = localStorage.getItem(noteKey)

    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    parseNotes.push(note)
    localStorage.setItem(noteKey, JSON.stringify(parseNotes))
  },

  updatePosition: (note: INote): void => {
    const notes = localStorage.getItem(noteKey)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].position = note.position
      localStorage.setItem(noteKey, JSON.stringify(parseNotes))
    }
  },

  updateColors: (note: INote): void => {
    const notes = localStorage.getItem(noteKey)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].colors = note.colors
      localStorage.setItem(noteKey, JSON.stringify(parseNotes))
    }
  },
  deleteNote: (note: INote): void => {
    const notes = localStorage.getItem(noteKey)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const filteredNote = parseNotes.filter((item) => item.id !== note.id)
    localStorage.setItem(noteKey, JSON.stringify(filteredNote))
  },

  updateNoteBody: (note: INote): void => {
    const notes = localStorage.getItem(noteKey)
    const parseNotes: INote[] = notes ? JSON.parse(notes) : []
    const index = parseNotes.findIndex((item) => item.id === note.id)
    if (index !== -1) {
      parseNotes[index].body = note.body
      localStorage.setItem(noteKey, JSON.stringify(parseNotes))
    }
  },
}
