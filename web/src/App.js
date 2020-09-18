import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import ProtectedRoute from './Components/Helper/ProtectedRouter'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import User from './Components/User'

import './App.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="login/*" element={<Login />} />
						<ProtectedRoute path="conta/*" element={<User />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
