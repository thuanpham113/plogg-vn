<template>
    <div>
        <v-col>
            <v-layout justify-center data-aos="fade-down" v-if="$vuetify.breakpoint.smAndDown">
                <img contain aspect-ratio="1" :width="
                    $vuetify.breakpoint.smAndDown ? '200' : ''
                " :class="
    $vuetify.breakpoint.smAndDown
        ? 'top-side justify-center'
        : ''
" src="/logowe.jpg" />
            </v-layout>
        </v-col>

        <v-col md="9" v-if="$vuetify.breakpoint.mdAndUp">
            <img data-aos="flip-up" data-aos-duration="500" contain aspect-ratio="1"
                :width="$vuetify.breakpoint.smAndDown ? ' 200' : ''" :class="
                    $vuetify.breakpoint.smAndDown ? '' : 'left-side'
                " src="/logowe.jpg" />
        </v-col>

        <div data-aos="zoom-in-left" data-aos-duration="700" data-aos-delay="250" :class="
            $vuetify.breakpoint.smAndDown
                ? 'h6 text-center font-weight-bold '
                : 'h4 pl-10 text-wrap font-weight-bold'
        ">
            {{ $t("title.1") }}
        </div>

        <div data-aos="fade-down" data-aos-easing="ease-in-side" data-aos-duration="900" data-aos-delay="500"
            class="content">
            <p :class="
                $vuetify.breakpoint.smAndDown
                    ? 'text-center grey--text subtitle-1 mx-6'
                    : ' h6 grey--text mt-10 ma-12'
            ">
                {{ $t("title.2") }}
            </p>
        </div>
    </div>
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
               "1" : "Who are we?",
               "2" : "We are Plogg Vietnam - a branch of Plogg Ca. , established in 2022. Plogg Vietnam is  an International Technology Service Company that provides many professional IT services to support both small business and large coorperations. Plogg Vietnam is specialised in developing websites, softwares, and 3D designs. We are also a one-stop shop that offer a variery of other IT-related services to meet our customers’ needs. "
               }
           

       },
       "fr": {
           "title":{
               "1" : "Qui sommes nous?",
               "2" : "Nous sommes Plogg Vietnam - une partie de Plogg Ca.Nous avons établi en 2022. Plogg Vietnam est un Société internationale de services technologiquesqui se trouve au Vietnam. Nous fournissons de nombreux services informatiques professionnels pour soutenir de la petite entreprise à la grande coopération. Plogg Vietnam est spécialisé dans le développement de sites Web, de logiciels et de conception 3D. Nous fournissons également de nombreux autres services liés à l'informatique pour aider nos clients à atteindre le sommet de la gloire."
               }
       }

    }
</i18n>