<template>
  <v-sheet>
    <div data-aos="flip-left">
      <div class="text-center font-weight-bold text-h4 mt-16">
        {{ $t("add") }}
      </div>
    </div>

    <v-row class="justify-md-space-around mx-16" :column="$vuetify.breakpoint.smAndDown">
      <v-col data-aos="fade-right" data-aos-offset="300" data-aos-delay="200" data-aos-easing="ease-in-sine" md="6">
        <v-sheet class="column">
          <v-card rounded="xl" class="ma-16">
            <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank1.jpg" />
          </v-card>
          <v-card elevation="0" class="text-center">
            <v-card-text class="text-h6 black--text font-weight-bold">
              {{ $t("title.1") }}
              <div class="subtitle-1 grey--text">
                {{ $t("form.1") }}
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>

      <v-spacer />

      <v-col data-aos="fade-left" data-aos-offset="300" data-aos-delay="200" data-aos-easing="ease-in-sine" md="6">
        <v-layout column>
          <div>
            <v-card rounded="xl" class="ma-16">
              <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank4.jpg" />
            </v-card>
          </div>

          <div>
            <v-card elevation="0" class="text-center">
              <v-card-text class="text-h6 black--text font-weight-bold">
                {{ $t("title.2") }}
                <div class="subtitle-1 grey--text">
                  {{ $t("form.2") }}
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-layout>
      </v-col>
    </v-row>
    <v-spacer />

    <v-row class="justify-md-space-around mx-16" :column="$vuetify.breakpoint.smAndDown">
      <v-col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" cols="12" md="6">
        <v-sheet>
          <v-card rounded="xl" class="ma-16">
            <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank2.jpg" />
          </v-card>
          <v-card elevation="0" class="text-center">
            <v-card-text class="text-h6 black--text font-weight-bold">
              {{ $t("title.3") }}
              <div class="subtitle-1 grey--text">
                {{ $t("form.3") }}
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
      <v-spacer />
      <v-col data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" md="6">
        <v-sheet>
          <v-card rounded="xl" class="ma-16">
            <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank5.jpg" />
          </v-card>
          <v-card elevation="0" class="text-center">
            <v-card-text class="text-h6 black--text font-weight-bold">
              {{ $t("title.4") }}
              <div class="subtitle-1 grey--text">
                {{ $t("form.4") }}
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>

    <v-spacer />

    <v-row class="justify-md-space-around mx-16" :column="$vuetify.breakpoint.smAndDown">
      <v-col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" cols="12" md="6">
        <v-sheet>
          <v-card rounded="xl" class="ma-16">
            <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank3.jpg" />
          </v-card>
          <v-card elevation="0" class="text-center">
            <v-card-text class="text-h6 black--text font-weight-bold">
              {{ $t("title.5") }}
              <div class="subtitle-1 grey--text">
                {{ $t("form.5") }}
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
      <v-spacer />

      <v-col data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" cols="12" md="6">
        <v-sheet>
          <v-card rounded="xl" class="ma-16">
            <v-img :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16'" src="/Industries/bank6.jpg" />
          </v-card>
          <v-card elevation="0" class="text-center">
            <v-card-text class="text-h6 black--text font-weight-bold">
              {{ $t("title.6") }}
              <div class="subtitle-1 grey--text">
                {{ $t("form.6") }}
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>

    <v-card data-aos="zoom-in-down" elevation="0" class="d-flex justify-center">
      <v-hover v-slot="{ hover }">
        <v-btn class="rounded-lg white--text my-6" :color="hover ? 'grey' : 'cyan lighten-10'"
          :height="$vuetify.breakpoint.smAndDown ? '30' : '60'" :to="localePath(`/Collaborate`)">
          <div  class="font-weight-boder text-md-h6 text-sm-h8">{{ $t("button") }}</div>
        </v-btn>
      </v-hover>
    </v-card>
    <v-card-title data-aos="zoom-in-down" class="d-flex justify-center">
      <div class="text-subtitle-1 grey--text text-md-h5">
        {{ $t("text") }} 
      </div>
    </v-card-title>
  </v-sheet>
</template>

<script>
import AOS from "aos";

