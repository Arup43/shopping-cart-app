import React from 'react'

export default function Button({ inStock, incrementQuantityHandler }) {
    return (
        <div className="text-lg font-semibold">
            {inStock ? (
                <button onClick={() => incrementQuantityHandler()}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            ) : (
                <div style={{color: 'red'}}>Out of stock</div>
            )}

        </div>
    )
}
