import { Reveal, Parallax } from '../Reveal'

export function Clients() {
  return (
    <section className="section clients" id="clientes">
      <div className="section-heading">
        <Reveal variant="up" className="section-index">
          04 <span className="section-index-name">CLIENTES</span>
        </Reveal>
        <h2 className="section-title">
          <Reveal as="span" variant="mask" delay={80} className="title-line">
            QUEM JÁ
          </Reveal>
          <Reveal as="span" variant="mask" delay={200} className="title-line">
            SAIU DE VR.
          </Reveal>
        </h2>
      </div>

      <div className="clients-gallery" aria-label="Clientes e entregas">
        <Reveal variant="up" delay={0} className="client-photo">
          <Parallax speed={0.06}>
            <img src="/images/clients/cliente-1.svg" alt="Cliente e moto" draggable="false" />
          </Parallax>
        </Reveal>
        <Reveal variant="up" delay={120} className="client-photo tall">
          <Parallax speed={0.09}>
            <img src="/images/clients/cliente-2.svg" alt="Entrega de motocicleta" draggable="false" />
          </Parallax>
        </Reveal>
        <Reveal variant="up" delay={240} className="client-photo">
          <Parallax speed={0.06}>
            <img src="/images/clients/cliente-3.svg" alt="Cliente com moto nova" draggable="false" />
          </Parallax>
        </Reveal>
        <Reveal variant="up" delay={360} className="client-photo tall">
          <Parallax speed={0.09}>
            <img src="/images/clients/cliente-4.svg" alt="Momento da entrega" draggable="false" />
          </Parallax>
        </Reveal>
      </div>
    </section>
  )
}
