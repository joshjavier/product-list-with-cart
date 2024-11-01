import type { Item } from 'react-use-cart'
import CartItem from './CartItem'
import { AnimatePresence } from 'framer-motion'

export interface Props {
  items: Item[]
  callback?: (itemId: string) => void
}

export default function CartList({ items, ...props }: Props) {
  return (
    <ul role="list" className="block-list">
      <AnimatePresence initial={false}>
        {items.map(item => <CartItem key={item.id} item={item} {...props} />)}
      </AnimatePresence>
    </ul>
  )
}
