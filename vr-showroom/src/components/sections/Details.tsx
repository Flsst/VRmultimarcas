import { Reveal } from '../Reveal'
import { detailItems } from '../../data/details'

const left = detailItems[0]
const center = detailItems[1]
const right = detailItems[2]

export function Details() {
  return (
    <section className="section details" id="detalhes">
      <div className="section-heading">
        <Reveal variant="up" className="section-index">
          01 <span className="section-index-name">DETALHES</span>
        </Reveal>
        <h2 className="section-title">
          <Reveal as="span" variant="mask" delay={80} className="title-line">
            ENGENHARIA
          </Reveal>
          <Reveal as="span" variant="mask" delay={200} className="title-line">
            EM CADA DETALHE.
          </Reveal>
        </h2>
      </div>

      <div className="detail-stage" aria-label="Detalhes das motocicletas">
        <Reveal variant="left" delay={120} className="detail-stage-side detail-stage-side-left">
          <img src={left.image} alt={`Detalhe — ${left.label}`} draggable="false" loading="lazy" />
          <span className="detail-stage-label">{left.label}</span>
        </Reveal>

        <Reveal variant="clip" className="detail-stage-center">
          <img src={center.image} alt={`Detalhe — ${center.label}`} draggable="false" loading="lazy" />
          <span className="detail-stage-label">{center.label}</span>
        </Reveal>

        <Reveal variant="right" delay={120} className="detail-stage-side detail-stage-side-right">
          <img src={right.image} alt={`Detalhe — ${right.label}`} draggable="false" loading="lazy" />
          <span className="detail-stage-label">{right.label}</span>
        </Reveal>
      </div>

      <div className="detail-strip">
        {detailItems.map((item, i) => (
          <Reveal key={item.id} variant="up" delay={i * 60} className="detail-item">
            <img src={item.image} alt={item.label} draggable="false" />
            <span className="detail-item-label">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
