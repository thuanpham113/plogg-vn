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
			<template >
				<div data-aos="zoom-in" data-aos-duration="900">
					<div
					class="mt-16"
						:class="$vuetify.breakpoint.smAndDown
						?'text-center text-h4 font-weight-bold'
						:'text-h2 font-weight-bold'">
							{{ $t("ploggteam") }}
					</div>
					<v-col md="11"
						:class="$vuetify.breakpoint.smAndDown
						?'text-center subtitle-1 grey--text'
						:'text-h5 grey--text'">
							{{ $t("form.1") }}
					</v-col>
					</div>
			</template>

			<template>
				<div  data-aos="zoom-in" data-aos-duration="500">
					<div
					class="mt-16"
						:class="$vuetify.breakpoint.smAndDown
						?'text-h4 text-center font-weight-bold'
						:'text-h2 font-weight-bold'">
							{{ $t("ourmission") }}
					</div>
					<v-col md="9"
						:class="$vuetify.breakpoint.smAndDown
						?'text-center subtitle-1 grey--text'
						:'text-h5 grey--text'">
							{{ $t("form.2") }}
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
	mounted() {
		AOS.init({
  offset: 20,
});
		
		
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
			"ploggteam":"We are Plogg Team!",
			"ourmission":"Our mission",
            "form":{
                "1":"We are relentlessly working to bring you the most suitable software solutions. We always believe that a successful product will not only solve the customers’ initial concerns but also contributes to the advancement of their businesses. Functional products, satisfied customers, and flourishing businesses are our company’s missions and ideals.",
                "2":"We have the most professional IT services to support businesses in achieving their success. Byy creating the optional solution and providing high-quality technology, we aim to exceed customers' expectations in every possible way."
            }

       },
       "fr": {
			"ploggteam":"Nous sommes l'équipe Plogg!",
			"ourmission":"Notre mission",
            "form":{
                "1":"Nous travaillons toujours pour vous apporter les solutions logicielles les plus adaptées. Nous croyons toujours qu'un produit performant doit aider les clients à résoudre les problèmes actuels et, en outre, contribuer au développement de leurs activités. Des produits utiles, des clients satisfaits, des entreprises en croissance, sont notre feuille de route de service.",
                "2":"Nous avons les services informatiques les plus professionnels pour aider les entreprises à réussir. En créant la solution optionnelle et en fournissant une technologie de haute qualité, nous visons à dépasser les attentes des clients de toutes les manières possibles."
            }
       }

    }
</i18n>
