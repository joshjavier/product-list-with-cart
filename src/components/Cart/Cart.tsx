import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Item, useCart } from 'react-use-cart'
import { AnimatePresence, m } from 'framer-motion'
import { formatPrice } from '../../utils'
import CartList from '../CartList'
import Infobox from '../Infobox'
import Icon from '../Icon'
import Button from '../Button'
import Modal, { ModalHandle } from '../Modal'
import OrderSummary from '../OrderSummary'
import { Order } from '../../data/entities'

interface Props {
  initialItems?: Item[]
}

export default function Cart({ initialItems }: Props) {
  const { items, totalItems, removeItem, setItems, cartTotal, emptyCart } = useCart()
  const modal = useRef<ModalHandle>(null)

  useEffect(() => {
    if (initialItems) {
      setItems(initialItems)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onConfirmOrder = () => {
    modal.current?.showModal()
  }

  return (
    <article className="cart">
      <h2 className="title">Your Cart ({totalItems})</h2>
      <AnimatePresence initial={false}>
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
                ref={modal}
                message={{ title: 'Order Confirmed', description: 'We hope you enjoy your food!' }}
                closeButtonLabel="Start New Order"
                icon="order-confirmed"
                callback={emptyCart}
              >
                <OrderSummary order={new Order(items)} />
              </Modal>,
              document.body,
            )}
          </>
        ) : (
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="empty">
            <img src="/assets/images/illustration-empty-cart.svg" alt="" width={128} height={128} />
            <span>Your added items will appear here</span>
          </m.div>
        )}
      </AnimatePresence>
    </article>
  )
}
