import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h4>
        <i className={icon} ></i>
        {title}
      </h4>
      <ul>
        <li>
          <Link to="/">Find page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
