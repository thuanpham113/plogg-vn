<template>
	<v-sheet>
		<template>
			<v-img max-height="450" src="/Round.jpg">
				<v-card :height=" $vuetify.breakpoint.smAndDown ? '' : '90' " flat color="transparent"></v-card>
				<div class="pt-md-16 ma-md-14">
					<v-card-title :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-start'">
						<div class="text-sm-h5 text-md-h3 ml-10 font-weight-bold">
							{{ $t("title.1") }}
						</div>
					</v-card-title>

					<v-card-titse class=" grey--text">
						<v-col :class="$vuetify.breakpoint.smAndDown
						? 'font-weight-bold text-center '
						: 'h6 mx-11 '">
							{{ $t("title.2") }}
						</v-col>
					</v-card-titse>
				</div>
			</v-img>
		</template>
		<v-sheet class="px-16 ">

			<template>
				<div class="mx-md-10">
					<div :class="$vuetify.breakpoint.smAndDown
					? 'h6 text-center font-weight-bold' : 'h4  font-weight-bold pl-2 py-9'">
						{{ $t("title.3") }}
					</div>
					<v-sheet class=" black--text">
						<v-col md=11
							:class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 text-center ' : 'h6 '">
							{{ $t("title.4") }}
						</v-col>
					</v-sheet>
				</div>
			</template>

			<template>
				<div class="mx-10">
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
				<div class="mx-10">

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
				<v-btn class="rounded-lg white--text"
				 :color="hover ? 'grey darken-1' : 'cyan lighten-3'" :height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
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
	mounted () {
		console.log(this)
	}

};
</script>

<style>

</style>
<i18n>{
    "en":{

	"title":{
		"1" : "Hi, we are looking for you!",
		"2" : "Plogg team always wants to bring working and learning opportunities to creative, energetic, and enthusiastic young people. We wish to nurture young talents, provide you a chance for self-improvement, and look forward to seeing your contributions to the development of the company. At Plogg Vietnam, you will be able to work with a group of motivated young people in a collaborative and professional environment.",
		"3" : "Why should you join us?",
		"4" : "When joining Plogg team, you will be involved in a dynamic, enjoyable, and creative working environment. The members of Plogg Vietnam are young people with a passion for information technology. At Plogg Vietnam, each individual contributes a part of their knowledge, creativity, and talent to help the company grow as a whole. More than just a workplace, our company is also a welcoming home, where you can hone your knowledge and learn new things together. ",
		"5" : "What can you get when you join us?",
		"6" : "We are looking for..."
	},
	"form":{
		"1" : "You will be working in a unique environment",
		"2" : "You will be free and encouraged to exchange and share knowledge.",
		"3" : "You will have the opportunity to interact with foreign companies and colleagues.",
		"4" : "You will have the opportunity to expand your networking.",
		"5" : "You will physically and emotionally benefit from our healthy working environment.",
		"6" : "You will enjoy a full range of benefits we have to offer."
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
		"2" : "L'équipe Plogg souhaite toujours offrir des opportunités de travail et d'apprentissage à des jeunes créatifs, énergiques et enthousiastes. Nous souhaitons encourager les jeunes talents, vous offrir une chance de vous améliorer et nous nous réjouissons de voir vos contributions au développement de l'entreprise. Chez Plogg Vietnam, vous pourrez travailler avec un groupe de jeunes motivés dans un environnement collaboratif et professionnel.",
		"3" : "Pourquoi devriez-vous nous rejoindre?",
		"4" : "En rejoignant l'équipe de Plogg, vous serez impliqué dans un environnement de travail dynamique, agréable et créatif. Les membres de Plogg Vietnam sont des jeunes passionnés par les technologies de l'information. Chez Plogg Vietnam, chaque individu apporte une partie de ses connaissances, de sa créativité et de son talent pour aider l'entreprise à se développer dans son ensemble. Plus qu'un simple lieu de travail, notre entreprise est aussi une maison accueillante, où vous pouvez approfondir vos connaissances et apprendre de nouvelles choses ensemble.",
		"5" : "Que pouvez-vous obtenir lorsque vous nous rejoignez?",
		"6" : "What you can get when you join us?"
		},
	"form":{
		"1" : "Vous travaillerez dans un environnement unique.",
		"2" : "Vous serez libre et encouragé à échanger et partager vos connaissances.",
		"3" : "Vous aurez l'opportunité d'interagir avec des entreprises étrangères et des collègues.",
		"4" : "Vous aurez l'opportunité d'élargir votre réseau.",
		"5" : "Vous bénéficierez physiquement et émotionnellement de notre environnement de travail sain.",
		"6" : "Vous profiterez d'une gamme complète d'avantages que nous avons à offrir."
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

