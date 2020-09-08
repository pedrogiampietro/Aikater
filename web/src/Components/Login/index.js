import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPerdeu from './LoginPerdeu'
import LoginResetar from './LoginResetar'

const Login = () => {
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
