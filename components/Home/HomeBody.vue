<template>
	<v-sheet color:="white" class="d-flex vh-100 justify-center align-center">
		<div
			column
			:class=" $vuetify.breakpoint.smAndDown ? 'black--text w-80' : 'black--text pl-16 w-50'"
		>
			<div :class="
				[
					'd-flex'
					,$vuetify.breakpoint.smAndDown
					? 'h6 font-weight-bold text-center pl-9'
					: 'h3 font-weight-bold mt-10 flex-column'
				]
			">
				<div>
					{{ $t("title.1") }}
				</div>
				<div>
					Plogg Vietnam
				</div>
			</div>
			<div :class="
				$vuetify.breakpoint.smAndDown
				? 'mt-2  text-center'
				: 'h6 mb-11 my-5'
			">
				{{ $t("title.2") }}
			</div>
			<div class="d-flex justify-center">
				<v-hover class=" " v-slot="{ hover }">
					<v-btn
						:class="
						$vuetify.breakpoint.smAndDown
							? 'rounded-lg white--text'
							: 'rounded-lg black--text'
						"
						:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						:height="$vuetify.breakpoint.smAndDown ? '45' : '50'"
						dense
						href="/AboutUs"
					>
						<div class="font-weight-black h7">{{ $t("button.2") }}</div>
					</v-btn>
				</v-hover>
			</div>
		</div>
		<v-img contain class="mx-16" aspect-ratio="1" :width="$vuetify.breakpoint.smAndDown ? '50%' : '40%'"
			src="logo 2.png">
		</v-img>
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
		"1":"Welcome to",
		"2":"The best Information Technology Services company that you need to boost your success."
		},
		"button":{
		"2":"Who are we ?"
		}
	},
	"fr": {
		"title": {
		"1":"bienvenue à",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
		"button":{
		"1":"S'abonner"
		}
	}
}
</i18n>