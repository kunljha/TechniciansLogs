import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
	const [techs, setTechs] = useState([])
	const [loading, setLoading] = useState(false)

	const getTechs = async () => {
		setLoading(true)
		const res = await fetch('/techs') // because proxy is setup
		const data = await res.json()

		setLoading(false)
		setTechs(data)
	}

	useEffect(() => {
		getTechs()
	}, [])

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<ul className='collection with-header'>
					<li className='collection-header'>
						<h4 className='center'>All Technicians</h4>
					</li>
					{!loading && techs.length === 0 ? (
						<p className='center'>No Techs to Show...</p>
					) : (
						techs.map((tech) => {
							return <TechItem key={tech.id} tech={tech} />
						})
					)}
				</ul>
			</div>
		</div>
	)
}

export default TechListModal
