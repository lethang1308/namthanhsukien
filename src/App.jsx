import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './features/home/HomePage'
import { AboutPage } from './features/about/AboutPage'
import { NewsPage } from './features/news/NewsPage'
import { NewsDetailPage } from './features/news/NewsDetailPage'
import { ServiceDetailPage } from './features/services/ServiceDetailPage'
import { ContactPage } from './features/contact/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Giới thiệu */}
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Dịch vụ sự kiện */}
        <Route
          path="/dich-vu"
          element={<Navigate to="/dich-vu/cho-thue-am-thanh" replace />}
        />
        <Route
          path="/dich-vu/cho-thue-am-thanh"
          element={<ServiceDetailPage serviceType="am-thanh" />}
        />
        <Route
          path="/dich-vu/cho-thue-anh-sang"
          element={<ServiceDetailPage serviceType="anh-sang" />}
        />
        <Route
          path="/dich-vu/cho-thue-man-hinh-led"
          element={<ServiceDetailPage serviceType="man-hinh-led" />}
        />
        <Route path="/dich-vu/:serviceSlug" element={<ServiceDetailPage />} />
        
        {/* Tin tức & Kho ảnh */}
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />

        {/* Liên hệ */}
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
