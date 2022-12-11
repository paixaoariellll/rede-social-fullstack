import Link from 'next/link'
import React from 'react'

function User() {
    return (
        <>
            <h1 className='text-4xl'>Informações do usuário</h1>
            <div>
                <h1>Nome: </h1>
                <h1>Email: </h1>
            </div>
            <div className='flex justify-center'>
                <button>Sair</button>
            </div>
            <div>
                ver perfil
            </div>
        </>
    )
}

export default User