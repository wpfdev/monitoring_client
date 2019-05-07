import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cproducts: [],
		mproducts: [],
		matches: [],
		alertText: ""
	},
	getters: {
		cproducts: state => state.cproducts,
		mproducts: state => state.mproducts,
		matches: state => state.matches
	},
	mutations: {
		'SET_CPRODUCTS'(state, cproducts) {
			state.cproducts = cproducts;
		},
		'SET_MPRODUCTS'(state, mproducts) {
			state.mproducts = mproducts;
		},
		'SET_MATCHES'(state, matches) {
			state.matches = matches;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		}
	},
	actions: {
		async getData(context) {
			try {
				let response = await api.cproduct.getAll();
				context.commit('SET_CPRODUCTS', response.data );
				response = await api.mproduct.getAll();
				context.commit('SET_MPRODUCTS', response.data );
				response = await api.matches.getAll();
				context.commit('SET_MATCHES', response.data )
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
				throw error;
			}
		}
	}
});
