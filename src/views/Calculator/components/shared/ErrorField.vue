<template>
  <div class="h-12 mb-24">
    <transition name="fade">
      <p class="text-xs text-red px-10 pt-1 text-right" v-if="sectionError">
        {{ $t('calculator.errorCostsText') }}
      </p>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['sectionError'],
});
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
