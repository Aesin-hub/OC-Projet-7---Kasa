import { Outlet } from 'react-router-dom' //emplace ou sera affiché les routes enfant défini dans App.jsx
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import styles from "../layout/layout.module.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
