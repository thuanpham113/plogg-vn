<template>
    <v-layout column align-center class="my-16">
        <v-col cols="7" class="my-16">
            <v-layout justify-center>
                <div class="font-weight-bold text-h2 mb-16">
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
                        class="mr-10" 
                        :label="$t('email')" 
                        :rules="[rules.required, rules.email]"
                        />
                    <v-text-field 
                        :label="$t('phone')" 
                        :rules="[rules.required]" 
                        />
                </v-row>
                <v-text-field 
                    label="Job title" 
                    class="mx-16" 
                    :rules="[rules.required]" 
                    />
                
            </v-sheet>
                <v-file-input
                    class="mx-16 mt-3"
                    prepend-icon
                    dense
                    :label="$t('update')" 
                    :rules="[rules.required]" 
                />

            <v-sheet>
                <div class="text-center">
                    <v-btn 
                        color="black" 
                        class="white--text" 
                        rounded-lg
                        :loading="loading"
                        :disabled="loading"
                        @click="buttonClick()"
                        >
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
    data() {
        return {
        	loading: false,
            rules: {
                required: value => !!value || this.$t("required"),
              
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
        }
        
    },  
    methods: {
				buttonClick() {
				this.loading = true
				const timeout = setTimeout(() => {
				this.loading = false
				clearTimeout(timeout)
			}, 3000)
		}
    }    
}

</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
</style>

<i18n>
{
"en":{
    "first":"First name",
	"last":"Last name",
    "email":"Email",
	"update":"Cv",
    "company":"Company name",
	"required":"Required",
    "title":"Join us here",
    "button":"Click here to submit"
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
