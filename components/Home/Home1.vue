<template>
	<v-sheet class="ma-6 z-10" max-width="100%">
		<h2
			class="h4 font-weight--bold d-flex align-center justify-center pt-6"
		>
			Technologies we use
		</h2>
		<v-slide-group v-model="current" class="pa-4" center-active show-arrows>
			<v-slide-item
				v-for="(header, index) in headers"
				:key="index"
				:class="$vuetify.breakpoint.smAndDown"
			>
				<v-card elevation="0" class="ma-4" height="200" width="200">
					<a :href="header.link">
						<v-img width="150" class="ma-7" :src="header.imgs" />
					</a>
				</v-card>
			</v-slide-item>
		</v-slide-group>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		headers: [
			{ imgs: "/slile1.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile2.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile3.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile4.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile5.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile1.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile2.jpg", link: "https://www.facebook.com/" },
			{ imgs: "/slile3.jpg", link: "https://www.stiq.com/" },
		],
		current: 1,
		interval: undefined,
		direction: 1,
		slideInterval: 2,
	}),
	created() {
		this.interval = setInterval(() => {
			if (
				this.current === 0 ||
				this.current === this.headers.length - 1
			) {
				this.direction *= -1;
				this.current += this.direction;
			} else {
				this.current += this.direction;
			}
		}, this.slideInterval * 1000);
	},
	beforeDestroy() {
		clearInterval(this.interval);
	},
};
</script>