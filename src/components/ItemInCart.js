import React from 'react'
import ButtonInTheCart from './ButtonInTheCart'

export default function ItemInCart({inStock, itemName, itemAdded, incrementQuantityHandler, decrementQuantityHandler}) {
    return (
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{itemName}</p>
            </div>
            <div className="text-lg py-2">
                <div
                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                >
                    <ButtonInTheCart d="M18 12H6" decrementQuantityHandler={decrementQuantityHandler} />
                    <p>{itemAdded}</p>
                    <ButtonInTheCart inStock={inStock} d="M12 6v6m0 0v6m0-6h6m-6 0H6" incrementQuantityHandler={incrementQuantityHandler} />
                </div>
            </div>
        </div>
    )
}
