<template>
	<v-sheet>
		<template>
			<v-img max-height="500" src="/imgtext.jpg">
				<div class="py-16 ma-16">
					<v-card-title class="justify-start">
						<div class="h4 mx-13 ">
							{{ $t("title.1") }}
						</div>
					</v-card-title>

					<v-card-title class=" grey--text">
						<v-col :class="$vuetify.breakpoint.smAndDown
						? 'h6 font-weight-bold text-center pl-9'
						: 'h6 mx-12'">
							{{ $t("title.2") }}
						</v-col>
					</v-card-title>
				</div>
			</v-img>
		</template>

		<template>
			<div class="py-16 ma-16">
				<v-card-title class="justify-start">
					<div class="h4 mx-13 ">
						{{ $t("title.3") }}
					</div>
				</v-card-title>

				<v-card-title class=" black--text">
					<v-col cols="10" :class="$vuetify.breakpoint.smAndDown
					? 'h6 font-weight-bold text-center pl-9'
					: 'h6 mx-12'">
						{{ $t("title.4") }}
					</v-col>
				</v-card-title>
			</div>
		</template>

		<template>
			<div class="py-16 ma-16  mx-16 ">
				<v-card-title >
					<div class="h4 mx-16">
						{{ $t("title.5") }}
					</div>
				</v-card-title>
				<v-card-title v-for="(header, index) in headers" :key="index" >
					<div class="h6 mx-16">
						{{ header.text1 }}
					</div>
				</v-card-title>
		</div>
		</template>
		<template>
			<div class="py-16 ma-16  mx-16 ">
				<v-card-title >
					<div class="h4 mx-16">
						{{ $t("title.6") }}
					</div>
				</v-card-title>
				<v-card-title v-for="(head, index) in heads" :key="index" >
					<div class="h6 mx-16">
						{{ head.text2 }}
					</div>
				</v-card-title>
		</div>
		</template>



	</v-sheet>
</template>

<script>
export default {
	data() {
		return {
			headers: [
				{

					text1: this.$t("form.1"),

				},
				{
					text1: this.$t("form.2"),
				},
				{
					text1: this.$t("form.3"),
				},
				{
					text1: this.$t("form.4"),
				},
				{
					text1: this.$t("form.5"),
				},
				{
					text1: this.$t("form.6"),
				}
			],
			heads: [
				{

					text2: this.$t("form1.1"),

				},
				{
					text2: this.$t("form1.2"),
				},
				{
					text2: this.$t("form1.3"),
				},
				{
					text2: this.$t("form1.4"),
				}
			],
		}
	},

};
</script>

<style>

</style>
<i18n>{
    "en":{
		
	"title":{
		"1":"Hi, we are looking for you!",
		"2":"Plogg team always wants to bring working opportunities for creative, energetic, and enthusiastic young people. We wish to nurture young talents like you to devote their talents and wisdom to the development of the company as well as yourself. At Plogg Vietnam, you will be able to work with dynamic, enthusiastic young people with a great, comfortable, and creative working environment.",
		"3":"Why should you join us?",
		"4":"When joining Plogg team with us, you will be involved in a dynamic, joyful, enthusiastic, and creative working environment. The members of Plogg Vietnam are young people with a passion for information technology. At Plogg Vietnam, each individual contributes a part of their knowledge, creativity, and talent to the company to help the company grow. Joining us, you will experience a comfortable, fun, creative, and professional working environment. Not only work, but this is also a place where you can hone your knowledge and learn new things.",
		"5":"What you can get when you join us?",
		"6":"What you can get when you join us?"
	},
	"form":{
		"1":"Hi, we are looking for you!",
		"2":"Plogg team always wants ",
		"3":"Why should you join us?",
		"4":"When joining Plogg team with us, ",
		"5":"What you can get when you join us?",
		"6":"What you can get when you join us?"
	},
	"form1":{
		"1":"Software Developer (Fullstack)",
		"2":"3D Graphic Designer ",
		"3":"Manual QA Tester ",
		"4":"Internship "
		
	}
    },
    "fr":{
	"title":{
		"1":"Développement de logiciels",
		"2":"Les services de développement de logiciels vous offrent la possibilité d'externaliser l'ingénierie et l'assistance logicielles et d'obtenir des logiciels maintenables, percutants, sécurisés et rentables. Plogg Vietnam affirme avec confiance que nous avons les conditions, les ressources humaines et la capacité de soutenir votre entreprise dans le développement de logiciels pour réussir.",
		"3":"Conception graphique 3D",
		"4":"Plogg Vietnam utilise des outils techniques, notamment des logiciels d'infographie, pour produire des images extrêmement vives. Ainsi, recréant des objets physiques dans la vie tels que des maisons, des machines, des personnages... Certains domaines dans lesquels Plogg vn se spécialise sont la conception graphique 3D en architecture - construction - mobilier, design. Conception de jeux 3D,..."
		},
	"form":{
		"1":"Hi, we are looking for you!",
		"2":"Plogg team always wants ",
		"3":"Why should you join us?",
		"4":"When joining Plogg team with us, ",
		"5":"What you can get when you join us?",
		"6":"What you can get when you join us?"
	},"form1":{
		"1":"Software Developer (Fullstack)",
		"2":"3D Graphic Designer ",
		"3":"Manual QA Tester ",
		"4":"Internship "
		
	}
    }
}
</i18n>

