// src/components/Layout.jsx
import { Outlet } from 'react-router-dom' //emplace ou sera affiché les routes enfant défini dans App.jsx
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
