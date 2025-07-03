import { useState } from 'react'

const NoteForm = ({ setNotes }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !body.trim()) return

    setNotes(prev => [
      ...prev,
      { id: Date.now(), title, body }
    ])
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2">
      <input
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        placeholder="Note title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        placeholder="Your note..."
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Note</button>
    </form>
  )
}

export default NoteForm
