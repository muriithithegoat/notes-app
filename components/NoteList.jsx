import { TrashIcon } from '@heroicons/react/24/outline'

const NoteList = ({ notes, setNotes }) => {
  const handleDelete = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No notes yet. Add one!</p>
  }

  return (
    <div className="space-y-4">
      {notes.map(note => (
        <div key={note.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-lg">{note.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{note.body}</p>
            </div>
            <button onClick={() => handleDelete(note.id)} className="text-red-500">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoteList
