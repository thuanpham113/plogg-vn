<template>
    <v-sheet>
        <v-layout class="py-16 ma-16">
            <template>
                <div class="black--text py-16 px-16  ">
                    <v-col cols="9" class="ml-16 pt-16 pl-16  ">
                        <img class="left-side " src="/logowe.jpg" />
                    </v-col>
                    <v-card-title class="content">
                        <v-sheet class="h3 ml-7 text-wrap ">
                            {{ $t("title.1") }}
                        </v-sheet>
                    </v-card-title>
                    <div class="content">
                        <p class="h6 grey--text mt-10 ma-12 ">{{ $t("title.2") }}</p>
                    </div>
                </div>
            </template>
        </v-layout>

        <v-img contain :width="$vuetify.breakpoint.smAndDown ? '50%' : '100vw'" src="/we1.jpg" />
        <template>
            <v-col class="ma-16 px-16 py-16">
                <v-card-title class="d-flex justify-start">
                    <div :class="'h3 front-weight-black ml-2'">
                        {{ $t("title.3") }}
                    </div>
                </v-card-title>
                <v-card-title class="d-flex justify-start mt-3">
                    <v-col cols="11">
                        <div :class="'h6 grey--text'">
                            {{ $t("title.4") }}
                        </div>
                    </v-col>
                </v-card-title>
            </v-col>

            <v-col cols="11" class="ma-16 px-16">
                <v-card-title class="d-flex justify-start  ">
                    <div :class="'h3 front-weight-black ml-2'">
                        {{ $t("title.5") }}
                    </div>
                </v-card-title>
                <v-card-title class="d-flex justify-start mt-3">
                    <v-col cols="6">
                        <div :class="'h6 grey--text'">
                            {{ $t("title.6") }}
                        </div>
                    </v-col>
                </v-card-title>
            </v-col>
        </template>

        <template>
            <v-sheet class="d-flex flex-column flex-md-row align-center px-14 justify-center">
                <v-img class="" aspect-ratio="1" max-width="30%" max-height="50%" src="/home2.jpg" />
                <v-layout
                    :style="$vuetify.breakpoint.smAndDown ? 'max-width: 80%' : 'max-width: 60%'" column
                    :class="$vuetify.breakpoint.smAndDown ? 'black--text' : 'black--text pl-11'">

                    <v-col class="justify-end">
                        <v-card-title
                        :class="$vuetify.breakpoint.smAndDown
                         ? 'h6 font-weight-bold text-center '
                         : 'h3 justify-end '
                         ">
                            {{ $t("title.1") }}
                        </v-card-title>
                    </v-col>

                    <v-col  class="grey--text">
                        <v-card-title outlined tile
                        :class=" $vuetify.breakpoint.smAndDown
                                ? 'mt-2  text-center'
                                : 'pb-16 h6 justify-end align-center '
                        ">
                            {{ $t("title.2") }}
                        </v-card-title>
                    </v-col>
                </v-layout>
            </v-sheet>
        </template>

        <template>
            <v-sheet class="px-11 ma-12 py-5" max-width="100%">
                <v-card-title :class="$vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'h3 justify-start pl-16  '">
                    {{ $t("title.9") }}
                </v-card-title>
                <v-slide-group v-model="current" class="pa-5 mt-12" center-active show-arrows>
                    <v-slide-item disabled v-for="(header, index) in headers" :key="index"
                        :class="$vuetify.breakpoint.smAndDown">
                        <v-card elevation="0" class="" height="200" width="450">
                            <a :href="header.link">
                                <v-img width="100%" class="" :src="header.imgs" />
                            </a>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </template>

        <template>
            <rely-layout-page>
                <v-card-title
                    :class="$vuetify.breakpoint.smAndDown ? 'mt-2  text-center' : 'h3 justify-end mr-16 px-16 pt-16'">
                    {{ $t("title.10") }}
                </v-card-title>
                <v-row class="mx-16 ma-16 ">
                    <v-hover v-for="(form, index) in forms" :key="index">
                        <template  v-slot:default="{ hover }">
                            <v-card :class="$vuetify.breakpoint.smAndDown ? 'ma-8' : ' mx-auto ma-12 '"
                                :max-width="$vuetify.breakpoint.smAndDown ? '' : '400'">
                                <v-img  contains height="300px" width="400px" :src="form.imgs">
                                </v-img>

                                <v-card-text class="text-center font-weight-bold">
                                    <h2 class="text-h5 black--text ">
                                        {{ form.text1 }}
                                    </h2>
                                    <h3> {{ form.text2 }} </h3>

                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay v-if="hover" absolute color="#036358">
                                        <v-btn :href="form.links">See more info</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-row>

            </rely-layout-page>
        </template>
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        forms: [
            {
                imgs: "/avt1.jpg",
                text1: "Mr. Le Duc Anh ",
                text2: "CEO",
                links: "https://www.facebook.com/yunbray",
            },
            {
                imgs: "/avt2.jpg",
                text1: "Mr. Thuan Pham",
                text2: "Excutive Director",
                links: "https://www.facebook.com/denvau",
            },
            {
                imgs: "/avt3.jpg",
                text1: "Mr. Duy Minh",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/MTP.Fan",
            },
            {
                imgs: "/avt4.jpg",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/HVNS.Hoaminzy",
            },
            {
                imgs: "/avt3.jpg",
                text1: "Mr. Duy Minh",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/MTP.Fan",
            },
            {
                imgs: "/avt4.jpg",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/HVNS.Hoaminzy",
            },
            {
                imgs: "/avt3.jpg",
                text1: "Mr. Duy Minh",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/MTP.Fan",
            },
            {
                imgs: "/avt4.jpg",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
                links: "https://www.facebook.com/HVNS.Hoaminzy",
            }
        ],
        headers: [
            { imgs: "/item1.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item2.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item3.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item4.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item5.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item6.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item5.jpeg", link: "https://www.facebook.com/" },
            { imgs: "/item8.jpeg", link: "https://www.stiq.com/" },
        ],

        current: 1,
        interval: undefined,
        direction: 1,
        slideInterval: 2
    }),
    created() {
        this.interval = setInterval(() => {
            if (this.current === 0 || this.current === this.headers.length - 1) {
                this.direction *= -1
                this.current += this.direction
            } else {
                this.current += this.direction
            }

        }, this.slideInterval * 1000)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
};
</script>

