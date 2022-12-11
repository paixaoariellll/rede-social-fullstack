import Link from 'next/link'
import React from 'react'
import Hero from './hero'

function Header() {
    return (
        <>
            <nav className="bg-white fixed px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ariel Paixão</span>
                    </a>
                    <div className="flex md:order-2">
                        <Link href="/login" >
                            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                                Entrar
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Hero className="mt-96" />
        </>
    )
}

export default Header