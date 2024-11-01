import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
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

export interface ModalHandle {
  showModal: () => void
}

const Modal = forwardRef<ModalHandle, Props>((props, ref) => {
  const dialog = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => ({
    showModal() {
      dialog.current?.showModal()
    },
  }))

  const onClick = () => {
    if (props.callback) {
      props.callback()
    }
    dialog.current?.close()
  }

  return (
    <dialog open={props.open} ref={dialog} className="modal">
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
