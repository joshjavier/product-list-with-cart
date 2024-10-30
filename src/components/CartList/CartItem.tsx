import type { Item } from 'react-use-cart'
import { formatPrice } from '../../utils'
import Icon from '../Icon'

export interface Props {
  item: Item
  callback?: (itemId: string) => void
}

export default function CartItem({ item, callback }: Props) {
  const onClick = () => {
    if (callback) {
      callback(item.id)
    }
  }

  return (
    <li className="cart-item">
      <div className="info">
        <h3 className="name">{item.name}</h3>
        <div className="quantity-and-price">
          <p className="quantity">
            <span className="value">{item.quantity}</span>
            <span aria-hidden="true">x</span>
            <span className="visually-hidden">
              {item.quantity === 1 ? 'piece' : 'pieces'}
            </span>
          </p>
          <p className="price">
            @ <span>{formatPrice(item.price)}</span>
            <span className="visually-hidden">each</span>
          </p>
          <p className="total">
            <span className="visually-hidden">cost</span>
            {formatPrice(item.price * item.quantity!)}
          </p>
        </div>
      </div>
      <div className="actions">
        <button className="btn btn-icon" onClick={onClick}>
          <Icon variant="remove" />
          <span className="visually-hidden">Remove item from cart</span>
        </button>
      </div>
    </li>
  )
}
