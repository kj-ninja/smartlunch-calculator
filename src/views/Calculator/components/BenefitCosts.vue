<template>
  <SectionWrapper>
    <SectionBarTitle section="benefitCosts"/>

    <div v-if="isVehicle"
         class="flex justify-between items-center px-10 mb-16">
      <div class="flex flex-col w-5/12">

        <span class="text-base font-600 text-secondary">
          {{ $t('calculator.benefitCosts.employerCost') }}
        </span>

        <span class="text-12 font-400 text-black">
          {{ $t('calculator.benefitCosts.employerCostDesc') }}
        </span>
      </div>

      <span class="text-14 h-32 w-136 border-solid border-2 border-gray-500 rounded-3xl py-5 px-12
                  bg-gray-200 md:w-150">
        {{
          `${overallBenefitCost.toFixed(2)} ${$t('calculator.currency')}`
        }}
      </span>
    </div>

    <div v-if="isVehicle"
         class="flex justify-between items-center px-10 mb-16">
      <div class="flex flex-col w-5/12">

        <span class="text-base font-600 text-secondary">
          {{ $t('calculator.benefitCosts.employeeCost') }}
        </span>

        <span class="text-12 font-400 text-black">
          {{ $t('calculator.benefitCosts.employeeCostDesc') }}
        </span>
      </div>

      <span class="text-14 h-32 w-136 border-solid border-2 border-gray-500 rounded-3xl py-5 px-12
                  bg-gray-200 md:w-150">
        {{
          `${employeeCost.toFixed(2)} ${$t('calculator.currency')}`
        }}
      </span>
    </div>

    <InputsField v-else sectionName="benefitCosts" :sectionData="benefitCosts"/>

    <OverallBenefitCosts/>

    <ErrorField :sectionError="costsError"/>
  </SectionWrapper>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import SectionBarTitle from '@/views/Calculator/components/shared/SectionBarTitle.vue';
import InputsField from '@/views/Calculator/components/shared/InputsField.vue';
import ErrorField from '@/views/Calculator/components/shared/ErrorField.vue';
import OverallBenefitCosts from '@/views/Calculator/components/OverallBenefitCosts.vue';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import { benefitCosts } from '../variables';

export default defineComponent({
  components: {
    SectionWrapper,
    ErrorField,
    SectionBarTitle,
    InputsField,
    OverallBenefitCosts,
  },
  setup() {
    const store = useStore();
    const costsError = computed(() => store.state.benefitCosts.costsError);
    const isVehicle = computed(() => store.state.vehicle.isVehicle);
    const overallBenefitCost = computed(() => store.getters.overallBenefitCost);
    const employeeCost = computed(() => store.state.benefitCosts.employeeCost);

    return {
      benefitCosts,
      costsError,
      isVehicle,
      overallBenefitCost,
      employeeCost,
    };
  },
});
</script>
