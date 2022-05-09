import React from 'react'
import {ReactComponent as Logo } from '../assets/svg/logo.svg'
import {ReactComponent as Search } from '../assets/svg/search.svg'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className='header__logo'>
            <Logo />
        </div>
        <div className='header__search'>
            <div className='header__search__box'>
                <Search />
                <input type='text' placeholder='Search' />
            </div>
        </div>
        <nav className='header__navigation'>
            <a href="/">GSE</a>
            <a href="/">CRYPTO</a>
        </nav>
    </header>
  )
}

export default Header