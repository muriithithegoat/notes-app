// src/components/NoteForm.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NoteForm({ setNotes }) {
  const [title, setTitle] = useState('')
  const [body, setBody]  = useState('')

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
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4 transition-all duration-300"
    >
      <input
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows={3}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write your note..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-white font-medium"
      >
        Add Note
      </button>
    </motion.form>
  )
}
