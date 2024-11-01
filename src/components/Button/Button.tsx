import { forwardRef } from 'react'
import Icon from '../Icon'

export interface Props {
  type?: 'primary' | 'icon'
  size?: 'large'
  label: string
  icon?: string
  onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, Props>(({ type, label, icon, size, ...props }, ref) => {
  const classes = [
    'btn',
    type ? `btn-${type}` : '',
    size ? `btn-${size}` : '',
  ]

  return (
    <button ref={ref} className={classes.join(' ')} {...props}>
      {icon && <Icon variant={icon} />}
      {type === 'icon' ? (
        <span className="visually-hidden">{label}</span>
      ) : label}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
