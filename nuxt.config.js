import en from "./locales/en"
import fr from "./locales/fr"
import colors from "vuetify/es5/util/colors"

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		css: ["~/assets/main.css"],
		titleTemplate: "%s - Plogg",
		title: "PloggVN",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [
			{ rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css" },
			{ rel: "icon", type: "image/x-icon", href: "/plogg_logo.ico" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Poppins:300,500,700",
			},
		],
		script: [
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" },
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js",
			},
			{ src: "/vendor/SplitText.js" },
		],
	},

	target: "server",
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		"@nuxtjs/vuetify",
	],

	target: 'static',
	router: {
		base: '/'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		"@nuxtjs/i18n",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: "https://62a87861ec36bf40bda69be4.mockapi.io",
	},

	i18n: {
		vueI18nLoader: true,
		locales: ["en", "fr"],
		defaultLocale: "en",
		vueI18n: {
			fallbackLocale: "en",
			messages: { en, fr },
		},
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ["~/assets/variables.scss"],
		treeShake: true,
		theme: {
			options: {
				customProperties: true,
			},
			dark: false,
			themes: {
				light: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {

	},
}
