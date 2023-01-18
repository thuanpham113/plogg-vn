<template>
  <v-sheet :data-aos="aos" data-aos-duration="900" :data-aos-easing="easing">
    <div
      class="font-weight-bold text-center mt-7 text-sm-h6 text-md-h4 my-md-6"
    >
      {{ title }}
    </div>
    <v-layout
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'd-flex flex-column mx-16'
          : 'px-16 ml-16'
      "
      style="max-width: 80%"
    >
      <slot />
    </v-layout>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requried: true,
    },
    aos: {
      type: String,
      default: undefined,
    },
    easing: {
      type: String,
      default: undefined,
    },
  },
};
</script>
