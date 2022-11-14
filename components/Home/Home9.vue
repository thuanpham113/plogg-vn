<template>
  <rely-layout-page>
    <div class="d-flex justify-center ma-16" data-aos-duration="1000" data-aos="fade-up">
      <div class="text-h5 font-weight-bold">
        {{ $t("add") }}
      </div>
    </div>
    <v-layout :column="$vuetify.breakpoint.smAndDown">
      <v-hover elevation="0" v-for="(form, index) in form1s" :key="index" v-slot="{ hover }" open-delay="200">
        <v-card :elevation="0" :class="{ 'on-hover': hover }" class="mx-auto" rounded="xl"
          :width="$vuetify.breakpoint.smAndDown ? '90%' : '15%'">
          <v-sheet rounded="xl" class="d-flex flex-column align-center" data-aos-duration="1000" data-aos="fade-up">
            <v-col cols="12">
              <v-card rounded="xl" class="ma-8" :color="hover ? 'grey darken-1' : ''" :class="{ 'on-hover': hover }">
                <v-img contain class="pl-5" :width="$vuetify.breakpoint.smAndDown ? '70%' : '100%'" :src="form.imgs">
                </v-img>
              </v-card>
            </v-col>

            <v-col cols="">
              <v-card elevation="0" rounded="xl" class="text-center">
                <v-card-text class="subtitle-1 font-weight-bold" v-if="form.texts">
                  {{ form.key }}
                  <div class="subtitle-1 font-weight-bold" v-if="form.mail">
                    {{ form.mail }}
                  </div>
                  <div class="subtitle-1 grey--text pb-2" v-if="form.text1">
                    {{ form.text1 }}
                  </div>
                  <div class="subtitle-1 grey--text" v-if="form.text2">
                    {{ form.text2 }}
                  </div>
                </v-card-text>
                <div class="subtitle-1 font-weight-bold grey--text mb-7" v-if="form.call">
                  {{ form.call }}
                </div>
              </v-card>
            </v-col>
          </v-sheet>
        </v-card>
      </v-hover>
    </v-layout>
  </rely-layout-page>
</template>

<script>
export default {
  name: "AdminsPage",
  data() {
    return {
      form1s: [
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/icon5.png",
          texts: this.$t("forms.Recent purchase"),
          text1: this.$t("forms.text1s"),
        },
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/icon5.png",
          texts: "Status de la prescription",
          text1: this.$t("forms.text1s"),
        },
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/icon5.png",
          texts: this.$t("heys.Orders"),
          text1: this.$t("heys.text3"),
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t("head"),
    };
  },
  methods: {},
};
</script>

<style>
.v-sheet--offset {
  top: -30px;
  position: relative;
}
</style>


<i18n>
{   "en": {
        "forms":{
          "nurses": "My nurse",
          "Julie Deschesneaux": "Julie Deschesneaux",
          "links1" : "Communicate with my nurse",
          "Recent purchase" : "Recent purchase",
          "text1s" : "Time to think about recent purchases.",
          "text2s" : "Order now and get it before: February 06, 2023",
          "Commander à nouveau" : "Order again"
        },
      "heys":{
            "Orders":"Order Tracking: BPED-2501",
            "text3" :"Your order placed on January 26",
            "text4" : "Estimated delivery date: February 06, 2023",
            "Suivre sur le site du transporteur" : "Follow on the carrier's website",
            "Status de la prescription" : "Prescription status",
            "text5" : "The last prescription dates from February 06, 2023",
             "text6" : "To be renewed before March 15, 2023"
            
      },
      "add": "Instructions Finally Brought into the 21st Century"
	},
  	"fr": {
          "forms":{
          "nurses": "Mon infirmière",
          "Julie Deschesneaux": "Julie Deschesneaux",
          "links1" : "Communiquer avec mon infirmière",
          "Recent purchase" : "Achat récent",
          "text1s" : "II serait temps de penser à récents achats, voici un achat récent qui convient à votre prescription.",
          "text2s" : "Commandez maintenant et obtenez avant le: 06 Février 2023",
          "Commander à nouveau" : "Commander à nouveau"
          	
       },
      "heys":{
              "Orders" : "Suivi de commande: BPED-2501",
              "text3" : "Votre commande effectuée le 26 janvier 2023 est en route vers la destination",
              "Text4" : "Date de récption estimée: 06 Février 2023",
              "Suivre sur le site du transporteur" : "Suivre sur le site du transporteur",
              "Status de la prescription" : "Status de la prescription",
              "text5" : "La dernière prescription date du 06 Février 2023",
              "text6" : "À renouveller avant 15 mars 2023"
      

      },
      "add": "Instructions Finally Brought into the 21st Century"
        
    
    }
}
</i18n>