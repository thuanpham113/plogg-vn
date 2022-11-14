<template>
	<v-sheet height="100%" width="100vw">
		<v-img min-height="100vh" src="/contact.jpeg">
			<v-sheet
				color="transparent"
				class="d-flex flex-column justify-center align-center"
				width="100%"
				height="100%"
			>
				<v-col class="white--text px-10" cols="12" md="4">
					<div :style="$vuetify.breakpoint.xs ? 'font-size: 11vw' : ''" class="h4 font-weight-bold mb-2">Let's partner up</div>
					<div class="h7 mb-10">Let's level up your brand, together</div>
					<kq-form
						v-for="(email, index) in emails"
						:key="index"
						dark
						:label="email.label"
						:icon="email.icon"
						:height="email.height"
					></kq-form>
					<v-btn class="text-none my-6" height="6vh" block> Get started </v-btn>
					<div class="d-sm-flex flex-xs-column justify-center">
						<div class="mr-1">Prefer email?</div>
						<nuxt-link to="/">
							<div>aleduc@ploggmedia.com</div>
						</nuxt-link>
					</div>
				</v-col>
			</v-sheet>
		</v-img>
	</v-sheet>
</template>

<script>
export default {
	layout: "login",
	data() {
		return {
			emails: [
				{
					label: "Name",
					icon: "mdi-account",
					height: "5vh",
				},
				{
					label: "Email",
					icon: "mdi-email-outline",
					height: "5vh",
				},
				{
					label: "Phone",
					icon: "mdi-phone",
					height: "5vh",
				},
				{
					label: "How can we help?",
					height: "10vh",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
