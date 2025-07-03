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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto p-4 space-y-4">
        <NoteForm setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </main>
    </div>
  )
}

export default App
