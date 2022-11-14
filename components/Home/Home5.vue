<template>
  <v-sheet class="ma-6" max-width="100%">
    <h1 class="font-weight--bold d-flex align-center justify-center">
      Our Partners
    </h1>

    <v-slide-group light v-model="current" class="pa-4" center-active show-arrows>
      <v-slide-item v-for="(header, index) in headers" :key="index" :class="$vuetify.breakpoint.smAndDown">
        <v-card elevation="0" class="ma-4" height="200" width="400">
          <a :href="header.link">
            <v-img width="300" class="ma-8" :src="header.imgs" />
          </a>
        </v-card>
      </v-slide-item>
    </v-slide-group>

  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { imgs: "/logo/iq.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/afmq.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/expeco.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/plogg.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/mrc-memphremagog.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/magog-technopole.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/mrc-memphremagog.png", link: "https://www.facebook.com/" },
      { imgs: "/logo/stiq.png", link: "https://www.stiq.com/" },
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