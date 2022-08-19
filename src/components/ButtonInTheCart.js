import React from 'react'

export default function ButtonInTheCart({inStock, d, incrementQuantityHandler, decrementQuantityHandler}) {
    return (
        <button disabled={incrementQuantityHandler && !inStock} onClick={incrementQuantityHandler? () => incrementQuantityHandler(): () => decrementQuantityHandler()}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={d}
                />
            </svg>
        </button>
    )
}
