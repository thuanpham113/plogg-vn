<template>
	<v-toolbar
		dense
		:flat="flat"
		:elevation="flat ? 0 : 1"
		:class="{ flat: flat }"
	>
		<v-toolbar-title>
			<v-subheader :class="{ title: lg }" class="px-0">
				<v-icon v-if="icon" right> mdi-{{ icon }} </v-icon>

				<slot />
			</v-subheader>
		</v-toolbar-title>

		<v-spacer />

		<slot name="actions" />
	</v-toolbar>
</template>

<script>
export default {
	name: "RelyTitle",
	props: {
		flat: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: undefined,
		},
		lg: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
.flat {
	background-color: rgba(0, 0, 0, 0) !important;
}
</style>
