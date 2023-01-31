<template>
	<v-sheet class="py-5  justify-center">
		<template 
>
			<v-img max-height="800" src="/background.jpg">
				<div 
				data-aos="fade-up"
     			data-aos-duration="900"
				>
				<v-card-title
					class="justify-start">
					<div
						class="h5 py-2 px-5 grey--text"
						:class="
							$vuetify.breakpoint.smAndDown
								? 'h6 font-weight-bold text-center pl-9'
								: 'h5 mx-12'
						"
					>
						{{ $t("title.1") }}
					</div>
				</v-card-title>
			</div>

				<v-col 
					data-aos="fade-up"
     				data-aos-duration="900"
					md="6"
					:class="
						$vuetify.breakpoint.smAndDown
							? 'h6 font-weight-bold white--text text-center'
							: 'h3 mx-16 white--text'
					"
				>
					{{ $t("title.2") }}
				</v-col>

				<v-col
					data-aos="fade-up"
					data-aos-duration="900"
					md="5"
					:class="
						$vuetify.breakpoint.smAndDown
							? 'subtitle-1 text-center white--text'
							: 'h6 mx-16 grey--text'
					"
				>
					{{ $t("title.3") }}
				</v-col>

				<v-col  
					data-aos="fade-up"
					data-aos-duration="900"
					:class="
						$vuetify.breakpoint.smAndDown
							? 'd-flex justify-center'
							: ''
					"
				>
					<v-hover v-slot="{ hover }">
						<v-btn
							:class="
								$vuetify.breakpoint.smAndDown
									? 'rounded-lg white--text d-flex justify-center'
									: 'rounded-lg black--text mx-16 mt-6 '
							"
							:height="
								$vuetify.breakpoint.smAndDown ? '50' : '55'
							"
							:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
							:to="localePath(`/JoinUsHere`)">

							<div>{{ $t("button") }}</div>
						</v-btn>
					</v-hover>
				</v-col>
			</v-img>
		</template>
		<template>
			<div
				data-aos="fade-up"
     			data-aos-duration="900"
				v-for="(header, index) in headers"
				:key="index"
				:class="header.class"
			>
				<div>
					{{ header.title1 }}
				</div>
			</div>
		</template>

		<v-img  
			data-aos="fade-up"
     		data-aos-duration="900" class="mt-16 mx-16" aspect-ratio="4" src="Grap.png" > </v-img>
		<template>
      <div 
	  		data-aos="fade-up"
     		data-aos-duration="900" class="mt-16 text-center font-weight-bold text-md-h4">
          {{$t("title.4")}}
      </div>

    </template>
	</v-sheet>

</template>


<script>

const gradients = [
	["#222"],
	["#42b3f4"],
	["red", "orange", "yellow"],
	["purple", "violet"],
	["#00c6ff", "#F0F", "#FF0"],
	["#f72047", "#ffd200", "#1feaea"],
];
import AOS from "aos";

export default {
	data() {
		return {
			width: 2,
			radius: 10,
			padding: 8,
			lineCap: "round",
			gradient: gradients[5],
			value: [9, 8, 3, 1, 3, 5, 7, 9],
			gradientDirection: "top",
			gradients,
			fill: false,
			type: "trend",
			autoLineWidth: false,
			headers: [
				{
					title1: this.$t("form1.1"),
					class: "text-center font-weight-bold text-md-h4 text-sm-h5 pt-16",
				},
				{
					title1: this.$t("form1.2"),
					class: "text-center text-md-h6",
				},
				{
					title1: this.$t("form1.3"),
					class: "text-center font-weight-bold text-md-h4 text-sm-h5 pt-16",
				},
				{
					title1: this.$t("form1.4"),
					class: "text-center text-md-h6",
				},
			],
			
		};
		
	},
	mounted() {
	setTimeout(function() {
    AOS.init({
        	once: true,
    	});
	}, 100);
	},	
};
</script>
<i18n>
  {
    "en":{
          "button":"Contact us",

          "title":{
                "1":"Software development",
                "2":"Visualize your dreams,we actualize them for you",
                "3":"A partnership with us means there will be no longer interruption to your business’ working flow and future success. By making the most of our services for production-ready bespoke software development, we convert new ideas into into profitable values.",
                "4":"TECHNOLOGIES THAT WE USE"
              },
          "form1":{
                "1":"OUR HIGH-QUALITY SOFTWARE DEVELOPMENT SERVICES",
                "2":"Plogg Vietnam offers full-cycle software development solutions that adapt smoothly to your project requirements and business demands, from IT strategy consultation, and thorough technological roadmaps to the end-to-end implementation of scalable solutions.",
                "3":"HOW DO WE IMPLEMENT?",
                "4":" We use practice the best procedures and development techniques on a daily basis to promptly implement cutting-edge technological solutions in an organized and methodical manner."
          }


      },
    "fr":{
          "button":"Contactez-nous",

          "title":{
                "1":"Développement de logiciels",
                "2":"Visualisez vos rêves,nous les actualisons pour vous",
                "3":"Un partenariat avec nous signifie qu'il n'y aura plus d'interruption du flux de travail et du succès futur de votre entreprise. En tirant le meilleur parti de nos services de développement de logiciels sur mesure prêts pour la production, nous transformons de nouvelles idées en valeurs rentables.",
                "4":"TECHNOLOGIES QUE NOUS UTILISONS"
                  },
          "form1":{
                "1":"Backend en tant que service",
                "2":"Plogg Vietnam propose des solutions de développement logiciel à cycle complet qui s'adaptent en douceur aux exigences de votre projet et aux exigences de votre entreprise, de la consultation en stratégie informatique et des feuilles de route technologiques approfondies à la mise en œuvre de bout en bout de solutions évolutives.",
                "3":"COMMENT METTONS-NOUS EN ŒUVRE ?",
                "4":"Nous utilisons quotidiennement les meilleures procédures et techniques de développement pour mettre en œuvre rapidement des solutions technologiques de pointe de manière organisée et méthodique."
              }

      }
  }
  </i18n>
