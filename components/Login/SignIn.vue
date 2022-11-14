<template>
	<v-col cols="12" md="4" class="mx-2 grey--text">
		<div
			:style="$vuetify.breakpoint.xs ? 'font-size: 15vw' : ''"
			class="h4 white--text font-weight-bold"
		>
			Welcome back
		</div>
		<div class="d-flex">
			<div class="h7">Welcome back! Please enter your details</div>
		</div>
		<v-sheet width="100%" color="transparent" class="my-12">
			<kq-form
				v-for="(form, index) in forms"
				:key="index"
				:label="form.label"
				:v-model="form.login"
				:icon="form.icon"
			/>
			<kq-form-password />
			<div class="d-flex mt-11 justify-center">
				<v-btn
					class="py-8 px-16 rounded-pill white--text"
					color="white"
					outlined
					width="45%"
				>
					<div>Login</div>
				</v-btn>
			</div>
		</v-sheet>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			logo: "../plogg_logo.png",
			valid: true,
			showPassword: false,
			form: {
				email: null,
				password: null,
			},
			forms: [
				{
					label: "Email",
					icon: "mdi-email",
					login: "form.email",
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
