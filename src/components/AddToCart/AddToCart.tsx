import { useState } from 'react'
import Button from '../Button'

export interface Props {
  initialQuantity?: number
  callback?: (value: number) => void
}

export default function AddToCart({ initialQuantity = 0, callback }: Props) {
  const [quantity, setQuantity] = useState<number>(initialQuantity)

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
    <Button icon="cart" label="Add to Cart" onClick={increment} />
  ) : (
    <div className="btn btn-primary btn-quantity">
      <Button
        type="icon"
        icon="subtract"
        label="Subtract one item"
        onClick={decrement}
      />
      {quantity}
      <Button
        type="icon"
        icon="add"
        label="Add one item"
        onClick={increment}
      />
    </div>
  )
}
