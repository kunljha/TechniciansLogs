import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from './types'

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	}
}

// get technicians
export const getTechs = () => async (dispatch) => {
	try {
		setLoading()

		const res = await fetch('/techs')
		const data = await res.json()

		dispatch({
			type: GET_TECHS,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			paylaod: err.response.statusText,
		})
	}
}
