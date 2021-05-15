<template>
  <div class="w-full max-w-440 mx-auto px-8 md:mx-0">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['order'],
});
</script>
