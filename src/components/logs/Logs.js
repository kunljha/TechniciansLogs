import React, { useState, useEffect } from 'react'

const Logs = () => {
	const [logs, setLogs] = useState([])
	const [loading, setLoading] = useState(false)

	const getLogs = async () => {
		setLoading(true)
		const res = await fetch('/logs') //  because proxy is setup
		const data = await res.json()

		setLoading(false)
		setLogs(data)
	}

	useEffect(() => {
		getLogs()
	}, [])

	if (loading) {
		return <h4>Loading...</h4>
	}

	return (
		<ul className='collection-with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No Logs to Show...</p>
			) : (
				logs.map((log) => {
					return <li key={log.id}>{log.message}</li>
				})
			)}
		</ul>
	)
}

export default Logs
