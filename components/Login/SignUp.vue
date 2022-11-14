<template>
	<v-sheet width="40%" color="transparent grey--text">
		<div class="h6 font-weight-bold">START FOR FREE</div>
		<div class="h5 white--text font-weight-bold">Create new account.</div>

		<v-sheet width="100%" color="transparent" class="mt-2">
			<v-row dense>
				<kq-form
					v-for="(form, index) in forms"
					:key="index"
					:class="form.class"
					:label="form.label"
					:v-model="login"
					:icon="form.icon"
				/>
			</v-row>
			<kq-form label="Email" :v-model="login" icon="mdi-email" />
			<kq-form-password />
			<v-btn
				v-for="(button, index) in buttons"
				:key="index"
				:class="button.class"
				height="8vh"
				class="rounded-pill mr-5 mt-11 white-text"
				color="white"
				outlined
			>
				<div>{{ button.text }}</div>
			</v-btn>
		</v-sheet>
	</v-sheet>
</template>

<script>
export default {
	data() {
		return {
			forms: [
				{
					label: "First name",
					class: "mt-6 ml-1",
				},
				{
					label: "Last name",
					class: "mt-6 ml-5 mr-1",
				},
			],
			cards: [
				{
					text: "Email",
				},
				{
					text: "Password",
				},
			],
			buttons: [
				{
					text: "Change method",
				},
				{
					text: "Create account",
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.v-label {
	font-size: 2rem;
}
</style>
