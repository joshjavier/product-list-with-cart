import { forwardRef, ReactNode } from 'react'
import Button from '../Button'
import Icon from '../Icon'

export interface Props {
  children?: ReactNode
  message: Record<'title' | 'description', string>
  closeButtonLabel?: string
  callback?: () => void
  icon?: string
  open?: boolean
}

const Modal = forwardRef<HTMLDialogElement, Props>((props, ref) => {
  const onClick = () => {
    if (props.callback) {
      props.callback()
    }
  }

  return (
    <dialog open={props.open} ref={ref} className="modal">
      <div className="wrapper">
        <div className="inner">
          <div className="message">
            {props.icon && <Icon variant={props.icon} size={48} />}
            <h2 className="title">{props.message.title}</h2>
            <p className="description">{props.message.description}</p>
          </div>
          {props.children}
          <Button
            type="primary"
            size="large"
            label={props.closeButtonLabel ?? 'Dismiss'}
            onClick={onClick}
          />
        </div>
      </div>
    </dialog>
  )
})

Modal.displayName = 'Modal'

export default Modal
