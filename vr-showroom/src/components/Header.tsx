import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { whatsappLink } from '../config/site'
import { WhatsAppIcon } from './icons'

const navLinks = [
  { label: 'MODELOS', href: '#modelos' },
  { label: 'A VR', href: '#a-vr' },
  { label: 'CONTATO', href: '#contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <a href="#modelos" className="header-logo-link" aria-label="VR Multimarcas Pádua — início">
        <Logo />
      </a>

      <nav className="header-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="header-nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href={whatsappLink('Olá! Vim pelo site e quero informações sobre as motos.')}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={15} />
        <span>WHATSAPP</span>
      </a>

      <button
        type="button"
        className="header-menu-toggle"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-toggle-line" />
        <span className="menu-toggle-line" />
      </button>

      {open && (
        <div className="mobile-menu">
          <nav className="mobile-menu-nav" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              className="mobile-menu-whatsapp"
              href={whatsappLink('Olá! Vim pelo site e quero informações sobre as motos.')}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon size={16} />
              WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
