<template>
	<v-sheet>
		<template>
			<v-img max-height="500" src="/Background_careers.jpg">

				<div class="pt-md-16 ma-md-14">
					<div data-aos="zoom-out-up">
						<v-card-title :class="
							$vuetify.breakpoint.smAndDown
								? 'justify-center pt-12'
								: 'justify-start'
						">
							<div class="text-sm-h5 text-md-h3 ml-10 font-weight-bold">
								{{ $t("title.1") }}
							</div>
						</v-card-title>
					</div>

					<v-sheet class="grey--text" color="transparent">
						<div data-aos="zoom-out-up" data-aos-delay="200">
							<v-col md="11" :class="
								$vuetify.breakpoint.smAndDown
									? 'subtitle-1 text-center '
									: 'h6 ml-10'
							">
								{{ $t("title.2") }}
							</v-col>
						</div>
					</v-sheet>
				</div>
			</v-img>
		</template>
		<v-sheet class="px-16">
			<template>
				<div>
					<div data-aos="zoom-out-up" data-aos-delay="300" class="mx-md-10">
						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'h6 text-center font-weight-bold mt-12'
								: 'h4  font-weight-bold pl-2 py-9'
						">
							{{ $t("title.3") }}
						</div>
					</div>
					<v-sheet class="black--text">
						<div data-aos="zoom-out-up" data-aos-delay="400">
							<v-col md="11" :class="
								$vuetify.breakpoint.smAndDown
									? 'subtitle-1 text-center '
									: 'h6 ml-7'
							">
								{{ $t("title.4") }}
							</v-col>
						</div>
					</v-sheet>
				</div>
			</template>

			<template>
				<div data-aos="zoom-out-up" data-aos-delay="300">
					<div class="mx-10">
						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'h6 text-center font-weight-bold mt-12'
								: 'h4 font-weight-bold py-10 '
						">
							{{ $t("title.5") }}
						</div>
					</div>
				</div>
				<div data-aos="zoom-out-up" data-aos-delay="400">
					<v-sheet v-for="(header, index) in headers" :key="index" :class="
						$vuetify.breakpoint.smAndDown ? '' : 'justify-start'
					">
						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'subtitle-1 text-center '
								: 'h6  px-10'
						">
							{{ header.Title }}
						</div>
					</v-sheet>
				</div>
			</template>
			<template>
				<div data-aos="zoom-out-up" class="mx-10" data-aos-delay="300">
					<div>
						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'h6 font-weight-bold text-center mt-12 '
								: 'h4 font-weight-bold py-10'
						">
							{{ $t("title.6") }}
						</div>
					</div>

					<div data-aos="zoom-out-up" v-for="(head, index) in heads" :key="index" :class="
						$vuetify.breakpoint.smAndDown
							? 'justify-center'
							: 'justify-start'
					">
						<div :class="
							$vuetify.breakpoint.smAndDown
								? 'subtitle-1 text-center '
								: 'h6 mt-2 '
						">
							<div>
								{{ head.Content }}
							</div>
						</div>
					</div>
				</div>
			</template>
		</v-sheet>

		<div data-aos="zoom-in-down" class="d-flex justify-center w-100 pt-5">
			<v-hover v-slot="{ hover }">
				<v-btn class="rounded-lg white--text" :color="hover ? 'grey darken-1' : 'cyan lighten-10'"
					:height="$vuetify.breakpoint.smAndDown ? '45' : '55'" :to="localePath(`/JoinUsHere`)">
					<div class="font-weight-black h7">{{ $t("button") }}</div>
				</v-btn>
			</v-hover>
		</div>
	</v-sheet>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
	data() {
		return {

			headers: [
				{
					Title: this.$t("form.1"),
				},
				{
					Title: this.$t("form.2"),
				},
				{
					Title: this.$t("form.3"),
				},
				{
					Title: this.$t("form.4"),
				},
				{
					Title: this.$t("form.5"),
				},
				{
					Title: this.$t("form.6"),
				},
			],
			heads: [
				{
					Content: this.$t("form1.1"),
				},
				{
					Content: this.$t("form1.2"),
				},
				{
					Content: this.$t("form1.3"),
				},
				{
					Content: this.$t("form1.4"),
				},
			],
		};
	},
	mounted() {
		setTimeout(function () {
			AOS.init({
				once: true,
			});
		}, 100);


	},
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
		"2" : "L'??quipe Plogg souhaite toujours offrir des opportunit??s de travail et d'apprentissage ?? des jeunes cr??atifs, ??nergiques et enthousiastes. Nous souhaitons encourager les jeunes talents, vous offrir une chance de vous am??liorer et nous nous r??jouissons de voir vos contributions au d??veloppement de l'entreprise. Chez Plogg Vietnam, vous pourrez travailler avec un groupe de jeunes motiv??s dans un environnement collaboratif et professionnel.",
		"3" : "Pourquoi devriez-vous nous rejoindre?",
		"4" : "En rejoignant l'??quipe de Plogg, vous serez impliqu?? dans un environnement de travail dynamique, agr??able et cr??atif. Les membres de Plogg Vietnam sont des jeunes passionn??s par les technologies de l'information. Chez Plogg Vietnam, chaque individu apporte une partie de ses connaissances, de sa cr??ativit?? et de son talent pour aider l'entreprise ?? se d??velopper dans son ensemble. Plus qu'un simple lieu de travail, notre entreprise est aussi une maison accueillante, o?? vous pouvez approfondir vos connaissances et apprendre de nouvelles choses ensemble.",
		"5" : "Que pouvez-vous obtenir lorsque vous nous rejoignez?",
		"6" : "Nous recherchons..."
		},
	"form":{
		"1" : "Vous travaillerez dans un environnement unique.",
		"2" : "Vous serez libre et encourag?? ?? ??changer et partager vos connaissances.",
		"3" : "Vous aurez l'opportunit?? d'interagir avec des entreprises ??trang??res et des coll??gues.",
		"4" : "Vous aurez l'opportunit?? d'??largir votre r??seau.",
		"5" : "Vous b??n??ficierez physiquement et ??motionnellement de notre environnement de travail sain.",
		"6" : "Vous profiterez d'une gamme compl??te d'avantages que nous avons ?? offrir."
	},"form1":{
		"1" : "D??veloppeur de logiciels (Fullstack)",
		"2" : "Graphiste 3D ",
		"3" : "Testeur QA manuel ",
		"4" : "Stage "

	},
	"button":"Cliquez ici pour nous rejoindre"
    }
}
</i18n>
