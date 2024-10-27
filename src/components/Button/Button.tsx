import Icon from '../Icon'
import type { IconVariant } from '../Icon/Icon'

export interface Props {
  type?: string
  size?: 'large'
  label: string
  icon?: IconVariant
  onClick?: () => void
}

export default function Button({ type, label, icon, size, ...props }: Props) {
  const classes = [
    'btn',
    type ? `btn-${type}` : '',
    size ? `btn-${size}` : '',
  ]

  return (
    <button className={classes.join(' ')} {...props}>
      {icon && <Icon variant={icon} />}
      {label}
    </button>
  )
}
