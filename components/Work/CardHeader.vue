<template>
	<v-layout>
		<v-sheet width="100%" class="white--text header">
			<v-card-actions class="align-center inner-header flex">
				<v-card-text class="justify-center d-flex">
					<type-writer
						:type-array="typeArray"
						cursor-color="black"
						class-type-write="h3 font-weight-bold black--text"
					></type-writer>
				</v-card-text>
			</v-card-actions>

			<!--Waves Container-->
			<div>
				<svg
					width="100%"
					height="150"
					class="waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shape-rendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g class="parallax">
						<use
							xlink:href="#gentle-wave"
							x="48"
							y="0"
							:fill="
								$vuetify.theme.dark ? 'rgba(33, 35, 39,0.7)' : 'rgba(191, 196, 208,0.7)'
							"
						/>
						<use
							xlink:href="#gentle-wave"
							x="48"
							y="3"
							:fill="
								$vuetify.theme.dark ? 'rgba(33, 35, 39,0.5)' : 'rgba(191, 196, 208,0.5)'
							"
						/>
						<use
							xlink:href="#gentle-wave"
							x="48"
							y="5"
							:fill="
								$vuetify.theme.dark ? 'rgba(33, 35, 39,0.3)' : 'rgba(191, 196, 208,0.3)'
							"
						/>
						<use
							xlink:href="#gentle-wave"
							x="48"
							y="7"
							:fill="$vuetify.theme.dark ? 'rgba(33, 35, 39)' : 'rgba(191, 196, 208)'"
						/>
					</g>
				</svg>
			</div>
			<!--Waves end-->
		</v-sheet>
	</v-layout>
</template>

<script>
import TypeWriter from "../TypeWriter.vue"
export default {
	components: { TypeWriter },
	data: () => ({
		typeArray: ["Trinity", "Ploggvietnam", "3D Introduction"],
	}),
}
</script>

<style lang="scss" scoped>
.header {
	background: white;
}
.inner-header {
	height: 200px;
}

.waves {
	margin-bottom: -7px; /*Fix for safari gap*/
}

/* Animation */

.parallax > use {
	animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
	animation-delay: -2s;
	animation-duration: 7s;
}
.parallax > use:nth-child(2) {
	animation-delay: -3s;
	animation-duration: 10s;
}
.parallax > use:nth-child(3) {
	animation-delay: -4s;
	animation-duration: 13s;
}
.parallax > use:nth-child(4) {
	animation-delay: -5s;
	animation-duration: 20s;
}
@keyframes move-forever {
	0% {
		transform: translate3d(-90px, 0, 0);
	}
	100% {
		transform: translate3d(85px, 0, 0);
	}
}
</style>
