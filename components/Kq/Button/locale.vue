<template>
	<v-menu :offset-x="x" :offset-y="y" transition="slide-y-transition">
		<template #activator="{ attrs, on }">
			<v-btn
				height="height"
				class="pa-0 white--text"
				v-bind="attrs"
				depressed
				color="transparent"
				plain
				v-on="on"
			>
				<div class="black--text h7 font-weight-bold">
					{{$i18n.locale}}
				</div>
				<v-icon :color="color">mdi-chevron-down</v-icon>
			</v-btn>
		</template>

		<v-list class="pa-3">
			<h2>{{ $t("lang") }}</h2>
			<v-list-item-group>
				<v-list-item
					v-for="item in $root.$i18n.locales"
					:key="item.id"
					:to="switchLocalePath(item)"
					link
				>
					{{ langMap[item] }}
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-menu>
</template>
<script>
export default {
	props: {
		color: {
			type: String,
			default: undefined,
		},
		x: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
			default: undefined,
		},
		y: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			langMap: {
				en: "English",
				ja: "Japanese",
				fr: "Français",
				vn: "Tiếng Việt",
			},
		}
	},
}
</script>
<i18n>
{
	"en": {
		"lang": "Translate"
	},
	"ja": {
		"lang": "翻訳"
	},
	"vn": {
		"lang": "Phiên dịch"
	},
	"fr": {
		"lang": "Traduire"
	}
}
</i18n>
