<template>
	<v-sheet>
		<div class="py-12 ma-12">
			<v-card-title class="justify-center">
				<div class="h4 ma-12">
					{{ $t("title") }}
				</div>
			</v-card-title>
		</div>

		<template>
			<v-sheet v-for="(header, index) in headers" :key="index">
				<v-card-title class="justify-center ">
					<div class="h4">
						{{ header.text1 }}
					</div>
				</v-card-title>
				<v-layout style="max-width: 80%" px-16 ml-16>

					<v-img contain aspect-ratio="1" width="50%" :src="header.img1" />
					<v-col cols="8" class="py-16 ">
						<div class="h6 ma-16  py-16 ">
							{{ header.text1s }}
						</div>
					</v-col>
				</v-layout>

				<v-layout justify-center my-6>
					<div class="h4">
						{{ header.text2}}
					</div>
				</v-layout>
				<v-layout style="max-width: 80%" pl-16 ml-16>
					<v-col cols="7" class="py-16">
						<div class="h6 ma-16 py-16">
							{{ header.text2s }}
						</div>
					</v-col>
					<v-img contain aspect-ratio="1" width="50%" :src="header.img2" />
				</v-layout>
			</v-sheet>

		</template>
		<template >
			<v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '12'" class="d-flex justify-center ">
              <v-hover class=" " v-slot="{ hover }">
                <v-btn :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'rounded-lg white--text'
                    : 'rounded-lg white--text'
                " :color="hover ? 'grey darken-1' : 'cyan lighten-3'"
                  :height="$vuetify.breakpoint.smAndDown ? '20' : '85'" href="https://www.google.com/intl/vi/gmail/about/">
                  <div class="h6">{{ $t("button.2") }}</div>
                </v-btn>
              </v-hover>
            </v-col>
		</template>

	</v-sheet>
</template>

<script>
export default {
	data() {
		return {
			headers: [
				{
					img1: "/service.jpg",
					img2: "/service1.jpg",
					text1: this.$t("form1.1"),
					text1s:this.$t("form1.2"),
					text2: this.$t("form1.3"),
					text2s:this.$t("form1.4"),
				},
				{
					img1: "/service2.jpg",
					img2: "/service6.jpg",
					text1: this.$t("form2.1"),
					text1s:this.$t("form2.2"),
					text2: this.$t("form2.3"),
					text2s:this.$t("form2.4"),
					
				},
				{
					img1: "/service4.jpg",
					img2: "/service5.jpg",
					text1: this.$t("form3.1"),
					text1s:this.$t("form3.2"),
					text2: this.$t("form3.3"),
					text2s:this.$t("form3.4"),
					
				}
			],
		}
	},

};
</script>

<style>

</style>
<i18n>
{
    "en":{
		"title":"Hi, what services are you looking for?",
		"button":{
          "2":"Request our services"
          },

		"form1":{
			"1":"Backend As A Serivce",
			"2":"A cloud service model in which developers outsource all the behind-the-scenes aspects of a web or mobile application so that they only have to write and maintain the frontend. Plogg Vietnam provide pre-written software for activities that take place on servers, such as user authentication, database management, remote updating, and push notifications, as well as cloud storage and hosting.",
			"3":"Hosting",
			"4":"To build and operate a website, hosting is definitely indispensable. This is an extremely important component and one of the prerequisites for you to start building a successful and effective website. Plogg Vietnam provides hosting services with the desire to help customers successfully complete a website from the beginning to the last step." 
        },
      	"form2":{
			"1":"Software development",
			"2":"Software development services provide you the option to outsource software engineering and support and obtain maintainable, impactful, secure, and cost-effective software. Plogg Vietnam confidently affirms that we have the conditions, human resources, and ability to support your business in software development to achieve success.",
			"3":"3D graphics design",
			"4":"Plogg Vietnam uses technical tools, especially computer graphics software, to produce extremely vivid images. Thereby, recreating physical objects in life such as houses, machines, characters... Some areas that Plogg vn specializes in are 3D graphic design in architecture - construction - furniture, design. 3D game design,..." 
    	},
		"form3":{
			"1":"Digital Transformation",
			"2":"Planning and carrying out a specific business strategy for digital adoption is the process of 'digital transformation.' Medium-sized and large businesses collaborate with us to identify areas for process optimization and to start the digital transformation of their businesses.",
			"3":"Data & Analytics",
			"4":"Building an infrastructure for data aggregation, analysis, and reporting is what data analytics entails. Plogg Vietnam, a professional provider of data analytics services, offers specialized business analytics solutions to meet both simple and complicated needs." 
    	}
	
    },
	"fr":{
		"title":"Bonjour, quels services recherchez-vous?",
		"button":{
          "2":"Sollicitez nos services"
          },

		"form1":{
			"1":"Backend en tant que service",
			"2":"Un modèle de service cloud dans lequel les développeurs externalisent tous les aspects en coulisse d'une application Web ou mobile afin qu'ils n'aient qu'à écrire et à maintenir le frontend. Plogg Vietnam fournit des logiciels pré-écrits pour les activités qui se déroulent sur des serveurs, telles que l'authentification des utilisateurs, la gestion de bases de données, la mise à jour à distance et les notifications push, ainsi que le stockage et l'hébergement dans le cloud.",
			"3":"Hébergement",
			"4":"Pour créer et exploiter un site Web, l'hébergement est définitivement indispensable. Il s'agit d'un élément extrêmement important et l'une des conditions préalables pour commencer à créer un site Web réussi et efficace. Plogg Vietnam fournit des services d'hébergement avec le désir d'aider les clients à réussir un site Web du début à la dernière étape." 
        },
      	"form2":{
			"1":"Développement de logiciels",
			"2":"Les services de développement de logiciels vous offrent la possibilité d'externaliser l'ingénierie et l'assistance logicielles et d'obtenir des logiciels maintenables, percutants, sécurisés et rentables. Plogg Vietnam affirme avec confiance que nous avons les conditions, les ressources humaines et la capacité de soutenir votre entreprise dans le développement de logiciels pour réussir.",
			"3":"Conception graphique 3D",
			"4":"Plogg Vietnam utilise des outils techniques, notamment des logiciels d'infographie, pour produire des images extrêmement vives. Ainsi, recréant des objets physiques dans la vie tels que des maisons, des machines, des personnages... Certains domaines dans lesquels Plogg vn se spécialise sont la conception graphique 3D en architecture - construction - mobilier, design. Conception de jeux 3D,..." 
    	},
		"form3":{
			"1":"Transformation numérique",
			"2":"La planification et la mise en œuvre d'une stratégie commerciale spécifique pour l'adoption du numérique constituent le processus de la « transformation numérique ». Les moyennes et grandes entreprises collaborent avec nous pour identifier les domaines d'optimisation des processus et amorcer la transformation numérique de leurs activités.",
			"3":"Analyse des données",
			"4":"ưLa création d'une infrastructure pour l'agrégation, l'analyse et la création de rapports de données est ce que l'analyse de données implique. Plogg Vietnam, un fournisseur professionnel de services d'analyse de données, propose des solutions d'analyse d'entreprise spécialisées pour répondre aux besoins simples et complexes." 
    	}
	
    }
}
</i18n>
