export interface DetailItem {
  id: string
  label: string
  image: string
}

export const detailItems: DetailItem[] = [
  { id: 'roda', label: 'RODA', image: '/images/details/roda.svg' },
  { id: 'motor', label: 'MOTOR', image: '/images/details/motor.svg' },
  { id: 'farol', label: 'FAROL', image: '/images/details/farol.svg' },
  { id: 'painel', label: 'PAINEL', image: '/images/details/painel.svg' },
  { id: 'freio', label: 'FREIO', image: '/images/details/freio.svg' },
  { id: 'suspensao', label: 'SUSPENSÃO', image: '/images/details/suspensao.svg' },
]
