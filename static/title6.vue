<template>
	<v-layout column align-center class="my-16">
        <v-col cols="7" class="my-16">
            <v-layout justify-center>
                <div class="font-weight-bold text-h2 mb-16">
                    {{ $t("title.1") }}
                </div>
            </v-layout>
            <v-sheet>
                <v-row class="mx-16">
                    <v-text-field label="First name" class="mr-10"/>
                    <v-text-field label="Last name"/>
                </v-row>
                <v-row class="mx-16">
                    <v-text-field label="Business Email" class="mr-10"/>
                    <v-text-field label="Company Name"/>
                </v-row>

                <v-text-field label="How can we help you?" class="mx-16 mb-16"/>
            </v-sheet>
            <v-sheet>
                <div class="text-center">
                    <v-btn color="black" class="white--text" rounded-lg>
                        {{ $t("button.1") }}
                    </v-btn>
                </div>
            </v-sheet>
        </v-col>
	</v-layout>
</template>

<script>
export default {
    layout: "hero",
};
</script>

<style></style>
<i18n>
{
"en":{
    "title":{

        "1":"Contact our sales team"
    },
    "button":{
        "1":"Click here to submit"
    }
},
"fr":{
    "title":{
        "1":"Contactez notre équipe commerciale"
    },
    "button":{
        "1":"Cliquez ici pour soumettre"
    }

}
}
</i18n>
