import { useState } from 'react'
import Button from '../Button'
import Icon from '../Icon'

export interface Props {
  callback?: () => void
}

export default function AddToCart() {
  const [quantity, setQuantity] = useState<number>(0)

  const addToCart = () => setQuantity(1)
  const increment = () => setQuantity(q => q + 1)
  const decrement = () => setQuantity(q => q - 1)

  return quantity === 0 ? (
    <Button icon="cart" label="Add to Cart" onClick={addToCart} />
  ) : (
    <div className="btn btn-primary btn-quantity">
      <button className="btn btn-icon" onClick={decrement}>
        <Icon variant="subtract" />
        <span className="visually-hidden">Subtract one item</span>
      </button>
      {quantity}
      <button className="btn btn-icon" onClick={increment}>
        <Icon variant="add" />
        <span className="visually-hidden">Add one item</span>
      </button>
    </div>
  )
}
