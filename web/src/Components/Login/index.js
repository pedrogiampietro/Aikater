import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPerdeu from './LoginPerdeu'
import LoginResetar from './LoginResetar'

const Login = () => {
	const { login } = React.useContext(UserContext)
	if (login === true) return <Navigate to="/conta" />

	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="criar" element={<LoginCreate />} />
				<Route path="perdeu" element={<LoginPerdeu />} />
				<Route path="resetar" element={<LoginResetar />} />
			</Routes>
		</div>
	)
}

export default Login
