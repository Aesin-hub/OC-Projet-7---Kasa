// src/pages/Home.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import styles from "./home.module.scss";
import logements from '../../data/logements.json'
import heroHome from '../../assets/hero.jpg'
import Banner from '../../components/banner/Banner.jsx'
import Card from '../../components/card/Card.jsx'

const CARD_H = 340
const GAP_Y  = 50
const COLS   = 3
const ANIM_MS = 400

export default function Home() {
  // ===== Desktop : calcul des rangées de 3 (inchangé) =====
  const rows = useMemo(() => {
    const out = []
    for (let i = 0; i < logements.length; i += COLS) out.push(logements.slice(i, i + COLS))
    return out
  }, [])

  // ===== Détection mobile (réactive) =====
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  // ===== Scroll interne (desktop seulement, inchangé) =====
  const [rowIndex, setRowIndex] = useState(0)
  const animatingRef = useRef(false)
  const totalRows = rows.length
  const maxTopRow = Math.max(0, totalRows - 2)
  const viewportRef = useRef(null)

  useEffect(() => {
    if (isMobile) return // ← en mobile: pas de scroll interne, on laisse scroller la page

    const el = viewportRef.current
    if (!el) return

    const paginate = (deltaY) => {
      if (animatingRef.current) return
      if (deltaY > 0 && rowIndex < maxTopRow) {
        animatingRef.current = true
        setRowIndex(i => i + 1)
        setTimeout(() => (animatingRef.current = false), ANIM_MS + 20)
      } else if (deltaY < 0 && rowIndex > 0) {
        animatingRef.current = true
        setRowIndex(i => i - 1)
        setTimeout(() => (animatingRef.current = false), ANIM_MS + 20)
      }
    }

    const onWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      paginate(e.deltaY)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel, { passive: false })
  }, [rowIndex, maxTopRow, isMobile]) // :contentReference[oaicite:3]{index=3}

  const offset = rowIndex * (CARD_H + GAP_Y)

  return (
    <section className={styles.home}>
      <div className="container">
        <Banner
          image={heroHome}
          title="Chez vous, partout et ailleurs"
          opacity={0.6}
          marginTop={27}
        />

        {isMobile ? (
          /* ===== MOBILE : plus de grid-wrapper, juste la liste ===== */
          <div className={styles.home__list} role="list" aria-label="Liste des logements">
            {logements.map((l) => (
              <Card key={l.id} id={l.id} title={l.title} cover={l.cover} />
            ))}
          </div>
        ) : (
          /* ===== DESKTOP : grid-wrapper + scroll interne (inchangé) ===== */
          <div className={styles.home__grid_wrapper}>
            <div
              className={styles.home__grid_viewport}
              ref={viewportRef}
              role="region"
              aria-label="Liste des logements"
            >
              <div
                className={styles.home__grid}
                style={{ transform: `translateY(-${offset}px)` }}
              >
                {rows.map((row, r) => (
                  <div className={styles.home__row} key={`row-${r}`}>
                    {row.map(l => (
                      <Card key={l.id} id={l.id} title={l.title} cover={l.cover} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
