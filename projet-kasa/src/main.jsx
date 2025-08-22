import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // sert a monter l'application dans le DOM
import { BrowserRouter } from 'react-router-dom' // sert à gérer les routes
import './styles/main.scss' 
import App from './App.jsx' // logique de l'ensemble de l'application

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
