<template>
	<v-app id="app" style="overflow:scroll">
		<v-app-bar
			elevation="60"
			elevate-on-scroll
			color="white"
			app
			flat
			clipped-left
			height="80"
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
		
		<v-main class="mt-16 pa-0">
			<v-contain class="pa-0">
				<Nuxt />
			</v-contain>
		</v-main>
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
	data () {
        return{
		drawer: false,
		lists: [
			{
				title: this.$t("list.1"),
				link: "/AboutUs",
			},
			{
				title: this.$t("list.2"),
				link: "/industries",
			},
			{
				title:this.$t("list.3"),
				link: "/OurServices",
			},
			{
				title: this.$t("list.4"),
				link: "/careers",
			},
		],
		texts: [
			{ title2: this.$t("title2") },
			{ img: "/Img_Contrach/us1.jpg", title: "Twitter" },
			{ img: "/Img_Contrach/us2.jpg", title: "Linkedin" },
			{ img: "/Img_Contrach/us3.jpg", title: "Instagram" },
			{ img: "/Img_Contrach/us4.jpg", title: "Gmail" },
			{ img: "/Img_Contrach/us5.jpg", title: this.$t("phone") },
		],
		heads: [
			{
				title: this.$t("title"),
				subtitle: this.$t("subtitle"),
				text: this.$t("careers"),
				sub:this.$t("sub"),
			},
			{
				title: this.$t("title1"),
				subtitle: this.$t("subtitle1"),
				text: this.$t("policy"),
			},
			{
				title: this.$t("support"),
				subtitle: this.$t("feedback"),
				text: this.$t("help"),
				sub:this.$t("sub1"),
			},
		],
	};
},
	methods: {
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
		},
		"list":{
			"1":"About us",
			"2":"Industries",
			"3":"Our services",
			"4":"Careers"
		},
		"title":"Company",
		"subtitle":"About us",
		"careers":"Careers",
		"sub":"Collaborate",
		"title1":"Legal",
		"subtitle1":"Terms of service",
		"policy":"Privacy policy",
		"support":"Support",
		"feedback":"Feedback",
		"help":"Help center",
		"sub1":"Our communtiny",
		"title2":"Contrach us",
		"phone":"Phone"
	},
	"fr": {
		"text":{
		"1":"Œuvres",
		"2":"Notions",
		"3":"Archive",
		"4":"Personnel",
    	"5":"2018 Plogg Viet Nam. Tous les droits sont réservés.",
    	"6":"Avez-vous des questions?"
		},
		"list":{
			"1":"À propos de nous",
			"2":"les industries",
			"3":"Nos services",
			"4":"Carrières"
		},
		"title":"Société",
		"subtitle":"À propos de nous",
		"careers":"Carrières",
		"sub":"Collaborer",
		"title1":"Juridique",
		"subtitle1":"Conditions d'utilisation",
		"policy":"Politique de confidentialité",
		"support":"Soutien",
		"feedback":"Retour",
		"help":"Centre d'aide",
		"sub1":"Notre communauté",
		"title2":"Contraignez-nous",
		"phone":"Téléphone fixe"
	}
}
</i18n>
