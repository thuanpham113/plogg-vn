<template>
	<rely-layout-page>
		<v-card height="80" flat color="transparent"></v-card>
		<div class="text-center font-weight-bold text-sm-h6 text-md-h4 my-md-10">
			{{ $t("add") }}
		</div>

		<v-layout
			class="justify-md-space-around mx-16"
			:class="$vuetify.breakpoint.smAndDown ? 'flex-column align-center' : 'flex-wrap'"
			:column="$vuetify.breakpoint.smAndDown"
			>
			<v-sheet
				 v-for="(form, index) in forms"
				 :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'"
				 :key="index"
				 >
				<v-card rounded="xl" class="ma-5 ">
					<v-img class="pl-5" :src="form.imgs" />
				</v-card>
				<v-card
					elevation="0"
					rounded="xl"
					class="text-center"
					>
					<v-card-text class="text-h6 black--text font-weight-bold" v-if="form.texts">
							{{ form.key }}
						<div class="subtitle-1 grey--text" v-if="form.text1">
							{{ form.text1 }}
						</div>
					</v-card-text>
				</v-card>
			</v-sheet>
		</v-layout>

		<v-col class="d-flex justify-center">
			<v-hover v-slot="{ hover }">
				<v-btn
					class="rounded-lg white--text"
					:color="hover ? 'grey' : 'cyan lighten-3'"
					:height="$vuetify.breakpoint.smAndDown ? '30' : '60'" :to="localePath(`/Collaborate`)">
						<div>{{ $t("button") }}</div>
				</v-btn>
			</v-hover>
		</v-col>
		<v-col class="grey--text d-flex justify-center">
			<div class="text-subtitle-1">
				{{ $t("text") }}
			</div>
		</v-col>
	</rely-layout-page>
</template>

<script>
export default {
	name: "AdminsPage",
	data() {
		return {
			forms: [
				{
					key: this.$t("form1.banking"),
					imgs: "/Industries/bank1.jpg",
					texts: this.$t("form1.banking"),
					text1: this.$t("form1.text1s"),
				},
				{
					key: this.$t("form2.healthcare"),
					imgs: "/Industries/bank4.jpg",
					texts: this.$t("form2.healthcare"),
					text1: this.$t("form2.text1s"),
				},
				{
					key: this.$t("form1.retail"),
					imgs: "/Industries/bank2.jpg",
					texts: this.$t("form1.retail"),
					text1: this.$t("form1.text2s"),
				},
				{
					key: this.$t("form2.marketing"),
					imgs: "/Industries/bank5.jpg",
					texts: this.$t("form2.marketing"),
					text1: this.$t("form2.text2s"),
				},
				{
					key: this.$t("form1.human"),
					imgs: "/Industries/bank3.jpg",
					texts: this.$t("form1.human"),
					text1: this.$t("form1.text3s"),
				},
				{
					key: this.$t("form2.customer"),
					imgs: "/Industries/bank6.jpg",
					texts: this.$t("form2.customer"),
					text1: this.$t("form2.text3s"),
				},
			]
		};
	},
	head() {
		return {
			title: this.$t("head"),
		};
	},
	methods: {},
};
</script>

<style>
.v-sheet--offset {
	top: -30px;
	position: relative;
}
</style>


