import Item from '../footer/Item'
import { LIBRARY, DISCOVER, DEVELOP, SUPPORT } from '../footer/Menus'

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 mx-12 text-center'>
      <Item Links={LIBRARY} title='OPEN LIBRARY' />
      <Item Links={DISCOVER} title='DISCOVER' />
      <Item Links={DEVELOP} title='DEVELOP' />
      <Item Links={SUPPORT} title='SUPPORT' />
    </div>
  )
}

export default ItemsContainer
