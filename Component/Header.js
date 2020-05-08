import React from 'react'
import NavBar from './NavBar'

const Header =() => {
   return( 
            <div className='bg-gray-200'>
                <h1>
                    <img src='/logo.png' alt='Olá FSL' className='h-24 mx-auto  py-4' />
                </h1>
                <NavBar />
            </div>
   )
}
export default Header