<template>
	<v-btn :height="height" :width="width" :color="color" text :icon="icon">
		<v-icon v-if="icon" :x-large="large"> mdi-{{ icon }} </v-icon>

		<slot />
	</v-btn>
</template>

<script>
import { mapFields } from "vuex-map-fields"
export default {
	props: {
		animte: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: undefined,
		},
		icon: {
			type: String,
			default: undefined,
		},
		width: {
			type: String,
			default: undefined,
		},
		large: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
			default: undefined,
		},
	},
	computed: {
		...mapFields("app", "color"),
	},
}
</script>

<style></style>
