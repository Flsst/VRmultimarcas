interface LogoProps {
  className?: string
  style?: React.CSSProperties
}

export function Logo({ className, style }: LogoProps) {
  return (
    <span className={`logo3d ${className ?? ''}`} style={style} aria-label="VR Multimarcas Pádua">
      <img src="/images/vr-logo.svg" alt="VR" width={56} height={56} draggable="false" />
    </span>
  )
}
