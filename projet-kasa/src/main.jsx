import { StrictMode } from 'react' // vérif des erreurs dans l'app et des composants en mode dev
import { createRoot } from 'react-dom/client' // monte l'app dans le DOM
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
