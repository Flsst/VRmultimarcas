import { Reveal } from '../Reveal'
import { whatsappLink } from '../../config/site'
import { ArrowRight } from '../icons'

export function FinalCta() {
  return (
    <section className="section final-cta" id="contato">
      <h2 className="final-cta-title">
        <Reveal as="span" variant="mask" delay={80} className="title-line">
          ENCONTROU
        </Reveal>
        <Reveal as="span" variant="mask" delay={200} className="title-line">
          A SUA?
        </Reveal>
      </h2>

      <Reveal variant="up" delay={280}>
        <p className="final-cta-copy">
          Fale com a VR e consulte modelos e condições disponíveis.
        </p>
      </Reveal>

      <Reveal variant="up" delay={380}>
        <a
          className="final-cta-button"
          href={whatsappLink('Olá! Quero falar com a VR sobre modelos e condições.')}
          target="_blank"
          rel="noreferrer"
        >
          FALAR COM A VR
          <ArrowRight size={20} />
        </a>
      </Reveal>
    </section>
  )
}
