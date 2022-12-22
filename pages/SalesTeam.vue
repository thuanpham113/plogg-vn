<template>
	<v-layout column align-center class="my-16">
        <v-col cols="7" class="my-16">
            <v-layout justify-center>
                <div   :class="
						$vuetify.breakpoint.smAndDown
							? 'h6 text-center font-weight-bold py-5'
							: 'font-weight-bold text-center text-h2 mb-16'"
                >
                    {{ $t("title") }}
                </div>
            </v-layout>
            <v-sheet>
                <v-row class="mx-16">
                    <v-text-field
                     class="mr-10"
                     :label="$t('first')" 
					 :rules="[rules.required]"
                     />
                    <v-text-field
                    :label="$t('last')"
					:rules="[rules.required]"
                    />
                </v-row>
                <v-row class="mx-16">
                    <v-text-field 
                    lass="mr-10"
                    :label="$t('business')"
                    :rules="[rules.required, rules.email]"
                    />
                    <v-text-field 
                    class="ml-10"
                    :label="$t('company')"
					:rules="[rules.required]"
                    />
                </v-row>

                <v-text-field 
                    class="mx-16 mb-16"
                    label="How can we help you?" 
                    :label="$t('how')"
                    :rules="[rules.required]"/>
            </v-sheet>
            <v-sheet>
                <div class="text-center">
                    <v-btn color="black" class="white--text" rounded-lg>
                        {{ $t("button") }}
                    </v-btn>
                </div>
            </v-sheet>
        </v-col>
	</v-layout>
</template>

<script>
export default {
    layout: "hero",
    data () {
		return {
			rules: {
				required: value => !!value || this.$t("required"),
				email: value => {
				const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return pattern.test(value) || 'Invalid e-mail.'
          },
		}
	}
}
};
</script>

<style></style>
<i18n>
{
"en":{
    "title":"Contact our sales team",
    "button":"Click here to submit",
	"first":"First name",
	"last":"Last name",
    "business":"Business Email",
	"company":"Phone number",
    "company":"Company name",
	"required":"Required",
    "how":"How can we help you?"
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
<!-- Business Email
Company Name -->
