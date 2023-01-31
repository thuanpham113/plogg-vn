<template>
	<v-sheet
		class="d-flex flex-column flex-md-row align-center pb-15 py-16">
		<v-img 
			data-aos="fade-right"
			data-aos-duration="900"
			class="px-16" 
			:max-width="$vuetify.breakpoint.smAndDown ? '80%' : '45%'" 
			contain src="/Software.png" />

		<div 
			data-aos="fade-right" 
			data-aos-duration="900" 
			:class="['d-flex flex-column',$vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text align-end w-55 px-16'
			]"
		>
			<h2  
				 data-aos="fade-right"
			     data-aos-duration="900"  
			 	 :class=" $vuetify.breakpoint.smAndDown
						? 'grey--text text-center py-6'
						: 'grey--text ' " >
				{{ $t("software") }}
				<v-icon size="50">mdi-xml</v-icon>
			</h2>

				<div 
					data-aos="fade-right"
				 	data-aos-duration="900" 
					:class=" 
					$vuetify.breakpoint.smAndDown
							? 'h6 font-weight-bold text-center '
							: 'h4 font-weight-bold text-end py-4'"
				>
					{{ $t("title.1") }}
				</div>

			<div 
				data-aos="fade-right" 
				data-aos-duration="900" 
				:class="
					$vuetify.breakpoint.smAndDown
						? 'mt-2  text-center'
						: 'h6 text-end py-2'
				"
			>
				{{ $t("title.2") }}
			</div>

			<div
			 data-aos="fade-right" 
			 data-aos-duration="900"  
			 class="d-flex justify-center  pt-5"
			 :class="$vuetify.breakpoint.smAndDown ? '' : 'w-90'">
				<v-hover v-slot="{ hover }">
					<v-btn
					    class="rounded-lg white--text"
						:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						:height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
						:to="localePath(`/StartDream`)"
						
					>
						<div class="font-weight-black h7">{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</div>
		</div>
	</v-sheet>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	data: () => ({
		selected: 1,
		headers: [
			{
				item1: "Product Registration",
				item2: "Allows your customers to register your products directly from the Synode player.",
			},
			{
				item1: "Product Registration",
				item2: "Allows users to rate the products they have just assembled. An invaluable source of data, accessible any time via the Synode Dahboard or our API !",
			},
			{
				item1: "Product Registration",
				item2: "At the end of the assembly guide, display cross-sell complimentary items to your customers to increase your sales. You can link each assembly animation with a list of products of your choice anytime.",
			},
		],
	}),
	methods: {
		change(index) {
			this.selected = index;
		},
	},
	mounted() {
		AOS.init();
		
	}
};
</script>

<style></style>

<i18n>
{
	"en": {
		"title":{
			"1":"You plan your dreams, we make it comes true",
			"2":"Plogg Vietnam provides the best software development that contribute to your success."
        },
        "button":{
        	"2":"Start your dream"
        },
		"software":"Software development"

	},
	"fr": {
		"title": {
			"1":"Rester en contact",
			"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
		"button":{
			"2":"Commencez votre rêve"
		},
		"software":"Développement de logiciels"
	}
}
</i18n>