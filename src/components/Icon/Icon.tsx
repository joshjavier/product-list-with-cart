export interface Props {
  variant: string
  size?: number
}

export default function Icon({ variant, size = 20 }: Props) {
  return (
    <svg
      className={`icon icon-${variant}`}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`/__spritemap#sprite-${variant}`} />
    </svg>
  )
}
