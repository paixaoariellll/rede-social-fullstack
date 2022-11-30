import Image from 'next/image';
import React from 'react';
import { FcSearch } from 'react-icons/fc';
import styled from 'styled-components';
import CottageIcon from '@mui/icons-material/Cottage';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcons";
import { Avatar } from '@mui/material';

export default function HeaderScreen() {
    return (
        <div className="flex sticky top-0 z-50 h-14 bg-white p-2 lg:px-5 shadow-md items-center">
            <div className='flex items-center'>
                <Image src="https://links.papareact.com/5me" width={40} height={40} alt="logo" unoptmized layout='fixed' />
                <div className='flex bg-slate-200 ml-2 mr-10 items-center rounded-full'>
                    <FcSearch className='mx-2 hidden md:inline-flex' />
                    <input
                        className='hidden md:inline-flex flex-shrink focus:text-white px-2 py-1 focus:shadow-md focus:shadow-slate-500 focus:bg-indigo-100 focus:border-indigo-400 focus:outline-none  text-xl font-normal text-gray-700 bg-slate-200 bg-clip-padding rounded-full transition ease-in-out m-0'
                        type="text"
                        placeholder="Pesquisar no Fatecanos"
                    />
                </div>
            </div>

            {/* centro */}
            <div className='flex gap-x-5 '>
                <div className="flex gap-x-5 ">
                    <HeaderIcon active Icon={CottageIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Rigth */}
            <Direita className='flex gap-x-3 justify-end'>
                <p className='whitespace-nowrap font-semibold pr-3'>Ariel Paixão</p>
                <AppsIcon className="icon xl:inline-flex hover:bg-gray-300" />
                <ChatIcon className="icon xl:inline-flex hover:bg-gray-300" />
                <NotificationsActiveIcon className="icon xl:inline-flex hover:bg-gray-300" />
                <Avatar />
            </Direita>
        </div>
    )
}

const Direita = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height:80px;
`;