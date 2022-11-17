<template>
  <v-sheet  class="py-5 my-16 justify-center">
    <template>
      <v-img max-height="800" src="/pan1.jpg">
       
          <v-card-title class="justify-start">
            <div class="h5 py-2 px-5 grey--text" :class="$vuetify.breakpoint.smAndDown
            ? 'h6 font-weight-bold text-center pl-9'
            : 'h5 mx-12'">
              {{ $t("title.1") }}
            </div>
          </v-card-title>
     
          <v-col :cols="$vuetify.breakpoint.smAndDown ? '' : '6'"
            :class="$vuetify.breakpoint.smAndDown ? 'h6 font-weight-bold white--text text-center' : 'h3 mx-16 white--text'">
            {{ $t("title.2") }}
          </v-col>

          <v-col :cols="$vuetify.breakpoint.smAndDown ? '' : '5'"  
            :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 text-center white--text' : 'h6 mx-16 grey--text'">
            {{ $t("title.3") }}
          </v-col>
         
          <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '12'" 
          :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : 'd-flex justify-start'"  >
              <v-hover  v-slot="{ hover }">
                <v-btn 
                  :class=" $vuetify.breakpoint.smAndDown ? 'rounded-lg white--text d-flex justify-center' : 'rounded-lg black--text mx-16 mt-6 '" 
                  :height="$vuetify.breakpoint.smAndDown ? '50' : '55'" 
                  :color="hover ? 'grey darken-1' : 'cyan lighten-3'">
                  <div>{{ $t("button") }}</div>
                </v-btn>
              </v-hover>
            </v-col>
        </v-img>
    </template>
    <template>

			  <div  class="py-16 mx-16"  v-for="(header, index) in headers" :key="index">
          
            <v-card-title class="justify-center mt-16">
              <div 
              :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 text-center font-weight-bold' : 'text-center h5 mx-16 pa-5 '">
                {{ header.title1}}
              </div>
            </v-card-title>

            <div class=" black--text mt-5">
              <v-col   :class="$vuetify.breakpoint.smAndDown
              ? 'subtitle-1  text-center '
              : 'h6  text-center  mx-1'">
                {{ header.title2}}
              </v-col>
            </div>
			</div>
		</template>

    <v-img
          :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : ''"
          :class=" $vuetify.breakpoint.smAndDown ? '' : 'rounded-lg black--text mx-16 mt-6'" 
          class="rounded-xl"
          aspect-ratio="4"
          src="Group 14.png"
        ></v-img>
    <template>
    </template>

  </v-sheet>

</template>





<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  data() {
		return {
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [9, 8, 3, 1, 3, 5, 7, 9],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    headers: [
				{

					title1: this.$t("form1.1"),	
          title2: this.$t("form1.2"),

				},
				{
          title1: this.$t("form1.3"),
          title2: this.$t("form1.4"),
				}
			],
  }
	},

};
</script>
<i18n>
  {
    "en":{
          "button":"Contact us",
      
          "title":{
                "1":"Software development",
                "2":"You plan your dreams, we make it comes true",
                "3":"We assist our partners in hastening disruption in both their businesses and sectors. By making the most of our services for production-ready bespoke software development, they strategize new ideas and achieve genuine commercial value. " 
              },
          "form1":{
                "1":"OUR HIGH-QUALITY SOFTWARE DEVELOPMENT SERVICES",
                "2":"Plogg Vietnam offers full-cycle software development solutions that adapt smoothly to your project requirements and business demands, from IT strategy consultation and thorough technological roadmaps through the end-to-end implementation of scalable solutions.",
                "3":"HOW DO WE IMPLEMENT?",
                "4":"In order to quickly construct cutting-edge technological solutions in an organized and methodical manner, we use best practice procedures and development techniques as a basis."
          }
        

      },
    "fr":{
          "button":"Contactez-nous",
      
          "title":{
                "1":"Développement de logiciels",
                "2":"Vous planifiez vos rêves, nous les réalisons",
                "3":"Nous aidons nos partenaires à accélérer les perturbations dans leurs activités et leurs secteurs. En tirant le meilleur parti de nos services pour le développement de logiciels sur mesure prêts pour la production, ils élaborent de nouvelles idées et obtiennent une véritable valeur commerciale." 
                  },
          "form1":{
                "1":"Backend en tant que service",
                "2":"Un modèle de service cloud dans lequel les développeurs externalisent tous les aspects en coulisse d'une application Web ou mobile afin qu'ils n'aient qu'à écrire et à maintenir le frontend. Plogg Vietnam fournit des logiciels pré-écrits pour les activités qui se déroulent sur des serveurs, telles que l'authentification des utilisateurs, la gestion de bases de données, la mise à jour à distance et les notifications push, ainsi que le stockage et l'hébergement dans le cloud.",
                "3":"Hébergement",
                "4":"Pour créer et exploiter un site Web, l'hébergement est définitivement indispensable. Il s'agit d'un élément extrêmement important et l'une des conditions préalables pour commencer à créer un site Web réussi et efficace. Plogg Vietnam fournit des services d'hébergement avec le désir d'aider les clients à réussir un site Web du début à la dernière étape." 
              }
    
      }
  }
  </i18n>