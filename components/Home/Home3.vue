<template>
	<v-sheet
		color="white"
		:class="['d-flex flex-row-reverse my-16', $vuetify.breakpoint.smAndDown ? 'mt-5' : 'd-column-reverse align-center justify-end']"
	>
		<v-img
			class="px-16"
			max-width="45%"
			contain
			src="/Graphic-desig.png"
		/>

		<div class="w-55 px-16 d-flex flex-column">
			<div class="d-flex flex-row">
				<v-img
					:class="$vuetify.breakpoint.smAndDown ? 'mt-5' : ''"
					max-height="70"
					max-width="70"
					contain
					src="/3ddd.jpg"
				/>
				<h2 class="grey--text mt-5">
					3D graphic design
				</h2>
			</div>

			<div
				:class="
					$vuetify.breakpoint.smAndDown
						? 'h6 font-weight-bold text-center '
						: 'h4 font-weight-bold py-4'
				"
			>
				{{ $t("title.1") }}
			</div>

			<div
				:class="
					$vuetify.breakpoint.smAndDown
						? 'mt-2  text-center'
						: 'h6 py-2'
				"
			>
				{{ $t("title.2") }}
			</div>
			<div class="d-flex justify-center w-100 pt-5">
				<v-hover class="" v-slot="{ hover }">
					<v-btn
						:class="
							$vuetify.breakpoint.smAndDown
								? 'rounded-lg white--text'
								: 'rounded-lg black--text'
						"
						:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						:height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
						href="https://www.google.com/intl/vi/gmail/about/"
					>
						<div class="font-weight-black h7">{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</div>
		</div>
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
		"1":"We built designs that built your world",
		"2":"Turn your ideas into the 3D graphic designs that "
		},
		"button":{
		"2":"Built your world"
		}

	},
	"fr": {
		"title": {
		"1":"Rester en contact",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
	"button":{
		"2":"Built your world"
		}
	}
}
</i18n>