export default {
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
			"add": "We Are the Big Players in Technology Services for Your Field",
			"title":{
					"1":"Banking and Financial Service",
					"2":"Healthcare",
					"3":"Retail",
					"4":"Marketing",
					"5":"Human Resources",
					"6":"Customer Services"
			},
			"form":{
					"1":" We provide high-quality applications of technology such as cloud computing, mobile, and big data that contribute to transforming the real world into digital surfaces. By catching up with scientific and technological trends, we aim to improve quality to meet common standards in the banking sector.",
					"2":"With the development of IT, the medical professionals can adapt and utilize newest scientific findings without geograhical constraints. IT also makes it convenient for users to monitor health, such as employing analysis tools to reduce the errors in drug use, and to provide timely warnings of health issues.",
					"3":"Currently, retail businesses have gradually shifted from traditional stores to online sales. Advanced techonology will bring interactive, convenient and satisfying shopping experiences that attract and keep your buyers for life. PloggVietnam offer you the tools to create that miracle.",
					"4":"Technology has always played a crucial role in the marketing industry. Along with designing authentic websites, we provide various IT systems such as CRM, Data Warehouses CMS, Big Data, and Marketing Automation. These services will easily benefit any marketing strategies you have.",
					"5":"Technology will help business organizations improve their HR department's time management methods and subsequently improve work efficiency. Website-based technology is also being widely used for most common operations in human resource management such as timekeeping, salary calculation, employee information management,...",
					"6":"For customer service, IT is one of the best solutions that support businesses to quickly reach customers, capture customer's value, and drive customer satisfaction. We provide essential services to assist businesses in this. Working with us, you will have the advantages of getting closer to your customers at a low cost, delivering better customer results and increasing customer retention."
			},
			"button":"Collaboration here",
			"text":"Tell us all you needed !"
	},
	"fr":{
			"add": "Nous sommes les grands acteurs des services technologiques pour votre domaine",
			"title":{
					"1":"Service bancaire et financier",
					"2":"Soins de sant??",
					"3":"D??tail",
					"4":"Commercialisation",
					"5":"Ressources humaines",
					"6":"Service client"
			},
			"form":{
					"1":"Nous fournissons des applications technologiques de haute qualit?? telles que le cloud computing, le mobile et le big data qui contribuent ?? transformer le monde r??el en surfaces num??riques. En rattrapant les tendances scientifiques et technologiques, nous visons ?? am??liorer la qualit?? pour r??pondre aux normes communes dans le secteur bancaire.",
					"2":"Avec le d??veloppement de l'informatique, les professionnels de la sant?? peuvent adapter et utiliser les derni??res d??couvertes scientifiques sans contraintes g??ographiques. L'informatique permet ??galement aux utilisateurs de surveiller leur sant??, par exemple en utilisant des outils d'analyse pour r??duire les erreurs dans l'utilisation des m??dicaments et pour fournir des avertissements en temps opportun sur les probl??mes de sant??.",
					"3":"Actuellement, les commerces de d??tail sont progressivement pass??s des magasins traditionnels aux ventes en ligne. La technologie avanc??e apportera des exp??riences d'achat interactives, pratiques et satisfaisantes qui attireront et garderont vos acheteurs pour la vie. PloggVietnam vous offre les outils pour cr??er ce miracle.",
					"4":"La technologie a toujours jou?? un r??le crucial dans l'industrie du marketing. En plus de concevoir des sites Web authentiques, nous fournissons divers syst??mes informatiques tels que CRM, Data Warehouses CMS, Big Data et Marketing Automation. Ces services b??n??ficieront facilement ?? toutes les strat??gies de marketing que vous avez.",
					"5":"La technologie aidera les entreprises ?? am??liorer les m??thodes de gestion du temps de leur service RH et, par la suite, ?? am??liorer l'efficacit?? du travail. La technologie bas??e sur le site Web est ??galement largement utilis??e pour les op??rations les plus courantes dans la gestion des ressources humaines telles que la comptabilisation du temps, le calcul des salaires, la gestion des informations sur les employ??s, etc.",
					"6":"Pour le service client, l'informatique est l'une des meilleures solutions qui aide les entreprises ?? atteindre rapidement les clients, ?? capturer la valeur du client et ?? stimuler la satisfaction client. Nous fournissons des services essentiels pour aider les entreprises dans ce domaine. En travaillant avec nous, vous aurez les avantages de vous rapprocher de vos clients ?? moindre co??t, d'obtenir de meilleurs r??sultats clients et d'augmenter la fid??lisation de la client??le."
			},
			"button": "Collaboration ici",
			"text": "Dites-nous tout ce dont vous aviez besoin !"
	}
}
</i18n>
