import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
	works: [],
})
export const mutations = {
	updateField,
}
export const getters = {
	getField,
}
