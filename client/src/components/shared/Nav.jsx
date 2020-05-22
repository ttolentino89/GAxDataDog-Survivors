import React from 'react'
import { NavLink } from 'react-router-dom'
import ex from './example.png'
import dms from './dms.png'


const Nav = () => (
    <nav>
    <br />
      <img src={ex} className="prof"/>
        <NavLink to='/items'>Tasks</NavLink>
        <NavLink to='/create'>Create Task</NavLink>
        <NavLink to='/users'>Teams</NavLink>
        <NavLink to='/users'>Find Teammates</NavLink>
        <br /><br />
      <img src={dms} className="dms"/>
    </nav>
)

export default Nav
