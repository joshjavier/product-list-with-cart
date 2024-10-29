import { OrderLine } from '../../data/entities'
import CartItem from './CartItem'

export interface Props {
  items: OrderLine[]
}

export default function CartList({ items }: Props) {
  return (
    <ul role="list" className="cart-list">
      {items.map(item => <CartItem key={item.id} item={item} />)}
    </ul>
  )
}
