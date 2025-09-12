import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Logement from './pages/Logement/Logement'
import Layout from './components/layout/Layout.jsx'

export default function App() {
  return (
    <Routes>
      {/* Layout commun */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        
        {/* 404 */}        
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}