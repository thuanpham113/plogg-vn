<template>
	<v-sheet color:="white">
		<v-row>
			<v-img 
			    aspect-ratio="1" 
				data-aos="fade-right" 
				data-aos-duration="900" 
				v-if="$vuetify.breakpoint.mdAndUp" contain
				:max-width="$vuetify.breakpoint.smAndDown ? '20%' : '31%'"
				src="Strengthen.jpg"/>
			<v-col>
				<v-layout color="transparent" class="d-flex flex-column flex-md-row align-center py-5">
					<v-layout column 
						:style="$vuetify.breakpoint.smAndDown ? 'max-width: 100%' : 'max-width: 50%'" 
						:class="$vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text '">
						<v-col  cols="12" class="justify-center "
								data-aos="flip-left" 
								data-aos-duration="1000" >
							<div :class="
								$vuetify.breakpoint.smAndDown
									? 'h6 font-weight-bold text-center'
									: 'h4 font-weight-bold text-center'
							">
								{{ $t("title.1") }}
							</div>
						</v-col>

						<v-col 
							data-aos="flip-left" 
							data-aos-duration="1000"
							:cols="$vuetify.breakpoint.smAndDown ? '12' : '12'" class="d-flex justify-center ">
								<v-hover class=" " v-slot="{ hover }">
										<v-btn :class="
											$vuetify.breakpoint.smAndDown
											? 'rounded-lg white--text'
											: 'rounded-lg white--text'" 
												:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
												:height="$vuetify.breakpoint.smAndDown ? '40' : '55'"
												:to="localePath(`/JoinUsHere`)">
												<div class="font-weight-black h7">{{ $t("button.2") }}</div>
										</v-btn>
								</v-hover>
						</v-col>

						<v-col 
								cols="12"
								data-aos="flip-left" 
								data-aos-duration="1000"
								class="grey--text d-flex justify-center ">
								<div :class="
									$vuetify.breakpoint.smAndDown
										? 'mt-2  text-center'
										: 'subtitle-1'
								">
									{{ $t("title.2") }}
								</div>
						</v-col>

					</v-layout>
					<v-col>
						<v-row justify="center">
							<v-img 
								data-aos="fade-left" 
								data-aos-duration="900" 
								contain aspect-ratio="1"
								:max-width="$vuetify.breakpoint.smAndDown ? '30%' : ''" src="Strengthen2.jpg" 
								/>
							<v-img
								 data-aos="fade-right"
								 data-aos-duration="900" 
							 	 v-if="$vuetify.breakpoint.smAndDown"
								 contain aspect-ratio="1" 
								 :max-width="$vuetify.breakpoint.smAndDown ? '30%' : ''"
								 src="Strengthen.jpg"/>
						</v-row>
					</v-col>
				</v-layout>
			</v-col>
		</v-row>
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
		  "1":"Get start to strengthen your business ",
		  "2":"Tell us all you needed!"
		  },
		  "button":{
		  "2":"Collaboration here"
		  }
	  },
	  "fr": {
		  "title": {
		  "1":"Rester en contact",
		  "2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		  },
		  "button":{
		  "2":"Collaboration ici"
		  }
	  }
  }
  </i18n>
