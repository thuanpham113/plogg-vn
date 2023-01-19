<template>
	<v-sheet>
		<v-layout
			:class="$vuetify.breakpoint.smAndDown ? '' : 'py-5 px-16 mx-15'"
		>
			<about-us-text-item-vue/>
		</v-layout>

		<v-img
			data-aos="flip-up"
			data-aos-duration="500"
			contain
			:width="$vuetify.breakpoint.smAndDown ? '100%' : '100vw'"
			src="/teamplogg.jpg"
		/>
		<v-sheet :class="$vuetify.breakpoint.smAndDown ? 'mx-5' : 'px-16'">
			<template>
				<div 
					v-for="(head, index) in heads"
					:key="index"
					:class="head.class"
				>
					<v-col :cols="head.col">
						<div>
							{{ head.text }}
						</div>
					</v-col>
				</div>
			</template>
			
			<about-us-title-item/>
			<about-us-slide-group/>
			<about-us-out-member/>

		</v-sheet>
	</v-sheet>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
	data() {
		return {
			heads: [
				{	
					text: this.$t("form.1"),
					class: this.$vuetify.breakpoint.smAndDown
						? 'h5 font-weight-bold text-center mt-16'
						: 'h3 front-weight-black mt-16',
				},
				{
					text: this.$t("form.2"),
					class: this.$vuetify.breakpoint.smAndDown
						? 'subtitle-1 grey--text text-center'
						: 'h6 grey--text',
				},
				{
					text: this.$t("form.3"),
					class: this.$vuetify.breakpoint.smAndDown 
						? 'h5 font-weight-bold text-center mt-16'
						: 'h3 front-weight-black mt-16',
				},
				{
					text: this.$t("form.4"),
					class: this.$vuetify.breakpoint.smAndDown ? 'subtitle-1 grey--text text-center' : 'h6 grey--text',
					col: this.$vuetify.breakpoint.smAndDown ? 12 : 8,
				},
			],
		};
	},
	

	mounted() {
		AOS.init();
	},
};
</script>

<style lang="scss">
.left-side {
	float: right;
	width: 50%;
	height: 50%;
}
</style>

<i18n>
   {
       "en": {
        
            "form":{
                "1":"We are Plogg Team!",
                "2":"We are relentlessly working to bring you the most suitable software solutions. We always believe that a successful product will not only solve the customers’ initial concerns but also contributes to the advancement of their businesses. Functional products, satisfied customers, and flourishing businesses are our company’s missions and ideals.",
                "3":"Our mission",
                "4":"We bring the most professional IT services to support businesses meet their success by creating the optional solution and providing high-quality technology to exceed customers' expectation."
            }
            
       },
       "fr": {
            "form":{
                "1":"Nous sommes l'équipe Plogg !",
                "2":"Nous travaillons toujours pour vous apporter les solutions logicielles les plus adaptées. Nous croyons toujours qu'un produit performant doit aider les clients à résoudre les problèmes actuels et, en outre, contribuer au développement de leurs activités. Des produits utiles, des clients satisfaits, des entreprises en croissance, sont notre feuille de route de service.",
                "3":"Notre mission",
                "4":"Nous apportons les services informatiques les plus professionnels pour aider les entreprises à réussir en créant la solution optionnelle et en fournissant une technologie de haute qualité pour dépasser les attentes des clients."
            }
       }

    }
</i18n>
