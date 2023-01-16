<template>
  <v-layout column align-center class="my-16">
    <v-col cols="7" class="my-16">
      <v-layout justify-center>
        <div class="font-weight-bold text-h2 mb-16">
          {{ $t("title") }}
        </div>
      </v-layout>
      <v-form v-model="valid" @submit.prevent="buttonClick()">
        <v-sheet>
          <v-row class="mx-16">
            <v-text-field
              v-model="form.firstname"
              class="mr-10"
              :label="$t('first')"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="form.lastname"
              :label="$t('last')"
              :rules="[rules.required]"
            />
          </v-row>
          <v-row class="mx-16">
            <v-text-field
              v-model="form.email"
              class="mr-10"
              :label="$t('email')"
              :rules="[rules.required, rules.email]"
            />
            <v-text-field
              v-model="form.phone"
              :label="$t('phone')"
              :rules="[$rules.required, $rules.phone]"
            />
          </v-row>
          <v-text-field
            v-model="form.title"
            label="Job title"
            class="mx-16"
            :rules="[rules.required]"
          />
        </v-sheet>
        <v-file-input
          v-model="form.media"
          class="mx-16 mt-3"
          prepend-icon
          dense
          :label="$t('update')"
          :rules="[rules.required]"
        />

        <v-sheet>
          <div class="text-center">
            <v-btn
              type="submit"
              color="black"
              class="white--text"
              rounded-lg
              :loading="loading"
              :disabled="!valid || loading"
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
import axios from 'axios'
import { toRefs } from 'vue';
export default {
  layout: "hero",
  data() {
    return {
      valid: true,
      loading: false,
      snackbar: false,
      timeout: 2000,
      rules: {
        required: (value) => !!value || this.$t("required"),

        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      form: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        title: "",
        media: true
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
                createJoinUs(
                data: {
                  first_name:"${this.form.firstname}",
                  last_name:"${this.form.lastname}",
                  email:"${this.form.email}",
                  phone: "${this.form.phone}",
                  job_title:"${this.form.title}",
                  cv:"${this.form.media}"
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

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
</style>

<i18n>
{
"en":{
    "notification":"Submitted successfully",
    "first":"First name",
	"last":"Last name",
    "email":"Email",
	"update":"Cv",
	"required":"Required",
    "title":"Join us here",
    "button":"Click here to submit",
    "phone":"Phone Number"
},
"fr":{
    "notification":"Soumis avec succès",
    "first":"Prénom",
	"last":"Nom de famille",
    "email":"Email",
	"update":"Cv",
	"required":"Required",
    "title":"Rejoignez-nous ici",
    "button":"Cliquez ici pour soumettre",
    "phone":"Numéro de téléphone"

}
}
</i18n>
