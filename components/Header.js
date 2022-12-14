import Link from 'next/link'
import React from 'react'
import Hero from './hero'

function Header() {
    return (
        <>
            <nav className="bg-white fixed px-2 sm:px-4 py-2.5 dark:bg-red-800 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ariel Paixão</span>
                    </a>
                    <div className="flex md:order-2">
                        <Link href="/login" >
                            <button className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" data-modal-toggle="authentication-modal">
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