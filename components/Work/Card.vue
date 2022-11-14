<template>
	<v-sheet class="pa-5" :color="$vuetify.theme.dark ? '#212327' : '#BFC4D0'">
		<v-row class="mx-5 d-flex">
			<div class="align-center font-weight-bold h4 d-flex">NFT MarketPlace</div>
			<v-col cols="12">
				<v-row>
					<v-col
						v-for="(work, index) in works"
						:key="index"
						class="pa-3"
						cols="12"
						lg="2"
						md="4"
						sm="6"
					>
						<v-hover v-slot="{ hover }">
							<v-skeleton-loader v-if="loading" class="mx-auto" width="200">
								<v-card class="d-flex flex-column">
									<v-skeleton-loader type="image"></v-skeleton-loader>
									<v-skeleton-loader type="article"></v-skeleton-loader>
								</v-card>
							</v-skeleton-loader>
							<v-card
								v-else
								outlined
								class="card"
								height="100%"
								:elevation="hover ? 8 : 2"
								hover
							>
								<nuxt-link
									style="text-decoration: none; color: inherit"
									:to="`/work/${index}`"
								>
									<v-img :src="work.filename"></v-img>
									<v-layout class="pa-3" align-content-space-between>
										<v-layout column>
											<div>Ronnin</div>
											<div class="">{{ work.name }}</div>
										</v-layout>
										<v-layout align-end column>
											<div>Price</div>
											<v-sheet class="d-flex justify-end">
												<v-icon>mdi-cards-diamond</v-icon>

												<div class="ml-1">{{ work.description }}</div>
											</v-sheet>
										</v-layout>
									</v-layout>
								</nuxt-link>
								<v-divider></v-divider>
								<v-sheet
									:class="hover ? 'justify-space-between' : 'justify-end'"
									class="d-flex"
								>
									<kq-button
										v-if="hover"
										text
										color="#C250DB"
										class="text--lighten text-none"
										>Buy now</kq-button
									>

									<v-card-action class="d-flex">
										<v-tooltip top color="black">
											<template #activator="{ on, attrs }">
												<v-hover v-slot="{ hover }">
													<v-btn
														v-bind="attrs"
														:style="{ color: hover ? 'pink' : 'grey' }"
														icon
														v-on="on"
													>
														<v-icon>mdi-heart-outline</v-icon>
													</v-btn>
												</v-hover>
											</template>
											<span>Favorite</span>
										</v-tooltip>
										<div class="pa-2">0</div>
									</v-card-action>
								</v-sheet>
							</v-card>
						</v-hover>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
import { mapFields } from "vuex-map-fields"
export default {
	inject: {
		theme: {
			default: { isDark: false },
		},
	},

	data() {
		return {
			loading: true,
			count: 0,
		}
	},
	computed: {
		...mapFields("app", ["works"]),
	},
	create() {
		window.addEventListener("load", this.onWindowLoad)
	},
	async fetch() {
		const worksArr = await this.$axios.$get("/works/")
		this.works = worksArr
		// this.$store.dispath("getData")
	},
	mounted: function () {
		this.$nextTick(function () {
			this.loading = false
		})
	},
}
</script>
<style lang="scss" scoped></style>
