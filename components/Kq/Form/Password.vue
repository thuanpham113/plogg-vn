<template>
	<v-text-field
		v-model="client.password"
		dark
		persistent-placeholder
		:rules="[() => !!client.password || 'This field is required']"
		:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
		:type="showPassword ? 'text' : 'password'"
		label="Password"
		:height="height"
		outlined
		@click:append="showPassword = !showPassword"
	>
		<slot />
	</v-text-field>
</template>

<script>
export default {
	props: {
		height: {
			type: String,
			default: undefined,
		},
	},
	data() {
		return {
			client: {},
			showPassword: false,
		}
	},
}
</script>

<style></style>
