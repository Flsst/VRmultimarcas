import { useCallback, useEffect, useRef, useState } from 'react'
import { motorcycles } from '../data/motorcycles'
import type { Motorcycle } from '../data/motorcycles'
import { whatsappLink } from '../config/site'
import { Header } from './Header'
import { ArrowLeft, ArrowRight } from './icons'

type Direction = 'next' | 'prev'

interface SlideProps {
  bike: Motorcycle
  entering: boolean
  leaving: boolean
  intro?: boolean
  dir: Direction
  onTransitionEnd: () => void
}

function ShowroomSlide({ bike, entering, leaving, intro = false, dir, onTransitionEnd }: SlideProps) {
  const className = [
    'showroom-slide',
    intro ? 'slide-intro' : '',
    entering ? `slide-enter slide-enter-${dir}` : '',
    leaving ? `slide-leave slide-leave-${dir}` : '',
  ].join(' ')

  return (
    <div
      className={className}
      aria-hidden={leaving}
      onAnimationEnd={(e) => {
        if (leaving && e.target === e.currentTarget) onTransitionEnd()
      }}
    >
      <div className="slide-bike-wrap">
        <div className="slide-giant-number" aria-hidden="true">
          {bike.displayNumber}
        </div>
        <img
          className={`slide-bike-img${bike.id === 'jet-125-efi' ? ' bike-scale-jet' : ''}`}
          src={bike.image}
          alt={`Motocicleta ${bike.name}`}
          draggable="false"
          loading={bike.id === motorcycles[0].id ? 'eager' : 'lazy'}
          fetchPriority={bike.id === motorcycles[0].id ? 'high' : 'auto'}
        />
      </div>

      <div className="slide-info">
        <h1 className="slide-model">{bike.name}</h1>
        <p className="slide-meta">
          {bike.specs.map((spec) => spec.value).join(' · ')} · 0 KM
        </p>
      </div>

      <div className="slide-cta">
        <p className="slide-cta-note">CONSULTE CONDIÇÕES</p>
        <a
          className="slide-cta-button"
          href={whatsappLink(`Olá! Tenho interesse na ${bike.name} (0 km). Poderia me passar as condições?`)}
          target="_blank"
          rel="noreferrer"
        >
          TENHO INTERESSE
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export function Showroom() {
  const [current, setCurrent] = useState(0)
  const [pending, setPending] = useState<Direction | null>(null)
  const [inFlight, setInFlight] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = motorcycles.length

  const go = useCallback(
    (dir: Direction) => {
      if (inFlight) return
      setPending(dir)
      setInFlight(true)
    },
    [inFlight],
  )

  const completeTransition = useCallback(() => {
    setCurrent((c) => {
      if (pending === 'next') return (c + 1) % total
      if (pending === 'prev') return (c - 1 + total) % total
      return c
    })
    setInFlight(false)
    setPending(null)
  }, [pending, total])

  const currentBike = motorcycles[current]
  const pendingIndex =
    pending === 'next' ? (current + 1) % total : pending === 'prev' ? (current - 1 + total) % total : null
  const pendingBike = pendingIndex !== null ? motorcycles[pendingIndex] : null
  const prevBike = motorcycles[(current - 1 + total) % total]
  const nextBike = motorcycles[(current + 1) % total]

  const handleIntroEnd = useCallback(() => setIntroDone(true), [])

  useEffect(() => {
    const t = setTimeout(handleIntroEnd, 1700)
    return () => clearTimeout(t)
  }, [handleIntroEnd])

  useEffect(() => {
    motorcycles.forEach((bike) => {
      const img = new Image()
      img.src = bike.image
    })
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null
    if (Math.abs(dx) < 48 || Math.abs(dy) > Math.abs(dx) * 1.2) return
    if (dx < 0) go('next')
    else go('prev')
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go('next')
      if (e.key === 'ArrowLeft') go('prev')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  useEffect(() => {
    if (inFlight) {
      timer.current = setTimeout(() => {
        setInFlight(false)
        setPending(null)
        setCurrent((c) =>
          pending === 'next' ? (c + 1) % total : pending === 'prev' ? (c - 1 + total) % total : c,
        )
      }, 460)
    }
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [inFlight, pending, total])

  return (
    <section className="showroom" id="modelos" aria-label="Showroom digital de motocicletas">
      <Header />

      <div
        className="showroom-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ShowroomSlide
          key={pendingBike ? `old-${currentBike.id}` : currentBike.id}
          bike={currentBike}
          entering={false}
          leaving={pendingBike !== null}
          intro={!introDone && pendingBike === null}
          dir={pending ?? 'next'}
          onTransitionEnd={completeTransition}
        />

        {pendingBike && (
          <ShowroomSlide
            key={`new-${pendingBike.id}`}
            bike={pendingBike}
            entering
            leaving={false}
            intro={false}
            dir={pending ?? 'next'}
            onTransitionEnd={completeTransition}
          />
        )}
      </div>

      <footer className="showroom-bar">
        <button
          type="button"
          className="showroom-bar-nav"
          onClick={() => go('prev')}
          aria-label={`Modelo anterior: ${prevBike.name}`}
        >
          <ArrowLeft size={15} />
          <span>{prevBike.name}</span>
        </button>

        <div className="showroom-bar-indicator" aria-live="polite">
          <span className="indicator-count">
            {String(current + 1).padStart(2, '0')}
          </span>
          <div className="indicator-rule" aria-hidden="true">
            <span
              className="indicator-fill"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
          <span className="indicator-count muted">
            {String(total).padStart(2, '0')}
          </span>
        </div>

        <button
          type="button"
          className="showroom-bar-nav align-right"
          onClick={() => go('next')}
          aria-label={`Próximo modelo: ${nextBike.name}`}
        >
          <span>{nextBike.name}</span>
          <ArrowRight size={15} />
        </button>
      </footer>
    </section>
  )
}
