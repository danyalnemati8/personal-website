import React from 'react'
import "./styles.css"

export default function Navbar() {
  return (
    <nav className="nav">
        <a href='/' className='WebTitle'>Welcome!</a>
        <ul>
            <li>
                <a href='/About'>About</a>
            </li>
            <li>
                <a href='/Projects'>Projects</a>
            </li>
            <li>
                <a href='/Skills'>Skills</a>
            </li>
            <li>
                <a href='/Contact'>Contact</a>
            </li>
        </ul>

      </nav>
  )
}
