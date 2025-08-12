// src/pages/Home.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import logements from '../data/logements.json'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'

const CARD_H = 340 // hauteur d’une carte
const GAP_Y = 50 // espace vertical entre rangées
const COLS = 3 // nombre de colonnes
const ANIM_MS = 400 // durée de l'animation de défilement

export default function Home() {
  const rows = useMemo(() => {
    const out = []
    for (let i = 0; i < logements.length; i += COLS)
      out.push(logements.slice(i, i + COLS))
    return out
  }, [])

  const [rowIndex, setRowIndex] = useState(0)
  const animatingRef = useRef(false)
  const totalRows = rows.length
  const maxTopRow = Math.max(0, totalRows - 2)

  const viewportRef = useRef(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const paginate = (deltaY) => {
      if (animatingRef.current) return
      if (deltaY > 0 && rowIndex < maxTopRow) {
        animatingRef.current = true
        setRowIndex((i) => i + 1)
        setTimeout(() => (animatingRef.current = false), ANIM_MS + 20)
      } else if (deltaY < 0 && rowIndex > 0) {
        animatingRef.current = true
        setRowIndex((i) => i - 1)
        setTimeout(() => (animatingRef.current = false), ANIM_MS + 20)
      }
    }

    const onWheel = (e) => {
      e.preventDefault() // ← bloque le scroll de la page
      e.stopPropagation()
      paginate(e.deltaY)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel, { passive: false })
  }, [rowIndex, maxTopRow])

  const offset = rowIndex * (CARD_H + GAP_Y)

  return (
    <section className="home">
      <Banner />

      <div className="home__grid-wrapper">
        <div
          className="home__grid-viewport"
          ref={viewportRef}
          role="region"
          aria-label="Liste des logements (défilement par rangées)"
        >
          <div
            className="home__grid"
            style={{ transform: `translateY(-${offset}px)` }}
          >
            {rows.map((row, r) => (
              <div className="home__row" key={`row-${r}`}>
                {row.map((l) => (
                  <Card key={l.id} id={l.id} title={l.title} cover={l.cover} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
