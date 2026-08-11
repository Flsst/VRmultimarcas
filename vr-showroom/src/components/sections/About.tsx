import { Reveal, Parallax } from '../Reveal'
import { site } from '../../config/site'

export function About() {
  return (
    <section className="section about" id="a-vr">
      <div className="section-heading">
        <Reveal variant="up" className="section-index">
          02 <span className="section-index-name">A VR</span>
        </Reveal>
        <h2 className="section-title">
          <Reveal as="span" variant="mask" delay={80} className="title-line">
            VR
          </Reveal>
          <Reveal as="span" variant="mask" delay={200} className="title-line">
            MULTIMARCAS.
          </Reveal>
        </h2>
      </div>

      <div className="about-grid">
        <Reveal variant="clip" className="about-photo">
          <Parallax speed={0.05}>
            <img src="/images/about/loja.svg" alt="Loja VR Multimarcas Pádua" draggable="false" />
          </Parallax>
        </Reveal>

        <div className="about-copy">
          <Reveal variant="up" delay={120} className="about-sub">
            {site.city} — {site.state}
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="about-text">
              Escolher uma moto também é escolher em quem confiar. A VR Multimarcas
              conecta você à sua próxima moto com atendimento próximo, negociação
              direta e uma experiência simples do primeiro contato à entrega.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
