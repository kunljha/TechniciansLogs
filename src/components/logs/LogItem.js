import React from 'react'
import Moment from 'react-moment'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteLog } from '../../actions/logActions'
import { setCurrentLog } from '../../actions/logActions'

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
					onClick={() => setCurrentLog(log)}
				>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by{' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment>
				</span>
				<a
					href='#!'
					className='secondary-content'
					onClick={() => {
						deleteLog(log.id)
						M.toast({ html: 'Log Deleted' })
					}}
				>
					<i className='material-icons red-text'>delete</i>
				</a>
			</div>
		</li>
	)
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrentLog: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrentLog })(LogItem)
