<template>
	<rely-layout-page>
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
			"text1s": " Nous fournissons des applications technologiques de haute qualit?? telles que le cloud computing, le mobile, le big data,... qui contribuent ?? transformer tout le monde r??el en composite num??rique. De l??, cr??er de l'efficacit?? ??conomique, rattraper les tendances scientifiques et technologiques, am??liorer la qualit?? pour r??pondre aux normes communes dans le secteur bancaire.",

			"retail":"D??tail",
			"text2s": "CActuellement, les commerces de d??tail se tournent progressivement vers la tendance des ventes en ligne. Le d??veloppement de la technologie apporte des exp??riences authentiques aux gens, cr??ant commodit?? et satisfaction. Et Ploggvn vous donnera tous les outils pour cr??er ce miracle.",

			"human": "Ressources humaines",
			"text3s": "La technologie aidera les entreprises ?? am??liorer les m??thodes de gestion du temps de leur service RH et, par la suite, ?? am??liorer l'efficacit?? du travail. La technologie bas??e sur le site Web est ??galement largement utilis??e pour les op??rations les plus courantes dans la gestion des ressources humaines telles que la comptabilisation du temps, le calcul des salaires, la gestion des informations sur les employ??s, etc.."
		},
		"form2":{
			"healthcare": "Soins de sant??",
			"text1s" : "Avec le d??veloppement de l'informatique, la profession m??dicale peut rapidement absorber de nouvelles connaissances sur l'humanit?? sans se soucier de la distance g??ographique. L'informatique facilite la surveillance de la sant?? des utilisateurs, comme l'int??gration d'outils d'analyse pour r??duire le taux d'erreur dans l'utilisation des m??dicaments, l'orientation de la surveillance pr??ventive ou l'avertissement d'??v??nements inhabituels sur le doute de la sant??.",

			"marketing":"Commercialisation",
			"text2s" : "La technologie a commenc?? ?? jouer un r??le crucial dans la fonction marketing. Nous fournissons des syst??mes informatiques tels que CRM, Data Warehouses et CMS. Nous fournissons ??galement le Big Data, l'automatisation du marketing et l'am??lioration de la conception de sites Web. Ils contribuent au b??n??fice des futures strat??gies marketing.",

			"customer":"Service client",
			"text3s" : "Pour le service client, l'informatique est l'une des meilleures solutions qui aide les entreprises ?? atteindre rapidement les clients, ?? capturer la valeur du client et ?? stimuler la satisfaction client. Nous fournissons des services essentiels pour aider les entreprises dans ce domaine. En travaillant avec nous, vous aurez les avantages de vous rapprocher de vos clients ?? moindre co??t, d'obtenir de meilleurs r??sultats clients et d'augmenter la fid??lisation de la client??le."
		},
		"add": "Nous sommes les grands acteurs des services technologiques pour votre domaine",
		"button": "Collaboration ici",
		"text": "Dites-nous tout ce dont vous aviez besoin !"
	}
}
</i18n>