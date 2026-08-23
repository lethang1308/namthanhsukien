import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './features/home/HomePage'
import { AboutPage } from './features/about/AboutPage'
import { NewsPage } from './features/news/NewsPage'
import { NewsDetailPage } from './features/news/NewsDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
