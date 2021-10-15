import React from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techActions'

const TechItem = ({ tech, deleteTech }) => {
	return (
		<li className='collection-item'>
			<div>
				{tech.firstName} {tech.lastName}
				<a
					href='#!'
					className='secondary-content'
					onClick={(e) => {
						deleteTech(tech.id)
						M.toast({
							html: `Technician ${tech.firstName} ${tech.lastName} deleted`,
						})
					}}
				>
					<i className='material-icons red-text'>delete</i>
				</a>
			</div>
		</li>
	)
}

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)
