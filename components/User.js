import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function User() {
    const { data: session } = useSession()
    function handleSignOut() {
        signOut()
    }
    return (
        <>
            <h1 className='text-4xl'>Informações do usuário</h1>
            <div>
                <h1>Nome: {session.user.name}</h1>
                <h1>Email: {session.user.email}</h1>
            </div>
            <div className='flex justify-center'>
                <button onClick={handleSignOut}>Sair</button>
            </div>
            <div>
                ver perfil
            </div>
        </>
    )
}

export default User

