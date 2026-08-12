export const site = {
  name: 'VR Multimarcas Pádua',
  shortName: 'VR',
  city: 'Santo Antônio de Pádua',
  state: 'RJ',
  phoneDisplay: '(22) 9 9716-0649',
  whatsappNumber: '5522997160649',
}

export const whatsappLink = (message: string) =>
  `https://api.whatsapp.com/send/?phone=${site.whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
