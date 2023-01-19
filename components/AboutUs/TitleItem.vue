<template>
    <v-sheet
        class="d-flex flex-column flex-md-row align-center justify-center my-9 mt-16"
    >
        <v-img data-aos="zoom-in-left"
            :max-width="
                $vuetify.breakpoint.smAndDown ? '60%' : '35%'
            "
            contain
            src="/OurServices//service.jpg"
        />

        <div data-aos="zoom-in-left "  data-aos-duration="900"
            :class="[
                'd-flex flex-column',
                $vuetify.breakpoint.smAndDown
                    ? 'black--text'
                    : 'black--text align-end w-55 ',
            ]"
        >
            <div data-aos="zoom-in-left"
                :class="
                    $vuetify.breakpoint.smAndDown
                        ? 'h5  text-center font-weight-bold'
                        : 'h3 font-weight-bold'
                "
            >
                {{ $t("title.1") }}
            </div>

            <div data-aos="zoom-in-left"
            data-aos-duration="900"
                :class="
                    $vuetify.breakpoint.smAndDown
                        ? 'mt-2  text-center grey--text'
                        : 'h6 text-end pt-2 ml-12 grey--text'
                "
            >
                {{ $t("title.2") }}
            </div>
        </div>
    </v-sheet>
</template>


<script>
export default {
    aos: {
      type: String,
      default: undefined,
    },
  }
</script>
<i18n>
    {
        "en": {
            "title":{
                "1":"Our vision",
                "2":"Plogg Vietnam aims to become one of the highest quality IT service providers in the world. In the next 5 years, we will extend our outsourcing to leading countries such as UK, USA, Australia, New Zealand, Singapore, etc. And Plogg Vietnam will become a leading prestigious and reliable partner in the IT service fields all over the world."
               
                }
            
        },
        "fr": {
            "title":{
                "1":"Notre vision",
                "2":"Plogg Vietnam vise à devenir l'un des fournisseurs de services informatiques de la plus haute qualité au monde. Au cours des 5 prochaines années, nous étendrons notre externalisation à des pays leaders tels que le Royaume-Uni, les États-Unis, l'Australie, la Nouvelle-Zélande, Singapour, etc. Et Plogg Vietnam deviendra un partenaire prestigieux et fiable dans les domaines des services informatiques dans le monde entier."
            }
        }
     }
 </i18n>