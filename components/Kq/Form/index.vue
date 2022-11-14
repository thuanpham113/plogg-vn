<template>
	<v-text-field
		v-model="login"
		:label="label"
		dark
		persistent-placeholder
		outlined
		:rules="[() => !!login || 'This field is required']"
		:append-icon="icon"
		:height="height"
	>
		<slot />
	</v-text-field>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: undefined,
		},
		icon: {
			type: String,
			default: undefined,
		},
		login: {
			type: String,
			default: undefined,
		},
		height: {
			type: String,
			default: undefined,
		},
	},
}
</script>

<style></style>
