import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechOptions = ({ techs, loading, getTechs }) => {
	useEffect(() => {
		getTechs()
		// eslint-disable-next-line
	}, [])

	return (
		!loading &&
		techs.length !== 0 &&
		techs.map(({ id, firstName, lastName }) => {
			return (
				<option value={`${firstName} ${lastName}`} key={id}>
					{firstName} {lastName}
				</option>
			)
		})
	)
}

TechOptions.propTypes = {
	techs: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	techs: state.tech.techs,
	loading: state.tech.loading,
})

export default connect(mapStateToProps, { getTechs })(TechOptions)
