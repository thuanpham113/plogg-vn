<template>
	<v-sheet
		:class="
			$vuetify.breakpoint.mdAndDown
				? 'd-flex flex-column'
				: 'd-flex flex-row justify-center pa-4'
		"
	>
		<v-sheet
			class="d-flex flex-column"
			:width="$vuetify.breakpoint.mdAndDown ? '100%' : '40%'"
		>
			<v-card class="rounded-lg elevation-3 my-4">
				<div class="d-flex flex-row justify-space-between py-2">
					<v-tooltip top nudge-bottom="10px">
						<template #activator="{ on, attrs }">
							<v-hover v-slot="{ hover }">
								<v-btn
									v-bind="attrs"
									:style="{ color: hover ? 'black' : 'grey' }"
									icon
									v-on="on"
								>
									<v-icon>mdi-cards-diamond</v-icon>
								</v-btn>
							</v-hover>
						</template>
						<span>Blockchain: Ethereum</span>
					</v-tooltip>
					<div class="d-flex flex-row align-center pr-2">
						<v-tooltip top nudge-bottom="10px">
							<template #activator="{ on, attrs }">
								<v-hover v-slot="{ hover }">
									<v-btn
										v-bind="attrs"
										:style="{ color: hover ? 'pink' : 'grey' }"
										icon
										v-on="on"
										@click="addFavorite"
									>
										<v-icon>mdi-heart-outline</v-icon>
									</v-btn>
								</v-hover>
							</template>
							<span>Favorite</span>
						</v-tooltip>
						<div>{{ counter }}</div>
					</div>
				</div>
				<v-sheet color="transparent" height="500" width=" 100%">
					<player-3-d-model :link="works[$route.params.id].thumbnail" />
				</v-sheet>
			</v-card>
			<v-sheet
				v-if="$vuetify.breakpoint.mdAndDown"
				class="d-flex flex-column"
				width="100%"
			>
				<div
					class="pa-4 d-flex flex-row justify-space-between"
					:class="$vuetify.breakpoint.mdAndDown ? ' flex-column ' : ''"
				>
					<div class="pa-4 text-subtitle-2 blue--text">Lil ShibaDoges Club</div>
					<div style="position: relative">
						<v-card height="50%" class="elevation-0 d-flex flex-row" outlined>
							<div
								v-for="(button, index) in buttons"
								:key="index"
								class="align-center d-flex justify-center"
								style="height: 100%"
							>
								<v-tooltip top nudge-bottom="10px">
									<template #activator="{ on, attrs }">
										<v-hover v-slot="{ hover }">
											<v-layout>
												<v-btn
													v-if="button.script != 'Share' && button.script != 'More'"
													v-bind="attrs"
													:style="{ color: hover ? 'black' : 'grey' }"
													text
													:elevation="hover ? 8 : 0"
													v-on="on"
												>
													<v-icon>{{ button.icon }}</v-icon>
												</v-btn>
												<v-btn
													v-if="button.script === 'Share'"
													v-bind="attrs"
													:style="{ color: hover ? 'black' : 'grey' }"
													text
													:elevation="hover ? 8 : 0"
													v-on="on"
													@click="shareCardOn"
												>
													<v-icon>{{ button.icon }}</v-icon>
												</v-btn>
												<v-btn
													v-if="button.script === 'More'"
													v-bind="attrs"
													:style="{ color: hover ? 'black' : 'grey' }"
													text
													:elevation="hover ? 8 : 0"
													v-on="on"
													@click="moreCardOn"
												>
													<v-icon>{{ button.icon }}</v-icon>
												</v-btn>
											</v-layout>
										</v-hover>
									</template>
									<span>{{ button.script }}</span>
								</v-tooltip>
								<v-divider vertical />
							</div>
						</v-card>
					</div>
					<v-card
						v-if="shareOn"
						class="elevation-1 d-flex flex-column"
						width="fit-content"
						outlined
						style="position: absolute; right: 330px; top: 80px; z-index: 2"
					>
						<div v-for="(item, index) in share" :key="index" style="height: 100%">
							<v-hover v-slot="{ hover }">
								<v-btn
									text
									:elevation="hover ? 8 : 0"
									class="d-flex justify-end"
									block
									style="text-transform: none"
								>
									<v-img
										v-if="item.text != 'Embed Item'"
										:src="item.media"
										contain
										class="rounded-circle"
										width="20px"
										height="20px"
									/>
									<v-icon v-else>{{ item.media }}</v-icon>

									<div class="pl-2">{{ item.text }}</div>
								</v-btn>
							</v-hover>

							<v-divider />
						</div>
					</v-card>
					<v-card
						v-if="moreOn"
						class="elevation-1 d-flex flex-column"
						width="fit-content"
						outlined
						style="position: absolute; right: 270px; top: 80px; z-index: 2"
					>
						<div>
							<v-hover v-slot="{ hover }">
								<v-btn
									text
									:elevation="hover ? 8 : 0"
									class="d-flex justify-end"
									block
									style="text-transform: none"
								>
									<v-icon>mdi-flag</v-icon>
									<div class="pl-2">Report</div>
								</v-btn>
							</v-hover>
						</div>
					</v-card>
				</div>
				<div class="px-4 py-2 text-h5 font-weight-bold">Lil ShibaDoges #3669</div>
				<div
					class="px-4 py-2 text-subtitle-1 d-flex flex-row"
					:class="$vuetify.breakpoint.mdAndDown ? 'd-flex flex-column' : ''"
				>
					<div>Owned by <span class="blue--text">BigShibaDoges</span></div>
					<div class="px-4 d-flex flex-row">
						<v-icon>mdi-eye</v-icon>
						<div class="px-2">4 views</div>
					</div>
					<div class="px-4 d-flex flex-row">
						<v-icon>mdi-heart</v-icon>
						<div class="px-2">{{ counter }} favorites</div>
					</div>
				</div>
				<v-card class="ma-4 rounded-lg">
					<div class="d-flex flex-row pl-8 pb-2 pt-4">
						<v-icon
							v-if="days === 0 && hours === 0 && mins === 0 && secs === 0"
							class="px-4"
							>mdi-clock-outline</v-icon
						>
						<div class="font-weight-light">
							Sale ends {{ countDownDate.toGMTString() }} +8
						</div>
					</div>
					<div
						v-if="days != 0 || hours != 0 || mins != 0 || secs != 0"
						class="d-flex flex-row justify-lg-space-around py-2"
					>
						<div class="d-flex flex-column">
							<div class="text-h5 font-weight-bold">{{ days }}</div>
							<div>Days</div>
						</div>
						<div class="d-flex flex-column">
							<div class="text-h5 font-weight-bold">{{ hours }}</div>
							<div>Hours</div>
						</div>
						<div class="d-flex flex-column">
							<div class="text-h5 font-weight-bold">{{ mins }}</div>
							<div>Minutes</div>
						</div>
						<div class="d-flex flex-column">
							<div class="text-h5 font-weight-bold">{{ secs }}</div>
							<div>Seconds</div>
						</div>
					</div>
					<v-divider />
					<div class="grey lighten-5 d-flex flex-column pl-8 pa-2">
						<div class="pt-2 font-weight-light">Current Price</div>
						<div class="d-flex flex-row align-center">
							<v-tooltip top nudge-bottom="10px">
								<template #activator="{ on, attrs }">
									<v-hover v-slot="{ hover }">
										<v-btn
											v-bind="attrs"
											:style="{ color: hover ? 'black' : 'grey' }"
											icon
											v-on="on"
										>
											<v-icon size="30px">mdi-cards-diamond</v-icon>
										</v-btn>
									</v-hover>
								</template>
								<span>ETH</span>
							</v-tooltip>
							<div class="text-h4 pl-2 font-weight-bold">0.02</div>
							<div class="pl-2 font-weight-light">($40.92)</div>
						</div>
						<div
							:class="
								$vuetify.breakpoint.mdAndDown
									? 'py-2 d-flex flex-column'
									: 'py-2 d-flex flex-row'
							"
						>
							<v-btn
								color="primary"
								depressed
								class="text-capitalize rounded-lg"
								:width="$vuetify.breakpoint.mdAndDown ? '100%' : '40%'"
							>
								<v-icon>mdi-wallet</v-icon>
								<div class="pl-2">Buy now</div>
							</v-btn>
							<v-btn
								color="primary"
								depressed
								outlined
								:class="
									$vuetify.breakpoint.mdAndDown
										? 'text-capitalize rounded-lg'
										: 'text-capitalize ml-2 rounded-lg'
								"
								:width="$vuetify.breakpoint.mdAndDown ? '100%' : '40%'"
							>
								<v-icon>mdi-tag</v-icon>
								<div class="pl-2">Make offer</div>
							</v-btn>
						</div>
					</div>
				</v-card>
				<v-card class="ma-4 rounded-lg">
					<div class="d-flex flex-row pa-4 justify-space-between">
						<div class="d-flex flex-row">
							<v-icon size="25px">mdi-chart-timeline-variant</v-icon>
							<div class="text-h6 pl-2">Price History</div>
						</div>
						<v-btn icon @click="priceCardOn">
							<v-icon v-if="priceOn">mdi-chevron-up</v-icon>
							<v-icon v-else>mdi-chevron-down</v-icon>
						</v-btn>
					</div>
					<v-divider />
					<div v-if="priceOn" class="pa-4 font-weight-light grey lighten-5">
						Created by
						<span class="blue--text">BigShibaDoges</span>
						<pre>{{ photos }}</pre>
					</div>
				</v-card>
			</v-sheet>
			<v-card class="rounded-lg">
				<div class="d-flex flex-row pa-4">
					<v-icon size="25px">mdi-text-long</v-icon>
					<div class="h6 pl-2">Description</div>
				</div>
				<v-divider />
				<div class="pa-4 font-weight-light grey lighten-5">
					Created by
					<span class="blue--text">BigShibaDoges</span>
				</div>
				<v-divider />
				<div class="d-flex flex-row pa-4 justify-space-between">
					<div class="d-flex flex-row">
						<v-icon size="25px">mdi-label</v-icon>
						<div class="h6 pl-2">Properties</div>
					</div>
					<v-btn icon @click="propCardOn">
						<v-icon v-if="propOn">mdi-chevron-up</v-icon>
						<v-icon v-else>mdi-chevron-down</v-icon>
					</v-btn>
				</div>
				<v-divider />
				<div v-if="propOn" class="pa-4 font-weight-light grey lighten-5">Hello</div>
				<v-divider />
				<div class="d-flex flex-row pa-4 justify-space-between">
					<div class="d-flex flex-row">
						<v-icon size="25px">mdi-view-split-vertical</v-icon>
						<div class="h6 pl-2">About PloggVietNam</div>
					</div>
					<v-btn icon @click="aboutCardimaOn">
						<v-icon v-if="!aboutOn">mdi-chevron-down</v-icon>
						<v-icon v-else>mdi-chevron-up</v-icon>
					</v-btn>
				</div>
				<v-divider />
				<div v-if="aboutOn" class="pa-4 font-weight-light grey lighten-5">
					<v-img
						:src="image"
						contain
						width="100px"
						height="100px"
						style="float: left"
						class="ma-2"
					/>
					<p class="font-weight-bold">
						Trying to earn money on speculation NFTs. Our first steps 👉
						<a href="https://twitter.com/BlueNFTea">https://twitter.com/BlueNFTea</a>
					</p>
					<p>
						Lil ShibaDoges Club is a collection of 25,000 Unique NFTs, living on
						Ethereum blockchain. Lil ShibaDoges is a Meme collection (in terms of art)
						inspired by Shiba Inu Coin. They are all designed by our fabulous in-team
						designers to represent each of us. Each NFT is unique, but they are all
						made with love and have Crypto Spirit inside. Each Lil Shiba Doge
						possesses several traits: Nose, Hair, Eyes, Shoes, Jacket, Hand, Ears, and
						Fonts.
					</p>
					<v-divider />
					<p class="pt-3">
						Join us in <span class="blue--text">Discord</span>! #DAO mechanics will be
						launched.
					</p>
					<p>
						Ownership of Lil ShibaDoge NFT entitles you to receive discounts on our
						other collections.
					</p>
					<p>
						Write to us in the Discord and get a discount. Buy ShibaDoges and get your
						Perfect PFP!
					</p>

					<v-card
						height="35px"
						class="elevation-0 d-flex flex-row my-4"
						width="fit-content"
						outlined
					>
						<div
							v-for="(forum, index) in joinUs"
							:key="index"
							class="align-center d-flex justify-center"
							style="height: 100%"
						>
							<v-tooltip top nudge-bottom="10px">
								<template #activator="{ on, attrs }">
									<v-hover v-slot="{ hover }">
										<v-layout>
											<v-btn
												v-bind="attrs"
												:style="{ color: hover ? 'black' : 'grey' }"
												text
												:elevation="hover ? 8 : 0"
												v-on="on"
											>
												<v-icon>{{ forum.icon }}</v-icon>
											</v-btn>
										</v-layout>
									</v-hover>
								</template>
								<span> {{ forum.text }}</span>
							</v-tooltip>
							<v-divider vertical />
						</div>
					</v-card>
				</div>
				<v-divider />
				<div class="d-flex flex-row pa-4 justify-space-between">
					<div class="d-flex flex-row">
						<v-icon size="25px">mdi-ballot</v-icon>
						<div class="h6 pl-2">Details</div>
					</div>
					<v-btn icon @click="detailCardOn">
						<v-icon v-if="!detailOn">mdi-chevron-down</v-icon>
						<v-icon v-else>mdi-chevron-up</v-icon>
					</v-btn>
				</div>
				<v-divider />
				<div v-if="detailOn" class="pa-4 font-weight-light grey lighten-5">
					<div
						v-for="(detail, index) in details"
						:key="index"
						class="d-flex flex-row justify-space-between"
					>
						<div>{{ detail.material }}</div>
						<div
							v-if="detail.material === 'Contract Address'"
							class="blue--text font-weight-medium"
						>
							{{ detail.value }}
						</div>
						<div v-else class="font-weight-medium">{{ detail.value }}</div>
					</div>
				</div>
			</v-card>
		</v-sheet>
		<div v-if="$vuetify.breakpoint.mdAndDown"></div>
		<div v-else class="d-flex flex-column">
			<div class="pa-4 d-flex flex-row justify-space-between">
				<div class="pa-4 text-subtitle-2 blue--text">Lil ShibaDoges Club</div>
				<div style="position: relative">
					<v-card height="35px" class="elevation-0 d-flex flex-row" outlined>
						<div
							v-for="(button, index) in buttons"
							:key="index"
							class="align-center d-flex justify-center"
							style="height: 100%"
						>
							<v-tooltip top nudge-bottom="10px">
								<template #activator="{ on, attrs }">
									<v-hover v-slot="{ hover }">
										<v-layout>
											<v-btn
												v-if="button.script != 'Share' && button.script != 'More'"
												v-bind="attrs"
												:style="{ color: hover ? 'black' : 'grey' }"
												text
												:elevation="hover ? 8 : 0"
												v-on="on"
											>
												<v-icon>{{ button.icon }}</v-icon>
											</v-btn>
											<v-btn
												v-if="button.script === 'Share'"
												v-bind="attrs"
												:style="{ color: hover ? 'black' : 'grey' }"
												text
												:elevation="hover ? 8 : 0"
												v-on="on"
												@click="shareCardOn"
											>
												<v-icon>{{ button.icon }}</v-icon>
											</v-btn>
											<v-btn
												v-if="button.script === 'More'"
												v-bind="attrs"
												:style="{ color: hover ? 'black' : 'grey' }"
												text
												:elevation="hover ? 8 : 0"
												v-on="on"
												@click="moreCardOn"
											>
												<v-icon>{{ button.icon }}</v-icon>
											</v-btn>
										</v-layout>
									</v-hover>
								</template>
								<span>{{ button.script }}</span>
							</v-tooltip>
							<v-divider vertical />
						</div>
					</v-card>
				</div>
				<v-card
					v-if="shareOn"
					class="elevation-1 d-flex flex-column"
					width="fit-content"
					outlined
					style="position: absolute; right: 330px; top: 80px; z-index: 2"
				>
					<div v-for="(item, index) in share" :key="index" style="height: 100%">
						<v-hover v-slot="{ hover }">
							<v-btn
								text
								:elevation="hover ? 8 : 0"
								class="d-flex justify-end"
								block
								style="text-transform: none"
							>
								<v-img
									v-if="item.text != 'Embed Item'"
									:src="item.media"
									contain
									class="rounded-circle"
									width="20px"
									height="20px"
								/>
								<v-icon v-else>{{ item.media }}</v-icon>

								<div class="pl-2">{{ item.text }}</div>
							</v-btn>
						</v-hover>

						<v-divider />
					</div>
				</v-card>
				<v-card
					v-if="moreOn"
					class="elevation-1 d-flex flex-column"
					width="fit-content"
					outlined
					style="position: absolute; right: 270px; top: 80px; z-index: 2"
				>
					<div>
						<v-hover v-slot="{ hover }">
							<v-btn
								text
								:elevation="hover ? 8 : 0"
								class="d-flex justify-end"
								block
								style="text-transform: none"
							>
								<v-icon>mdi-flag</v-icon>
								<div class="pl-2">Report</div>
							</v-btn>
						</v-hover>
					</div>
				</v-card>
			</div>
			<div class="px-4 py-2 text-h5 font-weight-bold">Lil ShibaDoges #3669</div>
			<div class="px-4 py-2 text-subtitle-1 d-flex flex-row">
				<div>Owned by <span class="blue--text">BigShibaDoges</span></div>
				<div class="px-4 d-flex flex-row">
					<v-icon>mdi-eye</v-icon>
					<div class="px-2">4 views</div>
				</div>
				<div class="px-4 d-flex flex-row">
					<v-icon>mdi-heart</v-icon>
					<div class="px-2">{{ counter }} favorites</div>
				</div>
			</div>
			<v-card class="ma-4 rounded-lg">
				<div class="d-flex flex-row pl-8 pb-2 pt-4">
					<v-icon
						v-if="days === 0 && hours === 0 && mins === 0 && secs === 0"
						class="px-4"
						>mdi-clock-outline</v-icon
					>
					<div class="font-weight-light">
						Sale ends {{ countDownDate.toGMTString() }} +8
					</div>
				</div>
				<div
					v-if="days != 0 || hours != 0 || mins != 0 || secs != 0"
					class="d-flex flex-row justify-lg-space-around py-2"
				>
					<div class="d-flex flex-column">
						<div class="text-h5 font-weight-bold">{{ days }}</div>
						<div>Days</div>
					</div>
					<div class="d-flex flex-column">
						<div class="text-h5 font-weight-bold">{{ hours }}</div>
						<div>Hours</div>
					</div>
					<div class="d-flex flex-column">
						<div class="text-h5 font-weight-bold">{{ mins }}</div>
						<div>Minutes</div>
					</div>
					<div class="d-flex flex-column">
						<div class="text-h5 font-weight-bold">{{ secs }}</div>
						<div>Seconds</div>
					</div>
				</div>
				<v-divider />
				<div class="grey lighten-5 d-flex flex-column pl-8 pa-2">
					<div class="pt-2 font-weight-light">Current Price</div>
					<div class="d-flex flex-row align-center">
						<v-tooltip top nudge-bottom="10px">
							<template #activator="{ on, attrs }">
								<v-hover v-slot="{ hover }">
									<v-btn
										v-bind="attrs"
										:style="{ color: hover ? 'black' : 'grey' }"
										icon
										v-on="on"
									>
										<v-icon size="30px">mdi-cards-diamond</v-icon>
									</v-btn>
								</v-hover>
							</template>
							<span>ETH</span>
						</v-tooltip>
						<div class="text-h4 pl-2 font-weight-bold">0.02</div>
						<div class="pl-2 font-weight-light">($40.92)</div>
					</div>
					<div class="py-2 d-flex flex-row">
						<v-btn
							color="primary"
							depressed
							class="text-capitalize rounded-lg"
							width="40%"
						>
							<v-icon>mdi-wallet</v-icon>
							<div class="pl-2">Buy now</div>
						</v-btn>

						<v-btn
							color="primary"
							depressed
							outlined
							class="text-capitalize ml-2 rounded-lg"
							width="40%"
						>
							<v-icon>mdi-tag</v-icon>
							<div class="pl-2">Make offer</div>
						</v-btn>
					</div>
				</div>
			</v-card>
			<v-card class="ma-4 rounded-lg">
				<div class="d-flex flex-row pa-4 justify-space-between">
					<div class="d-flex flex-row">
						<v-icon size="25px">mdi-chart-timeline-variant</v-icon>
						<div class="text-h6 pl-2">Price History</div>
					</div>
					<v-btn icon @click="priceCardOn">
						<v-icon v-if="priceOn">mdi-chevron-up</v-icon>
						<v-icon v-else>mdi-chevron-down</v-icon>
					</v-btn>
				</div>
				<v-divider />
				<div v-if="priceOn" class="pa-4 font-weight-light grey lighten-5">
					Created by
					<span class="blue--text">BigShibaDoges</span>
					<pre>{{ photos }}</pre>
				</div>
			</v-card>
		</div>
	</v-sheet>
