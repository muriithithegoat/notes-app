import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="p-4 sm:px-6 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 sticky top-0 z-10">
      <h1 className="text-2xl font-bold tracking-tight">📝 Notes</h1>
      <button onClick={() => setDark(!dark)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition">
        {dark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>
    </header>
  )
}
