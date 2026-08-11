export const site = {
  name: 'VR Multimarcas Pádua',
  shortName: 'VR',
  city: 'Santo Antônio de Pádua',
  state: 'RJ',
  phoneDisplay: '(22) 9 9999-9999',
  // Substitua pelo número real no formato internacional, ex.: 5522999999999
  whatsappNumber: '5522999999999',
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
