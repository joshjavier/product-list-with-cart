import data from '../../data.json'
import { Product } from './entities'

const products = data.map((item, index): Product => ({ id: index.toString(), ...item }))

export default products
