<template>
  <div class="w-full max-w-4xl px-5 h-208">
    <div class="flex text-13 justify-between mb-16">
      <span class="">{{ $t('calculator.summary.benefitName') }}:</span>

      <span class="text-secondary font-600 pl-4">{{ name }}</span>
    </div>

    <div class="flex text-13 justify-between mb-16">
      <span class="">{{ $t('calculator.summary.employeeSalary') }}:</span>

      <span class="text-primary font-600 pl-4">
        {{ `${employeesNetSalaryWithBenefit.toFixed(2)} ${$t('calculator.currency')}` }}
      </span>
    </div>

    <div class="flex text-13 justify-between mb-16">
      <span class="">{{ $t('calculator.summary.zusCost') }}:</span>

      <span class="text-secondary font-600 pl-4">
        {{ `${deductedZus.toFixed(2)} ${$t('calculator.currency')}` }}
      </span>
    </div>

    <div class="flex text-13 justify-between mb-16">
      <span class="">{{ $t('calculator.summary.taxAmount') }}:</span>

      <span class="text-secondary font-600 pl-4">
        {{ `${deductedTax.toFixed(2)} ${$t('calculator.currency')}` }}
      </span>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: ['name', 'deductedZus', 'deductedTax'],
  setup() {
    const store = useStore();

    const employeesNetSalaryWithBenefit = computed(() => (
      store.state.calculations.employeesNetSalaryWithBenefit));

    return { employeesNetSalaryWithBenefit };
  },
});
</script>
