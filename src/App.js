import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import SearchBar from './components/layout/SearchBar'

const App = () => {
	useEffect(() => {
		// to initialise Materialize-JS widgets
		M.AutoInit()
	}, [])

	return (
		<Fragment>
			<SearchBar />
		</Fragment>
	)
}

export default App
