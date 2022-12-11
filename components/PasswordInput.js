import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PasswordInput = ({ placeholder, value, onChange, onPaste, name }) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="mb-4 flex items-center">
            <input
                type={showPassword ? 'text' : 'password'}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onPaste={onPaste}
            />
            <div className='cursor-pointer mx-2' onClick={togglePassword}>
                {showPassword ? (
                    <FaEye className='text-3xl' />
                ) : (
                    <FaEyeSlash className='text-3xl' />
                )
                }
            </div>
        </div>
    )
}

export default PasswordInput