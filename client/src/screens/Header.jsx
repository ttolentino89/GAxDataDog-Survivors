import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'

const authenticatedOptions = (
    <div className="links">
        <NavLink to="/change-password">Change Password</NavLink>
        <a href="http://barkpark.surge.sh">Sign Out</a>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
        <NavLink to="/sign-up">Create New Account</NavLink>
        <NavLink to="/sign-in">Verify Credentials</NavLink>
    </div>
)

const alwaysOptions = (
    <div className="links">
        <NavLink to="/">Home</NavLink>
    </div>
)

const Header = ({ user }) => (
    <Navbar>
        {user && <span className="navbar-text">Welcome, Cody!</span>}
        <div className="nav">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
    </Navbar>
)

export default Header
