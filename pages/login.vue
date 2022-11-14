<template>
	<v-sheet width="100vw" height="100vh">
		<v-img
			
			src="/login22.jpg"
			height="100%"
			max-width="100%"
			class="align-center"
		>
			<v-sheet
				color="transparent"
				:width="$vuetify.breakpoint.mdAndDown ? '100%' : '90%'"
				class="mt-16 d-flex flex-column align-end"
			>
				<v-btn-toggle
					mandatory
					background-color="transparent"
					color="white"
					group
					dark
					class="mb-16"
				>
					<v-btn
						v-for="(headerText, index) in headerTexts"
						:key="index"
						class="cool-link"
						@click="headerText.login"
					>
						<div class="h6">
							{{ headerText.title }}
						</div>
					</v-btn>
				</v-btn-toggle>

				<Transition name="fade" mode="out-in">
					<component :is="activeComponent"></component>
				</Transition>
			</v-sheet>
		</v-img>
	</v-sheet>
</template>

<script>
import SignIn from "../components/Login/SignIn.vue"
import SignUp from "../components/Login/SignUp.vue"
export default {
	components: { SignUp, SignIn },
	layout: "login",
	data() {
		return {
			activeComponent: "SignIn",
			headerTexts: [
				{
					title: "Sign in",
					login: this.one,
					button: "ml-16 pl-16",
				},
				{
					title: "Sign up",
					login: this.two,
					button: "mr-16 pr-16",
				},
			],
		}
	},
	methods: {
		one() {
			if (this.activeComponent === "SignUp") {
				this.activeComponent = "SignIn"
			}
		},
		two() {
			if (this.activeComponent === "SignIn") {
				this.activeComponent = "SignUp"
			}
		},
	},
}
</script>

<style></style>
