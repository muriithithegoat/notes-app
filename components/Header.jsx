import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="p-4 flex justify-between items-center shadow bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold">📝 Notes</h1>
      <button onClick={() => setDark(!dark)} className="p-2">
        {dark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>
    </header>
  )
}

export default Header
