import React from 'react'
import Button from './Button'

export default function Item({itemName, itemInStock, itemPrice, incrementQuantityHandler}) {
    return (
        <div
            className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
        >
            <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                    <p>{itemName} ({itemInStock})</p>
                    <p className="text-gray-400 text-base">Tk {itemPrice}</p>
                </div>
                <Button inStock={itemInStock>0} incrementQuantityHandler={incrementQuantityHandler} />
            </div>
        </div>
    )
}
