import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from '../actions/types'

const initialState = {
	techs: [],
	loading: false,
	error: null,
}

const techReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
			}
		case TECHS_ERROR:
			console.error(action.payload)
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}

export default techReducer
