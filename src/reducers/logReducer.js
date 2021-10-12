import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	LOGS_ERROR,
	SET_LOADING,
	SET_CURRENT_LOG,
	CLEAR_CURRENT_LOG,
} from '../actions/types'

const initialState = {
	logs: [],
	current: null,
	loading: false,
	error: null,
}

const logReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			}
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			}
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => log.id !== action.payload),
				loading: false,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
			}
		case SET_CURRENT_LOG:
			return {
				...state,
				current: action.payload,
			}
		case CLEAR_CURRENT_LOG:
			return {
				...state,
				current: null,
			}
		case LOGS_ERROR:
			console.error(action.payload)
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}

export default logReducer
