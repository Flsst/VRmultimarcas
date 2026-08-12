export interface MotorcycleSpec {
  label: string
  value: string
}

export interface Motorcycle {
  id: string
  brand: string
  model: string
  name: string
  displayNumber: string
  image: string
  specs: MotorcycleSpec[]
  tagline: string
}

export const motorcycles: Motorcycle[] = [
  {
    id: 'shi-175-efi',
    brand: 'SHI',
    model: '175 EFI',
    name: 'SHI 175 EFI',
    displayNumber: '175',
    image: '/images/motorcycles/shi-175-efi.png?v=2',
    specs: [
      { label: 'CC', value: '175' },
      { label: 'INJEÇÃO', value: 'EFI' },
      { label: 'KM', value: '0' },
    ],
    tagline: 'Versatilidade urbana com motor de baixa manutenção.',
  },
  {
    id: 'jet-125-efi',
    brand: 'JET',
    model: '125 EFI',
    name: 'JET 125 EFI',
    displayNumber: '125',
    image: '/images/motorcycles/jet-125-efi.png?v=2',
    specs: [
      { label: 'CC', value: '125' },
      { label: 'INJEÇÃO', value: 'EFI' },
      { label: 'KM', value: '0' },
    ],
    tagline: 'Agilidade e economia para o dia a dia.',
  },
  {
    id: 'shi-175-ss-efi',
    brand: 'SHI',
    model: '175 SS EFI',
    name: 'SHI 175 SS EFI',
    displayNumber: '175',
    image: '/images/motorcycles/shi-175-ss-efi.png?v=2',
    specs: [
      { label: 'CC', value: '175' },
      { label: 'INJEÇÃO', value: 'EFI' },
      { label: 'KM', value: '0' },
    ],
    tagline: 'Estilo esportivo com desempenho para qualquer cenário.',
  },
  {
    id: 'storm-200-efi',
    brand: 'STORM',
    model: '200 EFI',
    name: 'STORM 200 EFI',
    displayNumber: '200',
    image: '/images/motorcycles/storm-200-efi.png?v=2',
    specs: [
      { label: 'CC', value: '200' },
      { label: 'INJEÇÃO', value: 'EFI' },
      { label: 'KM', value: '0' },
    ],
    tagline: 'Potência e presença para quem quer ir além.',
  },
]

export const formatIndex = (index: number, total: number) =>
  `${String(index).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
