<template>
    <v-sheet>
        <v-card flat color="transparent" :height="$vuetify.breakpoint.smAndDown ? '' : '80 '" ></v-card>
        <v-layout :class="$vuetify.breakpoint.smAndDown ? '' : 'py-5 mx-15'">
            <template>
                <div >
                    <!-- <v-col >
                        <v-layout justify-center v-if="$vuetify.breakpoint.smAndDown" >
                            <img 
                            contain 
                            aspect-ratio="1" 
                            :width="$vuetify.breakpoint.smAndDown ? '200' : ''" 
                            :class="$vuetify.breakpoint.smAndDown ? 'top-side justify-center' : ''
                            " src="/logowe.jpg" />
                        </v-layout>
                    </v-col> -->

                    <v-layout>
                        <v-col v-if="$vuetify.breakpoint.mdAndUp"
                              md="9">
                            <img contain aspect-ratio="1" 
                                :width="$vuetify.breakpoint.smAndDown ? '200' : ''" 
                                :class="$vuetify.breakpoint.smAndDown ? '' : 'left-side'"
                                src="/logowe.jpg" />
                        </v-col>
    
                        <div :class="$vuetify.breakpoint.smAndDown
                                ? 'h5 text-center font-weight-bold '
                                : 'h3 pl-10 text-wrap '">
                            {{ $t("title.1") }}
                        </div>
                    </v-layout>
                    
                    <div class="content mx-lg-6">
                         <p class="text-h5"
                            >
                            {{ $t("title.2") }}
                        </p>
                    </div>
                </div>
            </template>
        </v-layout>


        <v-img contain :width="$vuetify.breakpoint.smAndDown ? '100%' : '100vw'" src="/we1.jpg" />
        <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'mx-5' : 'px-16'">
            <template>
                <div :class="$vuetify.breakpoint.smAndDown ? 'py-9' : 'py-16 mx-10'">
                    <div
                        :class="$vuetify.breakpoint.smAndDown ? 
                        'h5 font-weight-bold text-center' : 'h3 front-weight-black '">
                        {{ $t("title.3") }}
                    </div>

                    <div :class="$vuetify.breakpoint.smAndDown ? 
                        'subtitle-1 grey--text text-center' : 'h6 grey--text'">
                        {{ $t("title.4") }}
                    </div>
                </div>

                <v-col :class="$vuetify.breakpoint.smAndDown ? 'text-center' : 'mx-5 pb-9 '">
                    <div :class="$vuetify.breakpoint.smAndDown ? 
                        'h5 font-weight-bold' : 'h3 front-weight-black'">
                            {{ $t("title.5") }}
                    </div>
                    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
                        <div :class="$vuetify.breakpoint.smAndDown ? 
                        'subtitle-1 grey--text' : 'h6 grey--text'">
                             {{ $t("title.6") }}
                        </div>
                    </v-col>
                </v-col>
            </template>

            <template>
                <v-sheet class="d-flex flex-column flex-md-row align-center justify-center my-9">
                    <v-img  :max-width="$vuetify.breakpoint.smAndDown ? '60%' : '35%'" contain
                        src="/service.jpg" />

                    <div :class="['d-flex flex-column',
                        $vuetify.breakpoint.smAndDown
                            ? 'black--text'
                            : 'black--text align-end w-55 '
                    ]">
                        <div :class="
                            $vuetify.breakpoint.smAndDown
                                ? 'h5  text-center font-weight-bold'
                                : 'h3  text-end   '
                        ">
                            {{ $t("title.7") }}
                        </div>

                        <div :class="
                            $vuetify.breakpoint.smAndDown
                                ? 'mt-2  text-center grey--text'
                                : 'h6 text-end pt-2 grey--text'
                        ">
                            {{ $t("title.8") }}
                        </div>
                    </div>
                </v-sheet>
            </template>

            <template>
                <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'mx-2' : ' mx-8 pl-2 py-5'" max-width="100%">
                    <div :class="
                        $vuetify.breakpoint.smAndDown
                            ? 'h5 mt-2 font-weight-bold text-center'
                            : 'h3 justify-start  '
                    ">
                        {{ $t("title.9") }}
                    </div>
                    <v-slide-group v-model="current" :class="$vuetify.breakpoint.smAndDown ? '' : 'pa-5 mt-12'"
                        center-active show-arrows>
                        <v-slide-item disabled v-for="(header, index) in headers" :key="index">
                            <v-card elevation="0" height="200" width="400">
                                <v-img contain :src="header.imgs" />
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </template>
        <template>
            <rely-layout-page>
                <div :class="
                    $vuetify.breakpoint.smAndDown
                        ? 'h5 font-weight-bold text-center py-9'
                        : 'h3 justify-end pl-10  '
                ">
                    {{ $t("title.10") }}
                </div>
                <v-row classgit="justify-center">
                    <v-hover v-for="(form, index) in forms" :key="index">
                        <template #default="{ hover }" >
                            <v-card
                                :class="$vuetify.breakpoint.smAndDown ? '' : ' mx-auto ma-12 '"
                                :max-width="$vuetify.breakpoint.smAndDown ? '' : '400'"
                                class="rounded-xl">
                                <v-img contains height="300px" width="400px" :src="form.imgs"/>
                                <v-card-text class="text-center font-weight-bold">
                                    <h2 class="text-h5 black--text">
                                        {{ form.text1 }}
                                    </h2>
                                    <h3>{{ form.text2 }}</h3>
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
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        forms: [
            {
                imgs: "/AI/Lê Đức Anh.png",
                text1: "Mr. Le Duc Anh ",
                text2: "CEO",
            },
            {
                imgs: "/AI/Phạm Nguyễn Thuận.png",
                text1: "Mr. Thuan Pham",
                text2: "Executive Director",
            },
            {
                imgs: "/avt3.jpg",
                text1: "Mr. Duy Minh",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Hà Tuấn Kiệt.png",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Duy Quang.png",
                text1: "Mr. Quang Duy",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Hà Tuấn Kiệt.png",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Đỗ Duy Khang.png",
                text1: "Mr. Khang Do",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Hà Tuấn Kiệt.png",
                text1: "Mr. Kiet Ha ",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Đỗ Đăng Trình.png",
                text1: "Mr. Trinh Do",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Dương Bảo Nam.png",
                text1: "Mr. Nam Duong",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Tấn Đạt Lê.png",
                text1: "Mr. Dat Le",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Thanh Sơn.png",
                text1: "Mr. Son Thanh",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Trần Nguyễn Nhật Quang.png",
                text1: "Mr. Quang Tran",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Nguyễn Quốc Hoàng Anh.png",
                text1: "Mr. Anh Nguyen ",
                text2: "Software Development Directors",
            },
            {
                imgs: "/AI/Phạm Thanh Thảo.png",
                text1: "Mr. Thao Pham ",
                text2: "Software Development Directors",
            },
        ],
        headers: [
            { imgs: "/item1.jpeg", link: "" },
            { imgs: "/item2.jpeg", link: "" },
            { imgs: "/item3.jpeg", link: "" },
            { imgs: "/item4.jpeg", link: "" },
            { imgs: "/item5.jpeg", link: "" },
            { imgs: "/item6.jpeg", link: "" },
            { imgs: "/item5.jpeg", link: "" },
            { imgs: "/item8.jpeg", link: "" },
        ],

        current: 1,
        interval: undefined,
        direction: 1,
        slideInterval: 2,
    }),
    created() {
        this.interval = setInterval(() => {
            if (
                this.current === 0 ||
                this.current === this.headers.length - 1
            ) {
                this.direction *= -1;
                this.current += this.direction;
            } else {
                this.current += this.direction;
            }
        }, this.slideInterval * 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>

<style lang="scss">
.left-side {
    float: right;
    width: 50%;
    height: 50%;
}

</style>
<i18n>
   {
       "en": {
           "title":{
               "1" : "Who are we?",
               "2" : "We are Plogg Vietnam - a branch of Plogg Ca. , established in 2022. Plogg Vietnam is  an International Technology Service Company that provides many professional IT services to support both small business and large coorperations. Plogg Vietnam is specialised in developing websites, softwares, and 3D designs. We are also a one-stop shop that offer a variery of other IT-related services to meet our customers’ needs. ",
               "3" : "We are Plogg Team!",
               "4" : "We are relentlessly working to bring you the most suitable software solutions. We always believe that a successful product will not only solve the customers’ initial concerns but also contributes to the advancement of their businesses. Functional products, satisfied customers, and flourishing businesses are our company’s missions and ideals. ",
               "5" : "Our mission",
               "6" : "We bring the most professional IT services to support businesses meet their success by creating the optional solution and providing high-quality technology to exceed customers' expectation. ",
               "7":"Our vision",
                "8":"Plogg Vietnam aims to become one of the highest quality IT service providers in the world. In the next 5 years, we will extend our outsourcing to leading countries such as UK, USA, Australia, New Zealand, Singapore, etc. And Plogg Vietnam will become a leading prestigious and reliable partner in the IT service fields all over the world.",
               "9" : "Our achievements",
               "10" : "Our members"
               },
            "position" : {
                "1": "Executive Director"
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
               "7":"Notre vision",
               "8":"Plogg Vietnam vise à devenir l'un des fournisseurs de services informatiques de la plus haute qualité au monde. Au cours des 5 prochaines années, nous étendrons notre externalisation à des pays leaders tels que le Royaume-Uni, les États-Unis, l'Australie, la Nouvelle-Zélande, Singapour, etc. Et Plogg Vietnam deviendra un partenaire prestigieux et fiable dans les domaines des services informatiques dans le monde entier.",
               "9" : "Nos réalisations",
               "10" : "Nos membres"
               },
            "position" : {
                "1": "Directeur exécutif"
                
            }
       }

    }
</i18n>
