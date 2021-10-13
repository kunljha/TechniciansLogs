import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	LOGS_ERROR,
	SET_LOADING,
	SET_CURRENT_LOG,
	CLEAR_CURRENT_LOG,
} from './types'

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	}
}

// export const getLogs = () => {
// 	return async (dispatch) => {
// 		setLoading()

// 		const res = await fetch('/logs')
// 		const data = await res.json()

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		})
// 	}
// }

// get logs from server
export const getLogs = () => async (dispatch) => {
	try {
		setLoading()

		const res = await fetch('/logs')
		const data = await res.json()

		dispatch({
			type: GET_LOGS,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		})
	}
}

// add a new log
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading()

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await res.json()

		dispatch({
			type: ADD_LOG,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		})
	}
}

// delete a log
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading()

		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		})

		dispatch({
			type: DELETE_LOG,
			payload: id,
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		})
	}
}

// update log
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading()

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await res.json()

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		})
	}
}

// search logs by input-text in searchBar
export const searchLogs = (text) => {
	return {
		type: SEARCH_LOGS,
		payload: text.toLowerCase(),
	}
}

// set current log
export const setCurrentLog = (log) => {
	return {
		type: SET_CURRENT_LOG,
		payload: log,
	}
}

// clear current log
export const clearCurrentLog = () => {
	return {
		type: CLEAR_CURRENT_LOG,
	}
}
