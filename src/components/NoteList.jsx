// src/components/NoteList.jsx
import { TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function NoteList({ notes, setNotes }) {
  const handleDelete = (id) => setNotes(prev => prev.filter(n => n.id !== id))

  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes yet. Add one!</p>
  }

  // A simple reusable animation
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="space-y-4">
      {notes.map(note => (
        <motion.div
          key={note.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}   // animate when ~20 % visible
          className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="font-semibold text-lg mb-1">{note.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{note.body}</p>
            </div>
            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-500 hover:text-red-600 transition"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
