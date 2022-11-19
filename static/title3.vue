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
                    <v-text-field label="Email" class="mr-10"/>
                    <v-text-field label="Phone"/>
                </v-row>

                <v-text-field label="Job title" class="mx-16"/>
                <v-text-field label="Upload your CV here" class="mx-16"/>
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

        "1":"Join us here"
    },
    "button":{
        "1":"Click here to submit"
    }
},
"fr":{
    "title":{
        "1":"Rejoignez-nous ici"
    },
    "button":{
        "1":"Cliquez ici pour soumettre"
    }

}
}
</i18n>
