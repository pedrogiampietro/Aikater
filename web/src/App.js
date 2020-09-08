import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import { UserStorage } from './UserContext'
import './App.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<main className="AppBody">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="login/*" element={<Login />} />
						</Routes>
					</main>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
