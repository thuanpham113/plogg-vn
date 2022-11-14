<template>
  <v-img src="" height="50%" width="100%" class="mt-15">
    <v-sheet class="mt-13 align-center white--text" color="transparent">
      <v-layout :column="$vuetify.breakpoint.xs" class="justify-center ma-15">
        <div
          class="black--text"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'h5 font-weight-bold '
              : 'h5 font-weight-bold'
          "
        >
          {{ $t("text.1") }}
        </div>
      </v-layout>
      <v-layout>
        <v-col>
          <v-row>
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              cols="2"
              lg="4"
              sm="4"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  :flat="!hover"
                  class="
                    rounded-xl
                    font-weight-bold
                    h7
                    d-flex
                    flex-column
                    align-center
                  "
                  :class="hover ? 'pink--text' : 'black--text'"
                  :color="hover ? 'transparent' : 'transparent'"
                >
                  <v-img
                    :class="{ icon: !hover }"
                    width="40%"
                    height="40%"
                    :src="card.image"
                  ></v-img>
                  <h6 style="max-width:40%" class="text-center">
                    {{ $t("title.2") }}
                  </h6>
                  <v-btn
                    class="my-12 rounded-xl green--text"
                    :outlined="!hover"
                    :color="hover ? 'transparent' : 'white'"
                    :icon="!hover"
                    x-large
                  >
                    <v-expand-x-transition>
                      <div v-show="hover">{{ $t("title.3") }}</div>
                    </v-expand-x-transition>

                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-layout>
    </v-sheet>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/icontwo.png",
        },
        {
          image: "/icontwo.png",
        },
        {
          image: "/icontwo.png",
        },
        {
          image: "/icontwo.png",
        },
        {
          image: "/icontwo.png",
        },
        {
          image: "/icontwo.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  filter: grayscale(100%);
}
</style>

<i18n>
{
	"en": {
		"text": {
		"1":"PLOGG VIETNAM"
		},
		"title": {
		"1":"As the leading blockchain development company, we're know for delivering cutting edge solutions.",
		"2":"Ploggvietnam ",
		"3":"Learn more"
		}
	},
	"fr": {
		"text": {
		"1":"Artiste graphique"
		},
		"title": {
		"1":"En tant que principale société de développement de blockchain, nous sommes connus pour fournir des solutions de pointe.",
		"2":"Développement de chaînes de blocs personnalisées",
		"3":"Apprendre encore plus"
}
	}
}
</i18n>
