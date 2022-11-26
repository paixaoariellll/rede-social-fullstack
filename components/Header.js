import Image from 'next/image'
import React from 'react'
import { FcSearch } from 'react-icons/fc'
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline"
import {
    HomeIcon,
} from "@heroicons/react/24/solid"
import HeaderIcon from "./HeaderIcons"

export default function HeaderScreen() {
    return (
        <div className="sticky top-0 z-50 bg-white flex p-2 lg:px-5 shadow-md items-center ">
            <div className='flex items-center'>
                <Image src="https://links.papareact.com/5me" width={40} height={40} alt="logo" unoptmized layout='fixed' />
                <div className='flex bg-slate-200 ml-2 mr-10 items-center rounded-full'>
                    <FcSearch className='mx-2' />
                    <input
                        className='flex-shrink focus:text-white px-2 py-1 focus:shadow-md focus:shadow-slate-500 focus:bg-indigo-100 focus:border-indigo-400 focus:outline-none  text-xl font-normal text-gray-700 bg-slate-200 bg-clip-padding rounded-full transition ease-in-out m-0'
                        type="text"
                        placeholder="Pesquisar no Fatecanos"
                    />
                </div>
            </div>
            {/* centro */}
            <div className='flex gap-x-10 items-center'>
                <div className="flex gap-x-10 ">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

        </div>
    )
}
