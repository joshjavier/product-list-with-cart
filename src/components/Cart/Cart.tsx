import { useEffect } from 'react'
import { Item, useCart } from 'react-use-cart'
import { formatPrice } from '../../utils'
import CartList from '../CartList'
import Infobox from '../Infobox'
import Icon from '../Icon'
import Button from '../Button'

interface Props {
  initialItems?: Item[]
}

export default function Cart({ initialItems }: Props) {
  const { items, totalItems, removeItem, setItems, cartTotal } = useCart()

  useEffect(() => {
    if (initialItems) {
      setItems(initialItems)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <article className="cart">
      <h2 className="title">Your Cart ({totalItems})</h2>
      {items.length ? (
        <>
          <CartList items={items} callback={removeItem} />
          <hr className="separator" />
          <div className="order-total">
            <span>Order Total:</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <Infobox>
            <Icon variant="carbon-neutral" />
            <span>This is a <strong>carbon-neutral</strong> delivery</span>
          </Infobox>
          <Button type="primary" size="large" label="Confirm Order" />
        </>
      ) : (
        <div className="empty">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <span>Your added items will appear here</span>
        </div>
      )}
    </article>
  )
}
