import Image from 'next/image'
import React from 'react'
import { FcSearch } from 'react-icons/fc'

export default function HeaderScreen() {
    return (
        <div className='flex items-center'>
            <h1>FATECANOS</h1>
            <div>
                <Image src="https://links.papareact.com/5me" width={40} height={40} alt="logo" unoptmized layout='fixed' />
                <div className='flex'>
                    <input type="text" placeholder="Pesquisar no Fatecanos" />
                    <FcSearch />
                </div>
            </div>
        </div>
    )
}
