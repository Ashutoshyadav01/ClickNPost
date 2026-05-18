import React from 'react'
import { Menu } from 'lucide-react'
import clickNpost from "../assets/clickNpost.png"
import "./Header.css"

const links = ["Home", "About", "Services", "Album", "Buy Frames"]
const Header = () => {
  return (
    <div className='navBar'>
      <div>
        <img
          src={clickNpost}
          width={200}
          height={80}
          className='header-logo'
        />
      </div>
      <div>
        <ul className='lists'>
          {

            links.map((items, key) => {
              return (
                <li
                  key={key}
                >
                  {items}
                </li>
              )
            })
          }
        </ul>
        <div className='mobile-menu'>
          <Menu />
        </div>

      </div>
    </div>
  )
}

export default Header
