<template>
  <v-sheet>
    <v-row>
      <v-img
        v-if="$vuetify.breakpoint.smAndUp"
        contain
        aspect-ratio="1"
        :width="$vuetify.breakpoint.smAndDown ? '9%' : '20%'"
        src="get1.jpg"
		class="ml-10"
      />

      <v-layout
        color="transparent"
        class="d-inline-flex flex-column flex-row align-center py-5"
      >
        <v-layout
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'h6 font-weight-bold text-center'
              : 'h4 font-weight-bold text-center w-50'
          "
        >
          {{ $t("title.1") }}
        </v-layout>
        <v-hover class="" v-slot="{ hover }">
          <v-btn
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'rounded-lg white--text'
                : 'rounded-lg black--text'
            "
            :color="hover ? 'grey darken-1' : 'cyan lighten-3'"
            :height="$vuetify.breakpoint.smAndDown ? '40' : '55'"
            href="https://www.google.com/intl/vi/gmail/about/"
          >
            <div class="font-weight-black h7">
              {{ $t("button.2") }}
            </div>
          </v-btn>
        </v-hover>
        <v-layout
          :class="
            $vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'subtitle-1'
          "
        >
          {{ $t("title.2") }}
		</v-layout>
      </v-layout>
      <v-img
        v-if="$vuetify.breakpoint.smAndUp"
        contain
        aspect-ratio="1"
        :width="$vuetify.breakpoint.smAndDown ? '9%' : '20%'"
        src="get2.jpg"
		class="mr-9"
      />
    </v-row>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style></style>

<i18n>
  {
	  "en": {
		  "title":{
		  "1":"Get start to strengthen your business ",
		  "2":"Tell us all you needed!"
		  },
		  "button":{
		  "2":"Collaboration here"
		  }
	  },
	  "fr": {
		  "title": {
		  "1":"Rester en contact",
		  "2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		  },
		  "button":{
		  "2":"Collaboration ici"
		  }
	  }
  }
  </i18n>
