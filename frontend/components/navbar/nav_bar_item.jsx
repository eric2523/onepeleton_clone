import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBarItem = (props) => {
  return (
    <li className="nav-bar-item">
      <NavLink exact to={props.path} activeClassName="nav-bar-item-active">
        {props.itemTitle.toUpperCase()}
      </NavLink>
    </li>
  )
}

export default NavBarItem
