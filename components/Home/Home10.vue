<template>
  <v-sheet color:="white">
	<v-row>
		<v-img v-if="$vuetify.breakpoint.smAndUp" contain aspect-ratio="1" :max-width="$vuetify.breakpoint.smAndDown ? '20%' : '31%'" src="get1.jpg"></v-img>
		<v-col>
			<v-layout color="transparent" class="d-flex flex-column flex-md-row align-center py-5">
				<v-layout :style="$vuetify.breakpoint.smAndDown ? 'max-width: 100%' : 'max-width: 50%'" column :class=" $vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text '">
					<v-col cols="12" class="justify-center ">
						<div :class="
							$vuetify.breakpoint.smAndDown
							? 'h6 font-weight-bold  pl-9'
							: 'h4 font-weight-bold text-center'
						">
							{{ $t("title.1") }}
						</div>
					</v-col>

					<v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '12'" class="d-flex justify-center ">
						<v-hover class=" " v-slot="{ hover }">
							<v-btn :class="
							$vuetify.breakpoint.smAndDown
								? 'rounded-lg white--text'
								: 'rounded-lg black--text'
							" :color="hover ? 'grey darken-1' : 'cyan lighten-3'"
							:height="$vuetify.breakpoint.smAndDown ? '20' : '55'" href="https://www.google.com/intl/vi/gmail/about/">
							<div class="font-weight-black h7">{{ $t("button.2") }}</div>
							</v-btn>
						</v-hover>
					</v-col>

					<v-col cols="12" class="grey--text d-flex justify-center ">
						<div :class="
							$vuetify.breakpoint.smAndDown
							? 'mt-2  text-center'
							: 'subtitle-1'
						">
							{{ $t("title.2") }}
						</div>
					</v-col>

				</v-layout>
				<v-col>
					<v-row justify="center">
					<v-img contain aspect-ratio="1" :max-width="$vuetify.breakpoint.smAndDown ? '30%' : ''" src="get2.jpg" />
					<v-img v-if="$vuetify.breakpoint.xs" contain aspect-ratio="1" :max-width="$vuetify.breakpoint.smAndDown ? '30%' : ''" src="get1.jpg"></v-img>
					</v-row>
				</v-col>
			</v-layout>
		</v-col>
	</v-row>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style>
</style>

<i18n>
  {
	  "en": {
		  "title":{
		  "1":"Get start to streng then your business ",
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
		  "2":""
		  }
	  }
  }
  </i18n>