<i18n>
{
	"en": {
		"form1":{

			"banking" :"Banking and Financial Service",
			"text1s": " We provide high-quality applications of technology such as cloud computing, mobile, and big data that contribute to transforming the real world into digital surfaces. By catching up with scientific and technological trends, we aim to improve quality to meet common standards in the banking sector.",

			"retail":"Retail",
			"text2s": "Currently, retail businesses have gradually shifted from traditional stores to online sales. Advanced techonology will bring interactive, convenient and satisfying shopping experiences that attract and keep your buyers for life. PloggVietnam offer you the tools to create that miracle.",

			"human":"Human Resources",
			"text3s":"Technology will help business organizations improve their HR department's time management methods and subsequently improve work efficiency. Website-based technology is also being widely used for most common operations in human resource management such as timekeeping, salary calculation, employee information management,..."

		},
		"form2":{

			"healthcare": "Healthcare",
			"text1s" : "With the development of IT, the medical professionals can adapt and utilize newest scientific findings without geograhical constraints. IT also makes it convenient for users to monitor health, such as employing analysis tools to reduce the errors in drug use, and to provide timely warnings of health issues.",

			"marketing":"Marketing",
			"text2s" : "Technology has always played a crucial role in the marketing industry. Along with designing authentic websites, we provide various IT systems such as CRM, Data Warehouses CMS, Big Data, and Marketing Automation. These services will easily benefit any marketing strategies you have.",

			"customer":"Customer Services",
			"text3s" : "For customer service, IT is one of the best solutions that support businesses to quickly reach customers, capture customer's value, and drive customer satisfaction. We provide essential services to assist businesses in this. Working with us, you will have the advantages of getting closer to your customers at a low cost, delivering better customer results and increasing customer retention."

		},
		"add": "We Are the Big Players in Technology Services for Your Field",
		"button":"Collaboration here",
		"text":"Tell us all you needed!"
	},
	"fr": {
		"form1":{
			"banking" :"Service bancaire et financier",
			"text1s": " Nous fournissons des applications technologiques de haute qualité telles que le cloud computing, le mobile, le big data,... qui contribuent à transformer tout le monde réel en composite numérique. De là, créer de l'efficacité économique, rattraper les tendances scientifiques et technologiques, améliorer la qualité pour répondre aux normes communes dans le secteur bancaire.",

			"retail":"Détail",
			"text2s": "CActuellement, les commerces de détail se tournent progressivement vers la tendance des ventes en ligne. Le développement de la technologie apporte des expériences authentiques aux gens, créant commodité et satisfaction. Et Ploggvn vous donnera tous les outils pour créer ce miracle.",

			"human": "Ressources humaines",
			"text3s": "La technologie aidera les entreprises à améliorer les méthodes de gestion du temps de leur service RH et, par la suite, à améliorer l'efficacité du travail. La technologie basée sur le site Web est également largement utilisée pour les opérations les plus courantes dans la gestion des ressources humaines telles que la comptabilisation du temps, le calcul des salaires, la gestion des informations sur les employés, etc.."
		},
		"form2":{
			"healthcare": "Soins de santé",
			"text1s" : "Avec le développement de l'informatique, la profession médicale peut rapidement absorber de nouvelles connaissances sur l'humanité sans se soucier de la distance géographique. L'informatique facilite la surveillance de la santé des utilisateurs, comme l'intégration d'outils d'analyse pour réduire le taux d'erreur dans l'utilisation des médicaments, l'orientation de la surveillance préventive ou l'avertissement d'événements inhabituels sur le doute de la santé.",

			"marketing":"Commercialisation",
			"text2s" : "La technologie a commencé à jouer un rôle crucial dans la fonction marketing. Nous fournissons des systèmes informatiques tels que CRM, Data Warehouses et CMS. Nous fournissons également le Big Data, l'automatisation du marketing et l'amélioration de la conception de sites Web. Ils contribuent au bénéfice des futures stratégies marketing.",

			"customer":"Service client",
			"text3s" : "Pour le service client, l'informatique est l'une des meilleures solutions qui aide les entreprises à atteindre rapidement les clients, à capturer la valeur du client et à stimuler la satisfaction client. Nous fournissons des services essentiels pour aider les entreprises dans ce domaine. En travaillant avec nous, vous aurez les avantages de vous rapprocher de vos clients à moindre coût, d'obtenir de meilleurs résultats clients et d'augmenter la fidélisation de la clientèle."
		},
		"add": "Nous sommes les grands acteurs des services technologiques pour votre domaine",
		"button": "Collaboration ici",
		"text": "Dites-nous tout ce dont vous aviez besoin !"
	}
}
</i18n>