</template>

<script>
import { mapFields } from "vuex-map-fields"
import Player3DModel from "../../components/Player3DModel.vue"
export default {
	computed: {
		...mapFields("app", ["works"]),
	},
	components: { Player3DModel },

	data() {
		//const end = new Date("2022-05-17T10:30:30Z")
		return {
			image: "item.jpg",
			countDownDate: new Date("May 19, 2022 20:30:59"),
			counter: 0,
			days: 0,
			hours: 0,
			mins: 0,
			secs: 0,
			share: [
				{
					media: "plogg_logo.png",
					text: "Copy Link",
				},
				{
					media: "facebook.jpg",
					text: "Share on Facebook",
				},
				{
					media: "twitter.jpg",
					text: "Share to Twitter",
				},
				{
					media: "mdi-code-tags",
					text: "Embed Item",
				},
			],

			buttons: [
				{ icon: "mdi-reload", script: "Refresh metadata" },
				{ icon: "mdi-open-in-new", script: "View on" },
				{ icon: "mdi-share-variant", script: "Share" },
				{ icon: "mdi-dots-vertical", script: "More" },
			],
			shareOn: false,
			moreOn: false,
			propOn: true,
			aboutOn: false,
			detailOn: false,
			priceOn: true,
			joinUs: [
				{
					icon: "mdi-web",
					text: "Website",
				},
				{
					icon: "mdi-discord",
					text: "Discord",
				},
				{
					icon: "mdi-twitter",
					text: "Twitter",
				},
				{
					icon: "mdi-dots-vertical",
					text: "Other",
				},
			],
			details: [
				{ material: "Contract Address", value: "0x495...7b5e" },
				{ material: "Token ID", value: "499047853409808..." },
				{ material: "Token Standard", value: "ERC-1155" },
				{ material: "Blockchain", value: "Ethereum" },
				{ material: "Metadata", value: "Centralized" },
				{ material: "Creator Fees", value: "10%" },
			],
		}
	},
	created() {
		this.countDownTimer()
	},
	methods: {
		addFavorite() {
			this.counter++
		},
		countDownTimer() {
			// setInterval for running every second
			setInterval(() => {
				const now = new Date().getTime()
				this.timeLeft = this.countDownDate.getTime() - now
				if (this.timeLeft > 0) {
					this.days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24))
					this.hours = Math.floor(
						(this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					)
					this.mins = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60))
					this.secs = Math.floor((this.timeLeft % (1000 * 60)) / 1000)
				}
			}, 1000)
		},
		shareCardOn() {
			this.shareOn = !this.shareOn
			if (this.moreOn == true) {
				this.moreOn = false
			}
		},
		moreCardOn() {
			this.moreOn = !this.moreOn
			if (this.shareOn == true) {
				this.shareOn = false
			}
		},
		aboutCardOn() {
			this.aboutOn = !this.aboutOn
		},
		detailCardOn() {
			this.detailOn = !this.detailOn
		},
		priceCardOn() {
			this.priceOn = !this.priceOn
		},
		propCardOn() {
			this.propOn = !this.propOn
		},
	},
}
</script>

<style></style>
