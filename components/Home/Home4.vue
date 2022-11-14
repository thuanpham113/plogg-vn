<template>
  <v-img
    class="align-center ma-12"
    content-class="d-flex justify-center py-16 my-16"
    color="white"
    min-height="100vh"
  >
    <v-sheet
     content-class="d-flex justify-center py-16 my-16"
      color="cyan lighten-2"
      class="white--text px-16 rounded-xl py-8 d-flex flex-column"
      :width="$vuetify.breakpoint.smAndDown ? '' : '70%'"
      min-height="70vh"
    >
      <div
        :class="$vuetify.breakpoint.mdAndDown ? 'flex-column' : ''"
        style="min-height: 60%"
        class="d-flex justify-space-between mb-10"
      >
        <v-img
          :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '45%'"
          class="rounded-xl ma-5"
          aspect-ratio="1"
          src="icon5.png"
        ></v-img>
        <div
          class="d-flex flex-column justify-space-between black--text"
          :style="$vuetify.breakpoint.mdAndDown ? 'width: 100%' : 'width: 43%'"
        >
          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'h5 font-weight-bold mb-6'
                : 'h4 font-weight-bold mb-6'
            "
            style="max-width: 70%"
          >
            {{ $t("text.1") }}
          </div>
          <div>
            {{ $t("title.1") }}
          </div>
          <v-layout>
            <v-btn
              class="mt-4 white--text text-h6 rounded-lg font-weight-black"
              color="#FC4097"
              large
            >
              {{ $t("title.2") }}
              <v-icon v-if="$vuetify.breakpoint.smAndUp" right
                >mdi-chevron-right-circle</v-icon
              >
            </v-btn>
          </v-layout>
        </div>
      </div>
      <v-layout
       
        :column="$vuetify.breakpoint.smAndDown"
        :align-end="$vuetify.breakpoint.lgAndUp"
        justify-space-between
      >
        <v-row>
          <v-col
            v-for="(parameter, index) in parameters"
            :key="index"
            sm="4"
            cols="12"
          >
            <div>{{ parameter.text }}</div>
            <div class="h7">{{ parameter.title }}</div>
            <div class="yellow--text">{{ parameter.subTitle }}</div>
            <v-rating
              v-if="parameter.rate"
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="27"
            ></v-rating>
          </v-col>
        </v-row>
      </v-layout>
    </v-sheet>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      parameters: [
        {
          text: this.$t("subtitle.1"),
          title: this.$t("subtitle.2"),
          subTitle: this.$t("subtitle.3"),
        },
        {
          text: this.$t("subtitle.4"),
          title: this.$t("subtitle.5"),
          subTitle: this.$t("subtitle.6"),
        },
        {
          text: this.$t("subtitle.7"),
          rate: 4.5,
        },
      ],
    };
  },
};
</script>

<style></style>

<i18n>
{
	"en": {
		"text": {
		"1":"A Flexible Online Program"
		},

		"title": {
		"1":"Imagine starting a brand-new career at any time! Can’t commit to full-time? No problem, study at your own pace.",
		"2":"View Details",
		"3":"Learn more"
		},

		"subtitle":{
		"1":"ESTIMATED TIME",
		"2":"6 MONTHS",
		"3":"At 10 hrs / week",
		"4":"ENROLL BY",
		"5":"JUNE 24, 2022",
		"6":"Instant access to classroom",
		"7":"COURSE RATING"
		}
	},
	"fr": {
		"text": {
		"1":"Un programme en ligne flexible"
		},

		"title": {
		"1":"Imaginez commencer une toute nouvelle carrière à tout moment ! Ne peut pas s'engager à à plein temps? Pas de problème, étudiez à votre rythme.",
		"2":"Voir les détails",
		"3":"Apprendre encore plus"
		},

		"subtitle":{
		"1":"TEMPS ESTIMÉ",
		"2":"6 MOIS",
		"3":"A 10h/semaine",
		"4":"S'INSCRIRE PAR",
		"5":"24 JUIN 2022",
		"6":"Accès instantané à la salle de classe",
		"7":"ÉVALUATION DU COURS"
		}
	}
}
</i18n>