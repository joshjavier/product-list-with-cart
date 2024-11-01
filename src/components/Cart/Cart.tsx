import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Item, useCart } from 'react-use-cart'
import { formatPrice } from '../../utils'
import CartList from '../CartList'
import Infobox from '../Infobox'
import Icon from '../Icon'
import Button from '../Button'
import Modal from '../Modal'
import OrderSummary from '../OrderSummary'
import { Order } from '../../data/entities'

interface Props {
  initialItems?: Item[]
}

export default function Cart({ initialItems }: Props) {
  const { items, totalItems, removeItem, setItems, cartTotal } = useCart()
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (initialItems) {
      setItems(initialItems)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onConfirmOrder = () => {
    dialog.current?.showModal()
  }

  return (
    <article className="cart">
      <h2 className="title">Your Cart ({totalItems})</h2>
      {items.length ? (
        <>
          <CartList items={items} callback={removeItem} />
          <hr className="separator" />
          <div className="order-total">
            <span>Order Total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <Infobox>
            <Icon variant="carbon-neutral" />
            <span>This is a <strong>carbon-neutral</strong> delivery</span>
          </Infobox>
          <Button type="primary" size="large" label="Confirm Order" onClick={onConfirmOrder} />
          {createPortal(
            <Modal
              ref={dialog}
              message={{ title: 'Order Confirmed', description: 'We hope you enjoy your food!' }}
              closeButtonLabel="Start New Order"
              icon="order-confirmed"
            >
              <OrderSummary order={new Order(items)} />
            </Modal>,
            document.body,
          )}
        </>
      ) : (
        <div className="empty">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" width={128} height={128} />
          <span>Your added items will appear here</span>
        </div>
      )}
    </article>
  )
}
