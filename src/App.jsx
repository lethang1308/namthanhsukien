import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './features/home/HomePage'
import { AboutPage } from './features/about/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
