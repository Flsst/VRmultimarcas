import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  variant?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'clip' | 'mask'
  delay?: number
  className?: string
  as?: 'div' | 'span' | 'h2' | 'p' | 'section'
  threshold?: number
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const style: React.CSSProperties = { transitionDelay: delay ? `${delay}ms` : undefined }
  const isClipped = variant === 'clip' || variant === 'mask'

  return (
    <Tag ref={ref as never} className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`} style={style}>
      {isClipped ? <span className="reveal-inner" style={style}>{children}</span> : children}
    </Tag>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.08, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2 - vh / 2
      setOffset(center * -speed)
    }
    update()
    const onScroll = () => {
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
