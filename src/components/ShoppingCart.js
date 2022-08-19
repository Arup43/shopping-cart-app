import React from 'react'
import Title from './Title'
import Item from './Item'
import ItemInCart from './ItemInCart'
import TotalItem from './TotalItem'
import TotalPrice from './TotalPrice'
import { useDispatch, useSelector } from 'react-redux'

import { incrementQuantity, decrementQuantity } from '../redux/shoppingCart/actions'

const ShoppingCart = () => {


  const currentState = useSelector(state => [...state]);

  const dispatch = useDispatch();


  const incrementQuantityHandler = (id) => {
    dispatch(incrementQuantity(id));
  }

  const decrementQuantityHandler = (id) => {
    dispatch(decrementQuantity(id));
  }


  const Items = currentState.map((item) => {
    return (
      <Item
        key={item.id}
        itemName={item.name}
        itemInStock={item.inStock}
        itemPrice={item.price}
        incrementQuantityHandler={() => incrementQuantityHandler(item.id)}
      />
    )
  })

  const ItemsInCart = currentState.map((item) => {
    return (
      item.quantity > 0 ? (
        <ItemInCart
          key={item.id}
          inStock={item.inStock>0?true:false}
          itemName={item.name}
          itemAdded={item.quantity}
          incrementQuantityHandler={() => incrementQuantityHandler(item.id)}
          decrementQuantityHandler={() => decrementQuantityHandler(item.id)}
        />
      ) : null)
  })


  const totalItem = () => {
    return currentState.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  const totalPrice = () => {
    let total = 0;
    currentState.forEach(item => {
      total += item.price * item.quantity;
    }
    )
    return total;
  }


  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <Title title="Shopping Cart" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          {Items}
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            {ItemsInCart}
            <TotalItem totalItem={totalItem()} />
          </div>

          <TotalPrice totalPrice={totalPrice()} />

        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;