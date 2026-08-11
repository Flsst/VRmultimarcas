import { Reveal } from '../Reveal'
import { site, whatsappLink } from '../../config/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-ghost" aria-hidden="true">
        VR
      </div>

      <Reveal variant="up" className="footer-inner">
        <div className="footer-brand">
          <p className="footer-brand-name">VR MULTIMARCAS PÁDUA</p>
          <p className="footer-brand-city">
            {site.city} — {site.state}
          </p>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            href={whatsappLink('Olá! Vim pelo site.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href="#contato">Como chegar</a>
        </nav>
      </Reveal>
    </footer>
  )
}
