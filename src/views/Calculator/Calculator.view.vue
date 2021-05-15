<template>
  <Header/>

  <div class="max-w-1600 mx-auto md:flex">
    <div class="w-full md:w-7/20 flex flex-col items-center relative">
      <BenefitName/>

      <BenefitCosts/>

      <Salary/>
    </div>

    <div class="w-full md:w-7/20 flex flex-col items-center relative">
      <DataForCalculations/>

      <EngineOption/>

      <div class="xl:border xl:border-gray-200 xl:bg-gray-200 xl:absolute
                 xl:left-0 lg:h-5/6 top-36"/>
    </div>

    <div class="w-full md:w-1/4 flex flex-col items-center relative">
      <div class="xl:border xl:border-gray-200 xl:bg-gray-200 xl:absolute
                 xl:left-0 lg:h-5/6 top-36"/>
      <ProfitsCalculationSummary/>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/views/Calculator/components/Header.vue';
import BenefitCosts from '@/views/Calculator/components/BenefitCosts.vue';
import DataForCalculations from '@/views/Calculator/components/DataForCalculations.vue';
import EngineOption from '@/views/Calculator/components/EngineOption.vue';
import ProfitsCalculationSummary from '@/views/Calculator/components/ProfitsCalculationSummary.vue';
import Salary from '@/views/Calculator/components/Salary.vue';
import BenefitName from '@/views/Calculator/components/BenefitName.vue';

export default defineComponent({
  components: {
    BenefitName,
    EngineOption,
    Salary,
    ProfitsCalculationSummary,
    Header,
    BenefitCosts,
    DataForCalculations,
  },
});
</script>
