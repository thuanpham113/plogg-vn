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
              :rules="[rules.required]"
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
            >
              {{ $t("button") }}
            </v-btn>
          </div>
        </v-sheet>
      </v-form>
    </v-col>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  layout: "hero",
  data() {
    return {
      valid: true,
      loading: false,
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
        media: undefined,
        title: "",
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
                  phone_number: "${this.form.phone}",
                  email:"${this.form.email}",
                  job_title:"${this.form.title}"
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
    "first":"First name",
	"last":"Last name",
    "email":"Email",
	"update":"Cv",
    "company":"Company name",
	"required":"Required",
    "title":"Join us here",
    "button":"Click here to submit",
    "phone":"Phone Number"
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
