import { useCart } from 'react-use-cart'
import CartList from '../CartList'

export default function Cart() {
  const { items, removeItem } = useCart()

  console.log(items)

  return (
    <article className="cart">
      <h2>Your Cart ({items.length})</h2>
      {items.length ? (
        <CartList items={items} callback={removeItem} />
      ) : (
        <div>Your added items will appear here</div>
      )}
    </article>
  )
}
