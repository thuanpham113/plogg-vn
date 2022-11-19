<template>
	<v-sheet
		:class="
			$vuetify.breakpoint.smAndDown
				? 'd-flex flex-column flex-md-row align-center justify-center my-16'
				: 'd-column-reverse align-center justify-end d-flex flex-row-reverse my-16'
		"
	>
		<v-img
			class="px-16"
			:max-width="$vuetify.breakpoint.smAndDown ? '80%' : '50%'"
			contain
			src="/Graphic-desig.png"
		/>

		<div :class="$vuetify.breakpoint.smAndDown ? '' : 'px-16 w-60'">
			<div :class="$vuetify.breakpoint.smAndDown ? 'justify-center d-flex flex-row' : 'd-flex flex-row '">
				<v-img
					:class="$vuetify.breakpoint.smAndDown ? 'mt-5 ml-1 ' : ''"
					max-height="70"
					max-width="70"
					contain
					src="/3ddd.jpg"
				/>
				<h2
					:class="
						$vuetify.breakpoint.smAndDown
							? 'grey--text text-center mt-12 mx-6'
							: 'grey--text mt-5'
					"
				>
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
								: 'rounded-lg white--text'
						"
						:color="hover ? 'grey darken-1' : 'cyan lighten-3'"
						:height="$vuetify.breakpoint.smAndDown ? '45' : '55'"
						:to="localePath(`/Build word`)"
					>
						<div class="font-weight-black h7">
							{{ $t("button.1") }}
						</div>
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
		"1":"Built your world"
		}

	},
	"fr": {
		"title": {
		"1":"Rester en contact",
		"2":"Abonnez-vous à notre newsletter et ne manquez jamais nos mises à jour."
		},
	"button":{
		"1":"Built your world"
		}
	}
}
</i18n>
