<template>
	<v-layout column>
		<v-card :height=" $vuetify.breakpoint.smAndDown ? '' : '80' " flat color="transparent"></v-card>
		<template>
			
			<v-sheet class="d-flex flex-column flex-md-row align-center  ">
				<v-sheet
					:class="['d-flex flex-row-reverse my-16', $vuetify.breakpoint.smAndDown ? 'mt-5' : 'd-column-reverse align-center justify-end']">
					<div class=" px-16 d-flex flex-column">
						<div  :class="$vuetify.breakpoint.smAndDown ? 'justify-center d-flex flex-row' : 'd-flex flex-row '">
							<v-img :class="$vuetify.breakpoint.smAndDown ? 'mt-5' : ''" max-height="70" max-width="70"
								contain src="/3ddd.jpg" />
						
							<div class="grey--text "
							:class="
							$vuetify.breakpoint.smAndDown
								? 'h6  font-weight-bold text-center mt-11 '
								: 'h6 font-weight-bold py-4'
						">
								3D graphic design
						</div>
						</div>

						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'h6 font-weight-bold text-center py-2'
								: 'h4 font-weight-bold py-4'
						">
							{{ $t("title.1") }}
						</div>

						<div :class=" $vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'h6 py-2' ">
							{{ $t("title.2") }}
						</div>
						<div
							:class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center py-6' : 'd-flex justify-start w-100 pt-5'">
							<v-hover class="" v-slot="{ hover }">
								<v-btn 
								:class="$vuetify.breakpoint.smAndDown ? 'rounded-lg white--text' : 'rounded-lg white--text'"
			 					:color="hover ? 'grey darken-1' : 'cyan lighten-3'" :height="$vuetify.breakpoint.smAndDown ? '45' : '55'">
								<div class="font-weight-black h7">{{ $t("button.2") }}</div>
								</v-btn>
							</v-hover>
						</div>
					</div>
				</v-sheet>

				<v-col :cols="$vuetify.breakpoint.smAndDown ? '' : '6'">
					<v-img calss="" aspect-ratio="2" src="/Build1.jpg"> </v-img>
				</v-col>
			</v-sheet>
		</template>
<template>
		<v-card-title class="justify-center">
			<div :class=" $vuetify.breakpoint.smAndDown ? 'h6 font-weight-bold text-center mx-7 py-1' : 'h5   font-weight-bold font-weight-medium' ">
				{{ $t("title.3") }}
			</div>
		</v-card-title>
		<div class="justify-center">
			<div 
			:class=" $vuetify.breakpoint.smAndDown ? 'subtile-1 text-center  pa-5 py-1' : 'h6 text-center grey--text ma-16'">			
				{{ $t("title.4") }}
			</div>
		</div>
	</template>



	<v-sheet>
			<div :class=" $vuetify.breakpoint.smAndDown ? 'h6 text-center font-weight-bold py-12' : ' h5 font-weight-bold  text-center'" >{{ $t("title.5") }}</div>
	
		<v-layout :class=" $vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : 'py-12 '" style="max-width: 90%" mx-16 >
			<v-col :cols=" $vuetify.breakpoint.smAndDown ? '12' : ' 6'" >

				<v-img aspect-ratio="1" src="/Build2.jpg" />
			</v-col>
			<v-col :class=" $vuetify.breakpoint.smAndDown ? '' : ' justify-center ma-16 py-14 '"  >
				<div :class=" $vuetify.breakpoint.smAndDown ? 'h6 cyan--text  font-weight-bold text-center mt-16' : ' h5 cyan--text  font-weight-bold text-center mt-16 '">
					{{ $t("title.6") }}
				</div>
				<div :class=" $vuetify.breakpoint.smAndDown ? 'subtile-1 text-center grey--text py-5' : ' h6 text-center grey--text py-5 '">
					{{ $t("title.7") }}
				</div>
			</v-col>
		</v-layout>
	</v-sheet>
	</v-layout>
</template>

<script>
export default {
	layout: "hero",
};
</script>

<style>

</style>

<i18n>
{
	"en": {
		"title":{
			"1" : "We build designs that build your world",
			"2" : "Design is an ever-evolving combination of function, class, and elegance. We provides a distinctive and impressive look for your business. With the help of the Plogg Vietnam's website design services, you may realize any concept into a fruitful endeavor. ",
			"3" : "OUR CREATIVE 3D GRAPHIC DESIGN SERVICES",
			"4" : "Plogg Vietnam uses modern technologies along with a professional 3D design team to turn ordinary paper sketches and files into vivid, movable 3D graphics, creating the most realistic feeling. to the user. Innovative, automated, and movable 3D models are a useful tool for businesses in capturing the attention of their customers. We provide 3D graphic design services for games, architecture, etc.",
			"5" : "OUR ACHIEVEMENTS",
			"6" : "Synode Interactive 3D Assembly Instructions",
			"7" : "Synode helps you display step-by-step 3D instructions to your clients directly on your website and/or our app"
        },
        "button":{
        	"2" : "Contact us"
        },
		"icon":{
			"1" : "3D graphic design"
		}

	},
	"fr": {
		"title": {
			"1":"Nous construisons des conceptions qui construis ton monde",
			"2":"Le design est une combinaison en constante évolution de fonction, de classe et d'élégance. Nous fournissons un look distinctif et impressionnant pour votre entreprise. Avec l'aide des services de conception de sites Web de Plogg Vietnam, vous pouvez concrétiser n'importe quel concept en une entreprise fructueuse.",
			"3":"NOS SERVICES DE CONCEPTION GRAPHIQUE 3D CRÉATIVE",
			"4":"Plogg Vietnam utilise des technologies modernes ainsi qu'une équipe de conception 3D professionnelle pour transformer des croquis et des fichiers papier ordinaires en graphiques 3D vifs et mobiles, créant ainsi la sensation la plus réaliste. à l'utilisateur. Les modèles 3D innovants, automatisés et mobiles sont un outil utile pour les entreprises pour capter l'attention de leurs clients. Nous fournissons des services de conception graphique 3D pour les jeux, l'architecture, etc.",
			"5":"NOS RÉALISATIONS",
			"6":"Instructions de montage Synode Interactive 3D",
			"7":"Synode vous aide à afficher des instructions 3D étape par étape à vos clients directement sur votre site Web et/ou notre application"
        },
		"button":{
        "2":"Contactez-nous"
        },
		"icon":{
			"1":"Conception graphique 3D"
		}

	}
}
</i18n>
