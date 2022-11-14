<template>
	<v-app id="app" class="overflow-hidden">
		<v-app-bar width="100vw" app flat height="80" color="transparent">
			<v-col class="d-flex flex-row" cols="12">
				<v-col class="d-flex justify-center" cols="2">
					<div>
						<nuxt-link to="/">
							<v-img
								v-if="$vuetify.breakpoint.mdAndUp"
								width="105"
								contain
								src="/white-logo.png"
							></v-img>
						</nuxt-link>
					</div>
				</v-col>
			</v-col>
		</v-app-bar>

		<v-container fluid class="pa-0" max-height="600">
			<Nuxt />
		</v-container>
	</v-app>
</template>

<script>
export default {
	data: () => ({}),
}
</script>

<style></style>
