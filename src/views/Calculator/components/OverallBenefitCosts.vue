<template>
  <div class="input-field-container flex justify-between items-center px-10 mb-16">
    <span class="text-base font-500 text-secondary">
      {{ $t('calculator.benefitCosts.overallCost') }}
    </span>

    <span class="text-14 h-32 w-136 border-solid border-2 border-gray-500 rounded-3xl py-5 px-12
                bg-gray-200 md:w-150">
      {{
        `${overallBenefitCost.toFixed(2)} ${$t('calculator.currency')}`
      }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const overallBenefitCost = computed(() => store.getters.overallBenefitCost);

    return { overallBenefitCost };
  },
});
</script>
