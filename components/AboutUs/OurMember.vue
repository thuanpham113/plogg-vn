<template>
    <v-sheet>
        <div :class="
            $vuetify.breakpoint.smAndDown
                ? 'h5 font-weight-bold text-center py-9'
                : 'h3 justify-end pl-10 font-weight-bold '
        ">
            {{ $t("title") }}
        </div>
        <v-row>
            <v-hover v-for="(form, index) in forms" :key="index">
                <template #default="{ hover }">
                    <v-card  data-aos="zoom-out-down"  data-aos-duration="1000" class="rounded-xl"
                    :class="$vuetify.breakpoint.smAndDown
                            ? ' my-4 mx-auto'
                            : ' mx-auto ma-12 '" >
                        <v-img contain height="300px" width="400px" :src="form.imgs" />
                        <v-card-text class="text-center font-weight-bold">
                            <h2 class="text-h5 black--text">
                                {{ form.Name }}
                            </h2>
                            <h3>{{ form.Position }}</h3>
                        </v-card-text>

                        <v-fade-transition>
                            <v-overlay v-if="hover" absolute color="#036358">
                                <v-btn :href="form.links">{{
                                    $t("see")
                                }}</v-btn>
                            </v-overlay>
                        </v-fade-transition>
                    </v-card>
                </template>
            </v-hover>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            forms: [
                {
                    imgs: "/AI/ducanh.jpg",
                    Name: "Mr. Le Duc Anh ",
                    Position: "CEO",
                },
                {
                    imgs: "/AI/philippe.jpg",
                    Name: "Mr. Philippe Marchesseault ",
                    Position: "CEO",
                },
                {
                    imgs: "/AI/eddine.jpg",
                    Name: "Mr. Eddine Alimat ",
                    Position: "President Synode",
                },
                {
                    imgs: "/AI/maxine.jpg",
                    Name: "Mr. Maxime ",
                    Position: "Chief Technology Officer",
                },
                {
                    imgs: "/AI/Ph???m Nguy???n Thu???n.png",
                    Name: "Mr. Thuan Pham",
                    Position: this.$t("director"),
                },
                {
                    imgs: "/avt3.jpg",
                    Name: "Mr. Duy Minh",
                    Position: this.$t("develop"),
                },

                {
                    imgs: "/AI/Duy Quang.png",
                    Name: "Mr. Quang Duy",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/H?? Tu???n Ki???t.png",
                    Name: "Mr. Kiet Ha ",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/????? Duy Khang.png",
                    Name: "Mr. Khang Do",
                    Position: this.$t("develop"),
                },

                {
                    imgs: "/AI/????? ????ng Tr??nh.png",
                    Name: "Mr. Trinh Do",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/D????ng B???o Nam.png",
                    Name: "Mr. Nam Duong",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/T???n ?????t L??.png",
                    Name: "Mr. Dat Le",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/Thanh S??n.png",
                    Name: "Mr. Son Thanh",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/Tr???n Nguy???n Nh???t Quang.png",
                    Name: "Mr. Quang Tran",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/Nguy???n Qu???c Ho??ng Anh.png",
                    Name: "Mr. Anh Nguyen ",
                    Position: this.$t("develop"),
                },
                {
                    imgs: "/AI/Ph???m Thanh Th???o.png",
                    Name: "Mr. Thao Pham ",
                    Position: this.$t("develop"),
                },
            ],
            headers: [
                { imgs: "/About_Us/item1.jpeg", link: "" },
                { imgs: "/About_Us/item2.jpeg", link: "" },
                { imgs: "/About_Us/item3.jpeg", link: "" },
                { imgs: "/About_Us/item4.jpeg", link: "" },
                { imgs: "/About_Us/item5.jpeg", link: "" },
                { imgs: "/About_Us/item6.jpeg", link: "" },
                { imgs: "/About_Us/item5.jpeg", link: "" },
                { imgs: "/About_Us/item8.jpeg", link: "" },
            ],

        };
    },

};
</script>
<i18n>
    {
        "en": {
            "title": "Our members",
            "see":"See more info",
            "director":"Executive Director",
            "develop":"Software Development Directors"
        },

        "fr": {
            "title" : "Nos membres",
            "see":"Voir plus d'informations",
            "director":"Directeur ex??cutif",
            "develop":"Directeurs du d??veloppement logiciel"
        }

     }
 </i18n>
