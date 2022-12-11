import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="p-4 flex justify-center bg-white shadow dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {year} Ariel Paixão™
            </span>
        </div>
    )
}

export default Footer