<template>
  <v-layout column align-center class="my-16">
    <v-col cols="7" class="my-16">
      <v-layout justify-center>
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'h6 text-center font-weight-bold py-5'
              : 'font-weight-bold text-center text-h2 mb-16'
          "
        >
          {{ $t("title") }}
        </div>
      </v-layout>
      <v-form v-model="valid" @submit.prevent="buttonClick()">
        <v-sheet>
          <v-row class="mx-16">
            <v-text-field
              class="mr-10"
              :label="$t('first')"
              :rules="[rules.required]"
              v-model="form.firstname"
            />
            <v-text-field
              :label="$t('last')"
              :rules="[rules.required]"
              v-model="form.lastname"
            />
          </v-row>
          <v-row class="mx-16">
            <v-text-field
              lass="mr-10"
              :label="$t('business')"
              :rules="[rules.required, rules.email]"
              v-model="form.email"
            />
            <v-text-field
              class="ml-10"
              :label="$t('company')"
              :rules="[rules.required]"
              v-model="form.company"
            />
          </v-row>

          <v-textarea
            class="mx-16 mb-16"
            label="How can we help you?"
            :label="$t('how')"
            v-model="form.description"
            :rules="[rules.required]"
          />
        </v-sheet>
        <v-sheet>
          <div class="text-center">
            <v-btn
              type="submit"
              color="black"
              class="white--text"
              :disabled="!valid"
              rounded-lg
              :loading="loading"
              @click="snackbar = true"
            >
              {{ $t("button") }}
            </v-btn>
          </div>
        </v-sheet>
        <v-snackbar
          v-model="snackbar" 
          :timeout="timeout"
          color="green accent-4"
          >
          {{ $t("notification") }}
        </v-snackbar>
      </v-form>
    </v-col>
  </v-layout>
</template>

<script>
import axios from "axios"
export default {
  layout: "hero",
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      loading: false,
      valid: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        description: "",
      },
      rules: {
        required: (value) => !!value || this.$t("required"),
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async buttonClick() {
      this.loading = true;
      try {
        const result = await axios({
          method: "post",
          url: "https://plogg-vn.uc.r.appspot.com/graphql",
          data: {
            query: `
            mutation {
                createAdsContact(
                data: {
                  first_name:"${this.form.firstname}",
                  last_name:"${this.form.lastname}",
                  email:"${this.form.email}",
                  company_name:"${this.form.company}",
                  description:"${this.form.description}"
                }
              )
              {
                data {
                  id
                }
              }
            }`,
          },
        });
      } catch {
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
<i18n>
{
"en":{
    "notification":"Submitted successfully",
    "title":"Contact our sales team",
    "button":"Click here to submit",
	  "first":"First name",
	  "last":"Last name",
    "business":"Business Email",
    "company":"Company name",
	  "required":"Required",
    "how":"How can we help you?"
    	},
"fr":{
    "notification":"Soumis avec succès",
    "title":{
        "1":"Contactez notre équipe commerciale"
    },
    "button":{
        "1":"Cliquez ici pour soumettre"
    }

}
}
</i18n>
