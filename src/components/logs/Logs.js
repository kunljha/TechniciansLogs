import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import { getLogs } from '../../actions/logActions'

const Logs = ({ logs, loading, getLogs }) => {
	useEffect(() => {
		getLogs()
		// eslint-disable-next-line
	}, [])

	if (loading || logs === []) {
		return <Preloader />
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No Logs to Show...</p>
			) : (
				logs.map((log) => {
					return <LogItem key={log.id} log={log} />
				})
			)}
		</ul>
	)
}

Logs.propTypes = {
	logs: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	logs: state.log.logs,
	loading: state.log.loading,
})

export default connect(mapStateToProps, { getLogs })(Logs)
