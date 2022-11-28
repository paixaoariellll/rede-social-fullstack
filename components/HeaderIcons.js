import React from 'react'

function HeaderIcons({ Icon, active }) {
    return (
        <div className='flex items-center cursor-pointer md:px-10 sm:h-10 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-red-600 group'>
            <Icon className={`h-5 mx-auto sm:h-7 text-center text-gray-500 group-hover:text-red-600
            ${active && "text-red-600"}
            `}
            />
        </div>
    )
}

export default HeaderIcons
