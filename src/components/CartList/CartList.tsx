import type { Item } from 'react-use-cart'
import CartItem from './CartItem'

export interface Props {
  items: Item[]
  callback?: (itemId: string) => void
}

export default function CartList({ items, ...props }: Props) {
  return (
    <ul role="list" className="cart-list">
      {items.map(item => <CartItem key={item.id} item={item} {...props} />)}
    </ul>
  )
}