<style lang="scss">
.left-side {
    float: right;
    width: 50%;
    height: 50%;

}

.content img {
    // max-width: 30%;
}
</style>
<i18n>
   {
       "en": {
           "title":{
               "1" : "Who are we?",
               "2" : "We are Plogg Vietnam - a part of Plogg Ca. We established in 2022. Plogg Vietnam is anInternational Technology Service Company which located in Vietnam. We provides many professional IT services to support from small business to large coroperation. Plogg Vietnam is specialised in developing website, software, and designing 3D. We also provide many more services related to IT to help our customers reach the pinnacle of glory.",
               "3" : "We are Plogg Team!",
               "4" : "We are always working to bring you the most suitable software solutions.We always believe that a successful product must help customers solve current problems, and further, contribute to the development of their businesses. Useful products, satisfied customers, growing businesses, are our service roadmap.",
               "5" : "Our mission",
               "6" : "We bring the most professional IT services to support businesses meet their success by creating the optional solution and providing high-quality technology to exceed customers' expectation. ",
               "9" : "Our achievements",
               "10" : "Our members"
               }
       },
       "fr": {
           "title":{
               "1" : "Qui sommes nous?",
               "2" : "Nous sommes Plogg Vietnam - une partie de Plogg Ca.Nous avons établi en 2022. Plogg Vietnam est un Société internationale de services technologiquesqui se trouve au Vietnam. Nous fournissons de nombreux services informatiques professionnels pour soutenir de la petite entreprise à la grande coopération. Plogg Vietnam est spécialisé dans le développement de sites Web, de logiciels et de conception 3D. Nous fournissons également de nombreux autres services liés à l'informatique pour aider nos clients à atteindre le sommet de la gloire.",
               "3" : "Nous sommes l'équipe Plogg !",
               "4" : "Nous travaillons toujours pour vous apporter les solutions logicielles les plus adaptées. Nous croyons toujours qu'un produit performant doit aider les clients à résoudre les problèmes actuels et, en outre, contribuer au développement de leurs activités. Des produits utiles, des clients satisfaits, des entreprises en croissance, sont notre feuille de route de service.",
               "5" : "Notre mission",
               "6" : "Nous apportons les services informatiques les plus professionnels pour aider les entreprises à réussir en créant la solution optionnelle et en fournissant une technologie de haute qualité pour dépasser les attentes des clients.",
               "9" : "Nos réalisations",
               "10" : "Nos membres"
               }
       }

    }
</i18n>
