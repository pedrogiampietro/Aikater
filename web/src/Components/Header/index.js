import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<nav className="container">
			<Link to="/">Home</Link>
			<Link to="/login">Login / Criar</Link>
		</nav>
	)
}

export default Header
