<template>
	<v-sheet>
		<template>
			<v-card-title class="justify-center ma-16 ">
				<div class="h4">
					{{ $t("title.1") }}
				</div>
			</v-card-title>

			<v-layout style="max-width: 80%"  ml-16>
				<v-img contain aspect-ratio="1" width="50%" src="/service.jpg" />
				<v-col cols="8" class="py-16 ">
					<div class="h6 ma-16  py-16">
						{{ $t("title.2") }}
					</div>
				</v-col>
			</v-layout>
		</template>

		<template>
			<v-layout justify-center my-6>
				<div class="h4">
					{{ $t("title.3") }}
				</div>
			</v-layout>
			<v-layout style="max-width: 80%" pl-16 ml-16>
				<v-col cols="7" class="py-16">
					<div class="h6 ma-16 py-16">
						{{ $t("title.4") }}
					</div>
				</v-col>
				<v-img contain aspect-ratio="1" width="50%" src="/service1.jpg" />
			</v-layout>
		</template>
	</v-sheet>
</template>
<script>
export default {

};
</script>

<style></style>
<i18n>{
    "en":{
	"title":{
	"1":"Software development",
	"2":"Software development services provide you the option to outsource software engineering and support and obtain maintainable, impactful, secure, and cost-effective software. Plogg Vietnam confidently affirms that we have the conditions, human resources, and ability to support your business in software development to achieve success.",
	"3":"3D graphics design",
	"4":"Plogg Vietnam uses technical tools, especially computer graphics software, to produce extremely vivid images. Thereby, recreating physical objects in life such as houses, machines, characters... Some areas that Plogg vn specializes in are 3D graphic design in architecture - construction - furniture, design. 3D game design,..."
	}
    },
    "fr":{
		"title":{
		"1":"Développement de logiciels",
		"2":"Les services de développement de logiciels vous offrent la possibilité d'externaliser l'ingénierie et l'assistance logicielles et d'obtenir des logiciels maintenables, percutants, sécurisés et rentables. Plogg Vietnam affirme avec confiance que nous avons les conditions, les ressources humaines et la capacité de soutenir votre entreprise dans le développement de logiciels pour réussir.",
		"3":"Conception graphique 3D",
		"4":"Plogg Vietnam utilise des outils techniques, notamment des logiciels d'infographie, pour produire des images extrêmement vives. Ainsi, recréant des objets physiques dans la vie tels que des maisons, des machines, des personnages... Certains domaines dans lesquels Plogg vn se spécialise sont la conception graphique 3D en architecture - construction - mobilier, design. Conception de jeux 3D,..."
			}
    }
}
</i18n>

</template>

<script>
export default {

}
</script>

<style>

</style>