import React from 'react'
import './navbar.scss'
import {images} from '../../constants'

const navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app-navbar-links'>
        {['home', 'about','work', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default navbar