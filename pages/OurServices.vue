<template>
	<v-sheet class="mt-10">
		<div data-aos="flip-left" data-aos-offset="120">
			<div class="font-weight-bold text-center" :class="$vuetify.breakpoint.smAndDown ? 'h6' : 'h4'">
				{{ $t("title") }}
			</div>
		</div>
		<service-item-card v-for="(header, index) in headers" :key="index" :title="header.text1" :aos="header.aos"
			:easing="header.easing">
			<template v-if="header.float === 'right'">
				<v-img contain aspect-ratio="1" :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
					:src="header.img" />
				<v-col md="8">
					<div :class="
						$vuetify.breakpoint.smAndDown
							? 'text-center subtitle-2'
							: 'h6 ma-16  py-16 '
					">
						{{ header.text2 }}
					</div>
				</v-col>
			</template>
			<template v-else>
				<v-col md="8">
					<div :class="
						$vuetify.breakpoint.smAndDown
							? 'text-center subtitle-2'
							: 'h6 ma-16  py-16 '
					">
						{{ header.text2 }}
					</div>
				</v-col>
				<v-img contain aspect-ratio="1" :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
					:src="header.img" />
			</template>
		</service-item-card>
		<template>
			<v-col data-aos="fade-up" :cols="$vuetify.breakpoint.smAndDown ? '12' : '12'" class="d-flex justify-center">
				<v-hover v-slot="{ hover }">
					<v-btn class="rounded-lg white--text" :color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						:height="$vuetify.breakpoint.smAndDown ? '40' : '55'" :to="localePath(`/SalesTeam`)">
						<div class="text-md-h6 text-sm-h8">{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</v-col>
		</template>
	</v-sheet>
</template>

<script>
import AOS from "aos";

export default {
	data() {
		return {
			headers: [
				{
					img: "/OurServices/service.jpg",
					text1: this.$t("form1.1"),
					text2: this.$t("form1.2"),
					aos: "fade-left",
				},
				{
					img: "/OurServices/service1.jpg",
					text1: this.$t("form1.3"),
					text2: this.$t("form1.4"),
					float: "right",
					aos: "fade-right",
					easing: "linear",
				},
				{
					img: "/OurServices/service2.jpg",
					text1: this.$t("form2.1"),
					text2: this.$t("form2.2"),
					aos: "fade-left",
				},
				{
					img: "/OurServices/service6.jpg",
					text1: this.$t("form2.3"),
					text2: this.$t("form2.4"),
					float: "right",
					aos: "fade-right",
					easing: "linear",
				},
				{
					img: "/OurServices/service4.jpg",
					text1: this.$t("form3.1"),
					text2: this.$t("form3.2"),
					aos: "fade-left",
				},
				{
					img: "/OurServices/service5.jpg",
					text1: this.$t("form3.3"),
					text2: this.$t("form3.4"),
					float: "right",
					aos: "fade-right",
					easing: "linear",
				},
			],
		};
	},
	mounted() {
		setTimeout(function () {
			AOS.init({
				once: true,
			});
		}, 50);


	},
};
</script>
<i18n>
{
	  "en":{
		  "title" : "Hi, what services are you looking for?",
		  "button":{
			"2": "Request our services"
			},

		  "form1":{
			  "1" : "Backend As A Serivce",
			  "2" : "A cloud service model allows developers to operate behind-the-scenes aspects of a website or an application on a flexible and transferrable infrastructure. Plogg Vietnam provide pre-written software for activities that take place on servers, such as user authentication, database management, remote updating, and push notifications, as well as cloud storage and hosting.",
			  "3" : "Hosting",
			  "4" : "To build and operate a website, hosting is definitely indispensable. This is a vital component for building functional and effective websites. Plogg Vietnam provides hosting services with the desire to help customers successfully create a website from the beginning to the last step."
		  },
			"form2":{
			  "1" : "Software development",
			  "2" : "Software development services allow the smooth operation of software engineering, as well as maintains the impact, security, and cost-effectiveness of the software. Plogg Vietnam confidently affirms that we have the conditions, human resources, and capabilities to profoundly support your business in software development.",
			  "3" : "3D graphics design",
			  "4" : "Plogg Vietnam uses technical tools, especially computer graphics software, to produce extremely vivid images. Thereby, recreating physical objects in life such as houses, machines, characters... Some areas that Plogg vn specializes in are 3D graphic design in architecture - construction - furniture, design. 3D game design,..."
		  },
		  "form3":{
			  "1" : "Digital Transformation",
			  "2" : "Planning and carrying out a specific business strategy for digital adoption is the process of 'digital transformation.' Medium-sized and large businesses collaborate with us to identify areas for process optimization and to start the digital transformation of their businesses.",
			  "3" : "Data & Analytics",
			  "4" : "Building an infrastructure for data aggregation, analysis, and reporting is what data analytics entails. Plogg Vietnam, a professional provider of data analytics services, offers specialized business analytics solutions to meet both simple and complicated needs."
		  }

	  },
	  "fr":{
		  "title" : "Bonjour, quels services recherchez-vous?",
		  "button":{
						"2" : "Sollicitez nos services"
					 },

		  "form1":{
			  "1" : "Backend en tant que service",
			  "2" : "Un modèle de service cloud permet aux développeurs d'exploiter les aspects cachés d'un site Web ou d'une application sur une infrastructure flexible et transférable. Plogg Vietnam fournit des logiciels pré-écrits pour les activités qui se déroulent sur des serveurs, telles que l'authentification des utilisateurs, la gestion de bases de données, la mise à jour à distance et les notifications push, ainsi que le stockage et l'hébergement dans le cloud.",
			  "3" : "Hébergement",
			  "4" : "Pour créer et exploiter un site Web, l'hébergement est définitivement indispensable. C'est un élément essentiel pour créer des sites Web fonctionnels et efficaces. Plogg Vietnam fournit des services d'hébergement avec le désir d'aider les clients à créer avec succès un site Web du début à la dernière étape."
		  },
			"form2":{
			  "1" : "Développement de logiciels",
			  "2" : "Les services de développement de logiciels permettent le bon fonctionnement de l'ingénierie logicielle, ainsi que le maintien de l'impact, de la sécurité et de la rentabilité du logiciel. Plogg Vietnam affirme avec confiance que nous avons les conditions, les ressources humaines et les capacités pour soutenir profondément votre entreprise dans le développement de logiciels.",
			  "3" : "Conception graphique 3D",
			  "4" : "Plogg Vietnam utilise des outils techniques, notamment des logiciels d'infographie, pour produire des images extrêmement vives. Ainsi, recréant des objets physiques dans la vie tels que des maisons, des machines, des personnages... Certains domaines dans lesquels Plogg vn se spécialise sont la conception graphique 3D en architecture - construction - mobilier, design. Conception de jeux 3D,..."
		  },
		  "form3":{
			  "1" : "Transformation numérique",
			  "2" : "La planification et la mise en œuvre d'une stratégie commerciale spécifique pour l'adoption du numérique constituent le processus de « transformation numérique ». Les moyennes et grandes entreprises collaborent avec nous pour identifier les domaines d'optimisation des processus et pour amorcer la transformation numérique de leurs activités.",
			  "3" : "Analyse des données",
			  "4" :"La création d'une infrastructure pour l'agrégation, l'analyse et la création de rapports de données est ce que l'analyse de données implique. Plogg Vietnam, un fournisseur professionnel de services d'analyse de données, propose des solutions d'analyse d'entreprise spécialisées pour répondre aux besoins simples et complexes."
		  }

	  }
}
</i18n>
