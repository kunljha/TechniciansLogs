import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ techs, loading, getTechs }) => {
	useEffect(() => {
		getTechs()
		// eslint-disable-next-line
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

TechListModal.propTypes = {
	techs: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	techs: state.tech.techs,
	loading: state.tech.loading,
})

export default connect(mapStateToProps, { getTechs })(TechListModal)
