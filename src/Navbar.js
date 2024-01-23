import React from 'react'

export default function Navbar(){
    return(
        <nav className="navbar">
                <a href='/' className="site-title">Letterboxb</a>
                <ul>
                    <li>
                    <a href="/about">About</a>
                    </li>
                    <li>
                    <a href='/signup'>Sign Up</a>
                    </li>
                    <li>
                    <a href='/entries'>Entries</a>
                    </li>
                </ul>
        </nav>
    )
}