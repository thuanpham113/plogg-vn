<template>
    <v-sheet
        :class="
            $vuetify.breakpoint.smAndDown ? 'mx-2': ''"
    >
        <div
            :class="
                $vuetify.breakpoint.smAndDown
                    ? 'h5 mt-2 font-weight-bold text-center'
                    : 'h3 justify-start font-weight-bold '
            "
        >
            {{ $t("title") }}
        </div>
        <v-slide-group
            center-active
            show-arrows
            v-model="current"
            :class="
                $vuetify.breakpoint.smAndDown ? '' : 'pa-5 mt-12'
            "
        >
            <v-slide-item
                disabled
                v-for="(header, index) in headers"
                :key="index"
            >
                <v-card elevation="0" height="200" width="400">
                    <v-img contain :src="header.imgs" />
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>
<script>
export default {
    data () { return{
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
            current: 1,
            interval: undefined,
			direction: 1,
			slideInterval: 2,
    }
    
    },
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
	

    aos: {
      type: String,
      default: undefined,
    },
  }
</script>
<i18n>
    {
        "en": {
            "title" : "Our achievements"
        },
        "fr": {
            "title": "Nos réalisations"

        }
 
     }
 </i18n>