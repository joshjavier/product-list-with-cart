import { useState } from 'react'
import Button from '../Button'
import Icon from '../Icon'

export interface Props {
  initialQuantity?: number
  callback?: (value: number) => void
}

export default function AddToCart({ initialQuantity = 0, callback }: Props) {
  const [quantity, setQuantity] = useState<number>(initialQuantity)

  const addToCart = () => setQuantity(1)
  const increment = () => setQuantity((q) => {
    const value = q + 1
    if (callback) callback(value)
    return value
  })
  const decrement = () => setQuantity((q) => {
    const value = q - 1
    if (callback) callback(value)
    return value
  })

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
