import { useState, useEffect } from 'react'
import { HomePage } from './features/home/HomePage'
import { MenuPage } from './features/menu/MenuPage'

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (currentHash === '#menu') {
    return <MenuPage />
  }

  return <HomePage />
}

export default App
