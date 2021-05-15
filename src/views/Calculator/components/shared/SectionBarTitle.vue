<template>
  <h2 class="md:text-17 bg-primary text-white text-center font-500 py-4 md:py-4 rounded-xl mb-16">
    {{ $t(`calculator.${section}.title`) }}
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    section: String,
  },
});
</script>
