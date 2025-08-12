// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />   {/* ← tout le contenu des pages est contraint à 1240px */}
        </div>
      </main>
      <Footer />
    </>
  );
}
