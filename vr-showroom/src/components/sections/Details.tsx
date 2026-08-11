import { Reveal } from '../Reveal'
import { detailItems } from '../../data/details'

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

      <div className="triptych" aria-label="Detalhes das motocicletas">
        <Reveal variant="left" delay={100} className="triptych-side">
          <img src={detailItems[0].image} alt="Detalhe da roda" draggable="false" />
        </Reveal>
        <Reveal variant="clip" className="triptych-center">
          <img src={detailItems[1].image} alt="Detalhe do motor" draggable="false" />
        </Reveal>
        <Reveal variant="right" delay={100} className="triptych-side">
          <img src={detailItems[2].image} alt="Detalhe do farol" draggable="false" />
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
