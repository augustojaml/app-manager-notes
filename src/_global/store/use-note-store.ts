import { INote, LocalNoteStorage } from '@global/local-storage/note'
import { create } from 'zustand'

export interface ISelectedNote {
  id: string
  colors: {
    id: string
    colorHeader: string
    colorBody: string
    colorText: string
  }
}

const IDefaultSelectedNote = {
  id: '',
  colors: {
    id: 'app-green',
    colorHeader: 'var(--app-green-500)',
    colorText: 'var(--app-700)',
    colorBody: 'var(--app-green-400)',
  },
}

interface NoteStore {
  notes: INote[]
  selectedNote: ISelectedNote
  addNote: (note: INote) => void
  loadNotes: (username: string | null) => void
  updateNotePosition: (note: INote) => void
  updateNoteBody: (note: INote) => void
  updateNoteColor: (colors: INote['colors']) => void
  changeSelectedNote: (note: INote) => void
  deleteNote: (note: INote) => void
}

const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  selectedNote: IDefaultSelectedNote,
  addNote: (note: INote) => {
    set((state) => {
      const updatedNotes = [...state.notes, note]
      LocalNoteStorage.create(note)
      return { notes: updatedNotes }
    })
  },

  loadNotes: (username: string | null) => {
    try {
      const notes = LocalNoteStorage.get(username)
      set({ notes })
    } catch (error) {
      console.error(error)
    }
  },

  updateNotePosition: (note: INote) => {
    set((state) => {
      const updatedNotes = state.notes.map((findNote) =>
        findNote.id === note.id
          ? { ...findNote, position: note.position }
          : findNote,
      )
      LocalNoteStorage.updatePosition(note)
      return { notes: updatedNotes }
    })
  },

  updateNoteBody: (note: INote) => {
    set((state) => {
      const updatedNotes = state.notes.map((findNote) =>
        findNote.id === note.id ? { ...findNote, body: note.body } : findNote,
      )
      LocalNoteStorage.updateNoteBody(note)
      return { notes: updatedNotes }
    })
  },

  changeSelectedNote: (note: INote) => {
    const selectedNote = {
      id: note.id,
      colors: {
        id: note.colors.id,
        colorHeader: note.colors.colorHeader,
        colorBody: note.colors.colorBody,
        colorText: note.colors.colorText,
      },
    }
    set({ selectedNote })
  },

  updateNoteColor: (colors: INote['colors']) => {
    set((state) => {
      state.selectedNote.colors = colors
      const updatedNotes = state.notes.map((note) =>
        note.id === state.selectedNote.id ? { ...note, colors } : note,
      )
      const updatedNote = updatedNotes.find(
        (note) => note.id === state.selectedNote.id,
      )
      if (updatedNote) {
        LocalNoteStorage.updateColors(updatedNote)
      }
      return { notes: updatedNotes }
    })
  },
  deleteNote: (note: INote) => {
    set((state) => {
      const updatedNotes = state.notes.filter(
        (findNote) => findNote.id !== note.id,
      )
      LocalNoteStorage.deleteNote(note)
      return { notes: updatedNotes }
    })
  },
}))

export default useNoteStore
