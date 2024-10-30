import Icon from '../Icon'

export interface Props {
  type?: string
  size?: 'large'
  label: string
  icon?: string
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
