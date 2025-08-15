import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Logement from './pages/Logement'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      {/* Layout commun */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        
        {/* 404 */}        
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}