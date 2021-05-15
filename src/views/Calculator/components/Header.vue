<template>
  <div class="w-full text-primaryText flex flex-col items-center md:items-start
              mb-32 max-w-1550 md:mx-auto md:px-16">
    <p class="text-20 font-600 text-primary leading-12 md:leading-15">
      {{ $t('calculator.header.checkProfit') }}
    </p>

    <h1 class="text-32 font-600 md:text-44 mb-5 leading-15">
      {{ $t('calculator.header.title') }}
    </h1>

    <p class="text-center md:text-base md:text-left font-500 leading-normal max-w-720">
      {{ $t('calculator.header.description') }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
