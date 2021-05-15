<template>
  <div :id="data.name"
       v-for="(data, index) in dataForCalculations"
       :key="index"
       class="flex justify-between items-center px-10 mb-14">

    <div class="flex flex-col w-1/2">
      <span class="text-base font-600 text-secondary md:text-16">
        {{ $t(`calculator.${data.section}.${data.name}.title`) }}
      </span>

      <span class="text-12 font-400 text-black">
        {{ $t(`calculator.${data.section}.${data.name}.description`) }}
      </span>
    </div>

    <div class="flex items-center w-1/3 justify-between">

      <RadioOptionButton :name="data.name"
                         :value="data.optionA.value"
                         :content="data.optionA.content"/>

      <RadioOptionButton :name="data.name"
                         :value="data.optionB.value"
                         :content="data.optionB.content"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import RadioOptionButton from '@/views/Calculator/components/shared/RadioOptionButton.vue';

export default defineComponent({
  props: ['dataForCalculations'],
  components: {
    RadioOptionButton,
  },
});
</script>
