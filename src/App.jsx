import { useState, useEffect } from 'react'
import { ComboPage } from './features/combo/ComboPage'
import { HomePage } from './features/home/HomePage'
import { MenuPage } from './features/menu/MenuPage'
import { SpacePage } from './features/space/SpacePage'

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

  if (currentHash === '#combo') {
    return <ComboPage />
  }

  if (currentHash === '#space' || currentHash === '#khong-gian') {
    return <SpacePage />
  }

  return <HomePage />
}

export default App
