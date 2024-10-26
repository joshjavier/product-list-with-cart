export interface Props {
  icon: string
  alt?: string
  size?: number
}

export default function Icon({ icon, alt = '', size = 20 }: Props) {
  return <img className="icon" src={icon} alt={alt} width={size} height={size} />
}
