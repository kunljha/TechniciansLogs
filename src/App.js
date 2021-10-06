import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
	useEffect(() => {
		// to initialise Materialize-JS widgets
		M.AutoInit()
	}, [])

	return <div className='App'>Hello from React</div>
}

export default App
