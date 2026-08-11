import { Reveal } from '../Reveal'
import { whatsappLink } from '../../config/site'
import { ArrowRight } from '../icons'

export function Conditions() {
  return (
    <section className="section conditions" id="condicoes">
      <div className="section-heading">
        <Reveal variant="up" className="section-index">
          03 <span className="section-index-name">CONDIÇÕES</span>
        </Reveal>
      </div>

      <h2 className="conditions-title">
        <Reveal as="span" variant="mask" delay={80} className="title-line">
          SUA PRÓXIMA
        </Reveal>
        <Reveal as="span" variant="mask" delay={200} className="title-line">
          MOTO PODE ESTAR
        </Reveal>
        <Reveal as="span" variant="mask" delay={320} className="title-line">
          MAIS PERTO.
        </Reveal>
      </h2>

      <Reveal variant="up" delay={200} className="conditions-copy">
        <p>
          Fale com nossa equipe e consulte as condições disponíveis.
        </p>
        <a
          className="conditions-cta"
          href={whatsappLink('Olá! Quero consultar as condições de compra.')}
          target="_blank"
          rel="noreferrer"
        >
          CONSULTAR CONDIÇÕES
          <ArrowRight size={16} />
        </a>
      </Reveal>

      <div className="conditions-bike" aria-hidden="true">
        <img src="/images/motorcycles/storm-200-efi.svg" alt="" draggable="false" />
      </div>
    </section>
  )
}
