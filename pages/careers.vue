<template>
	<v-sheet>
		<template>
			<v-img max-height="800" src="/Round.jpg">
				<v-card :height=" $vuetify.breakpoint.smAndDown ? '' : '90' " flat color="transparent"></v-card>
				<div :class="$vuetify.breakpoint.smAndDown ? 'mx-5 py-5' : 'pt-16  ma-14'">
					<v-card-title :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-start'">
				<div :class="$vuetify.breakpoint.smAndDown
						? 'h6 font-weight-bold text-center '
						: 'h4 font-weight-bold mx-10'">
							{{ $t("title.1") }}
						</div>
					</v-card-title>

					<v-card-titse class=" grey--text">
						<v-col :class="$vuetify.breakpoint.smAndDown
						? 'subtitle-1 font-weight-bold text-center '
						: 'h6 mx-11'">
							{{ $t("title.2") }}
						</v-col>
					</v-card-titse>
				</div>
			</v-img>
		</template>
		<v-sheet class="px-16 ">

			<template>
				<div :class="$vuetify.breakpoint.smAndDown ? 'mx-5 py-5' : 'mx-10'">
					<div :class="$vuetify.breakpoint.smAndDown 
					? 'h6 text-center font-weight-bold' : 'h4  font-weight-bold pl-2 py-9'">
						{{ $t("title.3") }}
					</div>
					<v-sheet class=" black--text">
						<v-col :cols="$vuetify.breakpoint.smAndDown ? ' ' : '11'"
							:class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 text-center ' : 'h6 '">
							{{ $t("title.4") }}
						</v-col>
					</v-sheet>
				</div>
			</template>

			<template>
				<div :class="$vuetify.breakpoint.smAndDown ? ' py-5' : 'mx-10'">
					<div
						:class="$vuetify.breakpoint.smAndDown ? 'h6 text-center font-weight-bold' : 'h4 font-weight-bold py-10 '">
						{{ $t("title.5") }}
					</div>

					<v-sheet v-for="(header, index) in headers" :key="index"
						:class="$vuetify.breakpoint.smAndDown ? '' : 'justify-start'">
						<div :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 text-center  ' : 'h6  '">
							{{ header.text1 }}
						</div>
					</v-sheet>
				</div>
			</template>
			<template>
				<div :class="$vuetify.breakpoint.smAndDown ? 'mt-6 py-5' : 'mx-10'">

					<div :class="$vuetify.breakpoint.smAndDown
					? 'h6 font-weight-bold text-center '
					: 'h4 font-weight-bold py-10'">
						{{ $t("title.6") }}
					</div>
					<div v-for="(head, index) in heads" :key="index"
						:class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-start'">
						<div :class="$vuetify.breakpoint.smAndDown
						? 'subtitle-1 text-center '
						: 'h6 mt-2 '">
							{{ head.text2 }}
						</div>
					</div>
				</div>
			</template>
		</v-sheet>

		<div class="d-flex justify-center w-100 pt-5">
			<v-hover v-slot="{ hover }">
				<v-btn :class="
					$vuetify.breakpoint.smAndDown
						? 'rounded-lg white--text'
						: 'rounded-lg white--text'
				" :color="hover ? 'grey darken-1' : 'cyan lighten-3'" :height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
					:to="localePath(`/SalesTeam`)">
					<div class="font-weight-black h7">{{ $t("button") }}</div>
				</v-btn>
			</v-hover>
		</div>



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
		"1" : "Hi, we are looking for you!",
		"2" : "Plogg team always wants to bring working opportunities for creative, energetic, and enthusiastic young people. We wish to nurture young talents like you to devote their talents and wisdom to the development of the company as well as yourself. At Plogg Vietnam, you will be able to work with dynamic, enthusiastic young people with a great, comfortable, and creative working environment.",
		"3" : "Why should you join us?",
		"4" : "When joining Plogg team with us, you will be involved in a dynamic, joyful, enthusiastic, and creative working environment. The members of Plogg Vietnam are young people with a passion for information technology. At Plogg Vietnam, each individual contributes a part of their knowledge, creativity, and talent to the company to help the company grow. Joining us, you will experience a comfortable, fun, creative, and professional working environment. Not only work, but this is also a place where you can hone your knowledge and learn new things.",
		"5" : "What you can get when you join us?",
		"6" : "We are looking for..."
	},
	"form":{
		"1" : "You will be working in a great environment",
		"2" : "You will be free to exchange and share knowledge ",
		"3" : "You will have the opportunity to contact foreign companies",
		"4" : "You will have the opportunity to expand your networking ",
		"5" : "You will be enhanced spiritual value",
		"6" : "You will enjoy full benefits"
	},
	"form1":{
		"1" : "Software Developer (Fullstack)",
		"2" : "3D Graphic Designer ",
		"3" : "Manual QA Tester ",
		"4" : "Internship "
		
	},
	"button":"Click here to join us"
        
    },
    "fr":{
	"title":{
		"1" : "Salut, nous te cherchons !",
		"2" : "L'équipe de Plogg souhaite toujours offrir des opportunités de travail à des jeunes créatifs, énergiques et enthousiastes. Nous souhaitons encourager les jeunes talents comme vous à consacrer leurs talents et leur sagesse au développement de l'entreprise ainsi qu'à vous-même. Chez Plogg Vietnam, vous pourrez travailler avec des jeunes dynamiques et enthousiastes dans un environnement de travail agréable, confortable et créatif.",
		"3" : "Pourquoi devriez-vous nous rejoindre?",
		"4" : "En rejoignant l'équipe Plogg avec nous, vous serez impliqué dans un environnement de travail dynamique, joyeux, enthousiaste et créatif. Les membres de Plogg Vietnam sont des jeunes passionnés par les technologies de l'information. Chez Plogg Vietnam, chaque individu apporte une partie de ses connaissances, de sa créativité et de son talent à l'entreprise pour aider l'entreprise à se développer. En nous rejoignant, vous ferez l'expérience d'un environnement de travail confortable, amusant, créatif et professionnel. Non seulement le travail, mais c'est aussi un endroit où vous pouvez affiner vos connaissances et apprendre de nouvelles choses.",
		"5" : "Qu'est-ce que vous pouvez obtenir lorsque vous nous rejoignez?",
		"6" : "What you can get when you join us?"
		},
	"form":{
		"1" : "Vous travaillerez dans un super environnement",
		"2" : "Vous serez libre d'échanger et de partager vos connaissances ",
		"3" : "Vous aurez la possibilité de contacter des entreprises étrangères",
		"4" : "Vous aurez l'opportunité d'élargir votre réseau ",
		"5" : "Vous serez augmenté de valeur spirituelle",
		"6" : "Vous bénéficierez de tous les avantages"
	},"form1":{
		"1" : "Développeur de logiciels (Fullstack)",
		"2" : "Graphiste 3D ",
		"3" : "Testeur QA manuel ",
		"4" : "Stage "
		
	},
	"button":"Cliquez ici pour nous rejoindre"
    }
}
</i18n>

