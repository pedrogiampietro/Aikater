import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import './App.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
