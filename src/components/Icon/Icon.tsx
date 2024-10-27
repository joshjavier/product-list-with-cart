import iconPlus from '../../icons/plus.svg'
import iconMinus from '../../icons/minus.svg'
import iconX from '../../icons/x.svg'
import iconCart from '../../icons/shopping-cart-plus.svg'

export interface Props {
  icon: IconVariant
  alt?: string
  size?: number
}

export type IconVariant = 'add' | 'subtract' | 'cart' | 'remove'

const getIconUrl = (icon: IconVariant): string => {
  return {
    subtract: iconMinus,
    add: iconPlus,
    cart: iconCart,
    remove: iconX,
  }[icon]
}

export default function Icon({ icon, alt = '', size = 20 }: Props) {
  const iconUrl = getIconUrl(icon)
  return (
    <img
      className="icon"
      src={iconUrl}
      alt={alt}
      width={size}
      height={size}
    />
  )
}
