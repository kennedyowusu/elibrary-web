import Item from '../footer/Item'
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from '../footer/Menus'
const ItemsContainer = () => {
  return (
    <div className=''>
      <Item Links={ PRODUCTS } title='PRODUCTS' />
      <Item Links={ RESOURCES } title='RESOURCES' />
      <Item Links={ COMPANY } title='COMPANY' />
      <Item Links={ SUPPORT } title='SUPPORT' />
    </div>
  )
}

export default ItemsContainer
