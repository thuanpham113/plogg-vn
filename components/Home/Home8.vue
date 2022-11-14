<template>
  <rely-layout-page>
    <v-img src="/img2222.jpg" class="d-flex align-center justify-center ma-12">
      <div class="d-flex justify-center ma-16" data-aos-duration="1000" data-aos="fade-up">
        <div class="text-h5 font-weight-bold blue-grey--text">
          {{ $t("add") }}
        </div>
      </div>
      <v-sheet color="transparent">
        <v-layout :column="$vuetify.breakpoint.smAndDown" class="d-flex justify-center ma-9">
          <v-col :cols="$vuetify.breakpoint.smAndDown ? '13' : ''" elevation="0">
            <v-card v-for="(form, index) in form1s" :key="'key' + index" class="card mb-5 inactive"
              :color="index === selected ? 'white' : 'grey lighten-2'" ripple rounded="xl"
              @click.native.capture="change(index)">
              <v-card-text rounded="xl" class="d-flex" :color="form.color" data-aos-duration="1000" data-aos="fade-up">
                <v-col class="ma-3" cols="3 ">
                  <v-card rounded="xl" class="ma-2" :color="index === selected ? 'white' : 'grey lighten-'">
                    <v-img contain :src="form.imgs"></v-img>
                  </v-card>
                </v-col>

                <v-col cols="9">
                  <v-card elevation="0" color="transparent" class="inactive">
                    <v-card-text class="subtitle-1 font-weight-bold" v-if="form.texts">
                      {{ form.key }}
                      <div class="subtitle-1 font-weight-bold" v-if="form.mail">
                        {{ form.mail }}
                      </div>
                      <div class="subtitle-1 grey--text pb-2" v-if="form.text1">
                        {{ form.text1 }}
                      </div>
                    </v-card-text>
                    <div class="subtitle-1 font-weight-bold grey--text mb-7" v-if="form.call">
                      {{ form.call }}
                    </div>
                  </v-card>
                </v-col>
              </v-card-text>
            </v-card>
            <!-- </v-hover> -->
          </v-col>

          <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '6'">
            <v-sheet :column="$vuetify.breakpoint.smAndDown" color="transparent">
              <v-carousel data-aos-duration="1000" data-aos="fade-up" hide-delimiter-background v-model="selected"
                :show-arrows="false">
                <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" vertical
                  reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-layout>
      </v-sheet>
    </v-img>
  </rely-layout-page>
</template>

<script>
export default {
  name: "AdminsPage",
  data() {
    return {
      selected: 1,
      honor: -1,
      form1s: [
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/logo/icon1.png",
          texts: this.$t("forms.Recent purchase"),
          text1: this.$t("forms.text1s"),
          text2: this.$t("forms.text2s"),
        },
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/logo/icon2.png",
          texts: "Status de la prescription",
          text1: this.$t("forms.text1s"),
          text2: this.$t("forms.text2s"),
        },
        {
          key: this.$t("forms.Recent purchase"),
          imgs: "/logo/icon3.png",
          texts: this.$t("heys.Orders"),
          text1: this.$t("heys.text3"),
          text2: this.$t("heys.text4"),
        },
      ],
      items: [
        {
          src: "/3333.png",
        },
        {
          src: "/hinh22.png",
        },
        {
          src: "/hinh123444.png",
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t("head"),
    };
  },
  methods: {
    change(index) {
      this.selected = index;
    },
  },
};
</script>

<style>
.v-sheet--offset {
  top: -30px;
  position: relative;
}

.card {
  cursor: pointer;
}

.active {
  color: blue !important;
}
</style>



<i18n>
{   "en": {
        "forms":{
          "nurses": "My nurse",
          "Julie Deschesneaux": "Julie Deschesneaux",
          "links1" : "Communicate with my nurse",
          "Recent purchase" : "Recent purchase",
          "text1s" : "Time to think about recent purchases, here is a recent purchase that fits your prescription.",
          "text2s" : "Order now and get it before: February 06, 2023",
          "Commander à nouveau" : "Order again"
        },
      "heys":{
            "Orders":"Order Tracking: BPED-2501",
            "text3" :"Your order placed on January 26, 2023 is on its way to the destination",
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