import { Item } from 'react-use-cart'
import { formatPrice } from '../../utils'
import { Product } from '../../data/entities'

export interface Props {
  item: Item & Pick<Product, 'image'>
}

export default function OrderItem({ item }: Props) {
  return (
    <li className="order-item">
      <div className="image">
        <img src={item.image.thumbnail} alt="" />
      </div>
      <div className="info">
        <h3 className="name">{item.name}</h3>
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
      </div>
      <p className="total">
        <span className="visually-hidden">cost</span>
        {formatPrice(item.itemTotal!)}
      </p>
    </li>
  )
}
