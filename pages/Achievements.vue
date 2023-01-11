<template>
	<v-layout column>
		<v-sheet class="d-flex flex-column flex-md-row align-center py-16 mt-16">
			<v-layout pl-16 max-width="50%" column>
				<v-row>
					<v-col cols="2">
						<v-img src="/Rocket.jpg"/>
					</v-col>
					<v-col>
						<h2 class="grey--text mt-16">{{ $t("icon.1")}}</h2>
					</v-col>
				</v-row>

				<v-col class="ml-8">
					<div class="h4 font-weight-medium">{{ $t("title.1") }}</div>
				</v-col>

				<v-col class="grey--text ml-8">
					<div :class="$vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'h6 mb-11 '">
						{{ $t("title.2") }}
					</div>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '9'">
					<v-hover class=" " v-slot="{ hover }">
						<v-btn
							class="ml-10"
							rounded-lg
							height="35"
							href="https://www.youtube.com/"
							:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						>
							<div class="white--text">{{ $t("button.2") }}</div>
						</v-btn>
					</v-hover>
				</v-col>
			</v-layout>

			<v-col cols="6">
				<v-img aspect-ratio="2" src="/phuc1.jpg"/> 
			</v-col>
		</v-sheet>
		<v-layout justify-center>
			<div class="h4 font-weight-medium">
				{{ $t("title.3") }}
			</div>
		</v-layout>
		<v-layout justify-center>
			<div class="text-center grey--text ma-16">
				{{ $t("title.4") }}
			</div>
		</v-layout>
		<v-layout justify-center>
			<div class="h4 font-weight-medium">{{ $t("title.5") }}</div>
		</v-layout>
		<v-layout style="max-width: 80%" ml-16 pl-16>
			<v-col cols="4" class="ml-16">
			<v-img aspect-ratio="1" src="/imgp.jpg" />
			</v-col>
			<v-col cols="8">
				<div class="h5 cyan--text text-center mt-16">
					{{ $t("title.6") }}
				</div>
				<div class="text-center grey--text mt-6">
					{{ $t("title.7") }}
				</div>
			</v-col>
		</v-layout>
	</v-layout>
</template>

<script>
export default {
	layout: "hero",
};
</script>

<style></style>

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
			"1" : "Nous construisons des conceptions qui construis ton monde",
			"2" : "Le design est une combinaison en constante évolution de fonction, de classe et d'élégance. Nous fournissons un look distinctif et impressionnant pour votre entreprise. Avec l'aide des services de conception de sites Web de Plogg Vietnam, vous pouvez concrétiser n'importe quel concept en une entreprise fructueuse.",
			"3" : "NOS SERVICES DE CONCEPTION GRAPHIQUE 3D CRÉATIVE",
			"4" : "Plogg Vietnam utilise des technologies modernes ainsi qu'une équipe de conception 3D professionnelle pour transformer des croquis et des fichiers papier ordinaires en graphiques 3D vifs et mobiles, créant ainsi la sensation la plus réaliste. à l'utilisateur. Les modèles 3D innovants, automatisés et mobiles sont un outil utile pour les entreprises pour capter l'attention de leurs clients. Nous fournissons des services de conception graphique 3D pour les jeux, l'architecture, etc.",
			"5" : "NOS RÉALISATIONS",
			"6" : "Instructions de montage Synode Interactive 3D",
			"7" : "Synode vous aide à afficher des instructions 3D étape par étape à vos clients directement sur votre site Web et/ou notre application"
        },
		"button":{
        	"2" : "Contactez-nous"
        },
		"icon":{
			"1" : "Conception graphique 3D"
		}

	}
}
</i18n>
