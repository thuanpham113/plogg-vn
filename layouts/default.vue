<template>
	<v-app id="app" class="overflow-auto">
		<v-app-bar
			:elevation="scrolled ? '60' : ''"
			:color="scrolled ? 'white' : 'transparent'"
			app
			flat
			clipped-left
			height="80vh"
			class="d-flex flex-column"
		>
			<v-col
				class="d-flex align-center justify-md-center"
			>
				<nuxt-link to="/">
					<v-img
						width="105"
						contain
						src="/logo_ploggvn.svg"
					></v-img>
				</nuxt-link>
			</v-col>
			<v-col class="d-md-none align-center justify-end d-flex">
				<v-app-bar-nav-icon
					@click="drawer = true"
				/>
			</v-col>
			<div class="d-none align-center justify-space-around d-md-flex">
				<v-btn
					v-for="(list, index) in lists"
					:key="index"
					text
					plain
					:href="list.link"
					:to="localePath(list.link)"
				>
					<div class="h7 black--text font-weight-bold text-none">
						{{ list.title }}
					</div>
				</v-btn>
			</div>

			<v-col class="d-md-flex d-none justify-center align-center">
				<kq-button-locale color="black" />
			</v-col>
		</v-app-bar>
	
		<v-navigation-drawer
			v-model="drawer"
			color="white"
			fixed
			right	
			overflow-hidden
		>
		<v-card height="80" flat color="transparent"></v-card>
			<v-layout column>
				<v-btn
					v-for="(list, index) in lists"
					:key="index"
					class="my-1"
					:href="list.link"
					:to="localePath(list.link)"
					text
					height="8vh"
				>	
					<div class=" font-weight-bold">
						{{ list.title }}
					</div>
				</v-btn>
				<kq-button-locale
					height="10vh"
					color=" grey"
				/>
			</v-layout>
		</v-navigation-drawer>
		
		<v-main v-if="$vuetify.breakpoint.smAndDown">
			<v-container fluid class="pa-0" max-height="600">
				<Nuxt />
			</v-container>
		</v-main>
		<v-container v-else fluid class="pa-0" max-height="600">
			<Nuxt />
		</v-container>
		<v-footer
			color="white"
			class="white--text font-weight-light"
		>
			<v-layout column>
				<v-layout
					:column="$vuetify.breakpoint.smAndDown"
					:align-center="$vuetify.breakpoint.lgAndUp"
					justify-center
					class="ma-10"
				>
					<v-col
						:cols="
							$vuetify.breakpoint.smAndDown ? '9 ml-2 pb-10' : '3'
						"
					>
						<v-row v-for="(text, index) in texts" :key="index">
							<div class="black--text font-weight-bold h6">
								{{ text.title2 }}
							</div>
								<v-img
									max-width="30"
									contain
									:src="text.img"
								/>
							<v-col class="black--text">{{ text.title }} </v-col>
						</v-row>
					</v-col>

					<v-col
						v-for="(head, index) in heads"
						:key="index"
						cols="12"
						md="2"
						sm="5"
						class="d-flex flex-column pb-10"
						fill-height
					>
						<div class="mb-2 font-weight-bold black--text h7">
							{{ head.title }}
						</div>
						<div class="black--text">{{ head.subtitle }}</div>
						<div class="my-2 black--text">{{ head.text }}</div>
						<div class="black--text">{{ head.sub }}</div>
					</v-col>
				</v-layout>

				<v-divider />

				<v-col class="d-flex justify-start grey--text"
					>(C) Plogg Viet Nam 2022</v-col
				>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		scrolled: false,
		lists: [
			{
				title: "About us",
				link: "/AboutUs",
			},
			{
				title: "Industries",
				link: "/industries",
			},
			{
				title: "Our services",
				link: "/OurServices",
			},
			{
				title: "Careers",
				link: "/careers",
			},
		],
		texts: [
			{ title2: "Contrach us" },
			{ img: "/Img_Contrach/us1.jpg", title: "Twitter" },
			{ img: "/Img_Contrach/us2.jpg", title: "Linkedin" },
			{ img: "/Img_Contrach/us3.jpg", title: "Instagram" },
			{ img: "/Img_Contrach/us4.jpg", title: "Gmail" },
			{ img: "/Img_Contrach/us5.jpg", title: "Phone" },
		],
		heads: [
			{
				title: "Company",
				subtitle: "About us",
				text: "Careers",
				sub: "Collaborate",
			},
			{
				title: "Legal",
				subtitle: "Terms of service",
				text: "Privacy policy",
			},
			{
				title: "Support",
				subtitle: "Feedback",
				text: "Help center",
				sub: "Our communtiny",
			},
		],
	}),
	beforeMount() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (
				this.lastPosition < window.scrollY &&
				this.limitPosition < window.scrollY
			) {
				this.scrolled = true;
			}
			if (this.lastPosition > window.scrollY) {
				this.scrolled = false;
			}
			this.lastPosition = window.scrollY;
			this.scrolled = window.scrollY > 0;
		},
		goToHome() {
			this.$router.push("/pricing");
		},
	},
};
</script>
<style lang="scss" scoped>
.transition::after {
	background: white !important;
}
.v-app-bar {
	z-index: 100	
}
</style>


<i18n>
{
	"en": {
		"text":{
		"1":"Wosks",
		"2":"Concepts",
		"3":"Archive",
		"4":"Personal",
    	"5":"2018 Plogg Viet Nam. All rightddds reserved.",
    	"6":"Do you have any question?"
		}
	},
	"fr": {
		"text":{
		"1":"Œuvres",
		"2":"Notions",
		"3":"Archive",
		"4":"Personnel",
    	"5":"2018 Plogg Viet Nam. Tous les droits sont réservés.",
    	"6":"Avez-vous des questions?"
		}
	}
}
</i18n>
