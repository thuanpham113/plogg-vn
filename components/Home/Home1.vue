<template>
	<v-sheet
		 class="my-8"
		:class="$vuetify.breakpoint.smAndDown ? 'd-flex  flex-column   align-center':'d-flex align-center vh100'">
		<div 
			column
			:class=" $vuetify.breakpoint.smAndDown ? ' ' : 'black--text pl-16 w-50'"
		>
				<div  
				data-aos="fade-right"
				data-aos-duration="900"
				:class="
					$vuetify.breakpoint.smAndDown
					? 'h5 font-weight-bold text-center mt-8 '
					: 'h3 font-weight-bold mt-10 flex-column'
				">
				<div>
						{{ $t("title.1") }}
					</div>
				
			</div>
			<div  data-aos="fade-right"
				  data-aos-duration="900"
			 :class="
				$vuetify.breakpoint.smAndDown
				? 'py-6 text-center mx-2'
				: 'h6 mb-11 my-5'
			">
				{{ $t("title.2") }}
			</div>
			<div 
				data-aos="fade-right" 
				data-aos-duration="900" 
				class="d-flex justify-center">
					<v-hover class=" " v-slot="{ hover }">
						<v-btn
							class="rounded-lg white--text"
							:color="hover ? 'grey darken-1' : 'cyan lighten-10'"
							:height="$vuetify.breakpoint.smAndDown ? '40' : '55'"
							dense
							href="/AboutUs"
						>
							<div class="font-weight-black h7">{{ $t("button.1") }}</div>
						</v-btn>
					</v-hover>
			</div>
		</div>
		
		<v-img data-aos="fade-left" data-aos-duration="900" contain class="mr-15 pa-0" aspect-ratio="1" :width="$vuetify.breakpoint.smAndDown ? '70%' : '40%'" src="plogg_img.png"/>
	</v-sheet>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	mounted() {
		AOS.init();
		
	}
};
</script>

<style>
</style>

<i18n>
{
	"en": {
		"title":{
		"1":"Welcome to Plogg VietNam,",
		"2":"The best Information Technology Services company that you need to boost your success."
		},
		"button":{
		"1":"Who are we ?"
		}
	},
	"fr": {
		"title": {
		"1":"Bienvenue sur Plogg Vietnam,",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
		"button":{
		"1":"S'abonner"
		}
	}
}
</i18n>