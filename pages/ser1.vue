<template>
	<v-sheet>
		<template>
			<v-card-title class="justify-center ma-16">
				<div class="h4">
					{{ $t("title.1") }}
				</div>
			</v-card-title>
			<v-card-title class="justify-center mb-8">
				<div class="h4">
					{{ $t("title.2") }}
				</div>
			</v-card-title>

			<v-layout style="max-width: 80%" px-16 ml-16>
				<v-img contain aspect-ratio="1" width="50%" src="/service.jpg" />
				<v-col cols="8" class="py-16 ">
					<div class="h6 ma-16  py-16">
						{{ $t("title.3") }}
					</div>
				</v-col>
			</v-layout>
		</template>

		<template>
			<v-layout justify-center my-6>
				<div class="h4">
					{{ $t("title.4") }}
				</div>
			</v-layout>
			<v-layout style="max-width: 80%" pl-16 ml-16>
				<v-col cols="7" class="py-16">
					<div class="h6 ma-16 py-16">
						{{ $t("title.5") }}
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
	"1":"Hi, what services are you looking for?",
	"2":"Backend As A Serivce",
	"3":"A cloud service model in which developers outsource all the behind-the-scenes aspects of a web or mobile application so that they only have to write and maintain the frontend. Plogg Vietnam provide pre-written software for activities that take place on servers, such as user authentication, database management, remote updating, and push notifications, as well as cloud storage and hosting.",
	"4":"Hosting",
	"5":"To build and operate a website, hosting is definitely indispensable. This is an extremely important component and one of the prerequisites for you to start building a successful and effective website. Plogg Vietnam provides hosting services with the desire to help customers successfully complete a website from the beginning to the last step."
	}
    },
    "fr":{
	"title":{
	"1":"Bonjour, quels services recherchez-vous ?",
	"2":"Backend en tant que service",
	"3":"Un modèle de service cloud dans lequel les développeurs externalisent tous les aspects en coulisse d'une application Web ou mobile afin qu'ils n'aient qu'à écrire et à maintenir le frontend. Plogg Vietnam fournit des logiciels pré-écrits pour les activités qui se déroulent sur des serveurs, telles que l'authentification des utilisateurs, la gestion de bases de données, la mise à jour à distance et les notifications push, ainsi que le stockage et l'hébergement dans le cloud.",
	"4":"Hébergement",
	"5":"Pour créer et exploiter un site Web, l'hébergement est définitivement indispensable. Il s'agit d'un élément extrêmement important et l'une des conditions préalables pour commencer à créer un site Web réussi et efficace. Plogg Vietnam fournit des services d'hébergement avec le désir d'aider les clients à réussir un site Web du début à la dernière étape."
		}
    }
}
</i18n>
