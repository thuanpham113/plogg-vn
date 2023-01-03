<template>
  <v-layout column align-center class="py-16">
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
            :rules="[$rules.required]"
          />
          <v-text-field :label="$t('last')" :rules="[$rules.required]" />
        </v-row>
        <v-row class="mx-16">
          <v-text-field
            class="mr-10"
            :label="$t('email')"
            :rules="[$rules.required, $rules.email]"
          />
          <v-text-field
            class="mt-2"
            :label="$t('phone')"
            :rules="[$rules.required, $rules.phone]"
          />
        </v-row>
        <v-text-field
          class="mx-16 mt-2"
          :label="$t('Company name')"
          :rules="[$rules.required]"
        />
        <v-autocomplete
          class="mx-16"
          ref="selected"
          v-model="selected"
          :items="orderStatuses"
          :rules="[() => !!selected || 'This field is required']"
          label="Industry"
          placeholder="Select..."
          item-text="label"
          item-value="value"
        ></v-autocomplete>
      </v-sheet>
      <v-sheet>
        <div class="text-center">
          <v-btn
            color="black"
            class="white--text"
            rounded-lg
            :loading="loading"
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
  data() {
    return {
      loader: null,
      loading: false,
      orderStatuses: [
        {
          label: this.$t("orderStatuses.healthcare"),
          value: "healthcare",
        },
        {
          label: this.$t("orderStatuses.retail"),
          value: "retail",
        },
        {
          label: this.$t("orderStatuses.hr"),
          value: "hr",
        },
        {
          label: this.$t("orderStatuses.marketing"),
          value: "marketing",
        },
        {
          label: this.$t("orderStatuses.customer"),
          value: "customer",
        },
        {
          label: this.$t("orderStatuses.secutity"),
          value: "secutity",
        },
      ],

      data() {
        return {
          loader: null,
          loading: false,
          orderStatuses: [
            {
              label: this.$t("orderStatuses.healthcare"),
              value: "healthcare",
            },
            {
              label: this.$t("orderStatuses.retail"),
              value: "retail",
            },
            {
              label: this.$t("orderStatuses.hr"),
              value: "hr",
            },
            {
              label: this.$t("orderStatuses.marketing"),
              value: "marketing",
            },
            {
              label: this.$t("orderStatuses.customer"),
              value: "customer",
            },
            {
              label: this.$t("orderStatuses.secutity"),
              value: "secutity",
            },
          ],
        };
      },
      methods: {
        buttonClick() {
          this.loading = true;
          const timeout = setTimeout(() => {
            this.loading = false;
            clearTimeout(timeout);
          }, 3000);
        },
        showButton() {
          if (this.values.length != 0) {
            return false;
          }
          return true;
        },
      },
    };
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
    "title":"Collaborate here",
    "button":"Click here to submit",
	"first":"First name",
	"last":"Last name",
    "email":"Email",
	"phone":"Phone number",
    "company":"Company name",
	"required":"Required",
	"orderStatuses": {
            "healthcare" : "Healthcare",
            "retail" : "Retail",
            "hr" : "HR",
			"marketing" : "Marketing",
            "customer": "Customer service ",
            "secutity": "IT Secutity"
        }
	},
"fr":{
	"title":"Collaborez ici",
    "button":"Cliquez ici pour soumettre",
	"first":"Prénom",
	"last":"Nom de famille",
    "email":"E-mail",
	"phone":"Numéro de téléphone",
    "company":"Nom de l'entreprise",
	"required":"obligatoire",
	"orderStatuses": {
            "healthcare" : "Soins de santé",
            "retail" : "Détail",
            "hr" : "HEURE",
			"marketing" : "Commercialisation",
            "customer": "Service Clients ",
            "secutity": "Sécurité informatique"
        }
}
}
</i18n>