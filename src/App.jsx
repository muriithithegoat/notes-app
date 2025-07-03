import { useEffect, useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Header from './components/Header'

function App() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('notes')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Your Notes</h2>
        <NoteForm setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </main>
    </div>
  )
}

export default App
