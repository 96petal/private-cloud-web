import Cookies from 'js-cookie'
import { saveErrorLogger } from '../api/api-error'

export default {
	state: {
		language: Cookies.get('language') || 'zh',
		errorList: []
	},
	mutations: {
		SET_LANGUAGE: (state, language) => {
			state.language = language
			Cookies.set('language', language)
		},
		SET_ERROR (state, error) {
			state.errorList.push(error)
		}
	},
	getters: {

	},
	actions: {
		setLanguageAction ({ commit }, language) {
			commit('SET_LANGUAGE', language)
		},
		errorLogAction ({ commit, rootState }, info) {
			// eslint-disable-next-line
			const { user: { token, loginUser: { user_id, user_name } } } = rootState
			let data = {
				...info,
				time: Date.parse(new Date()),
				token,
				user_id,
				user_name
			}
			saveErrorLogger(data).then(() => {
				commit('SET_ERROR', data)
			})
		}
	}
}
