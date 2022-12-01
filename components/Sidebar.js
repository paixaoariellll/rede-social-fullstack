import { useSession } from 'next-auth/react';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarRow from './SidebarRow';


function Sidebar() {
    /*  const [session, loading] = useSession(); */
    return (
        <div className='p-2 mt-5 max-w-[350px] xl:min-w-[250px]'>
            <SidebarRow /* src={session.user.image} */ Icon={AccountCircleIcon} title="Usuário" />
            <SidebarRow Icon={GroupsIcon} title="Amigos" />
            <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace" />
            <SidebarRow Icon={LiveTvIcon} title="Assistir" />
            <SidebarRow Icon={CalendarMonthIcon} title="Eventos" />
            <SidebarRow Icon={HistoryIcon} title="Memórias" />
            <SidebarRow Icon={ExpandMoreIcon} title="Ver mais" />
        </div>
    )
}

export default Sidebar
