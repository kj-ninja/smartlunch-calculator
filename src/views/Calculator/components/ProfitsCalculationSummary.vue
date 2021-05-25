<template>
  <div class="w-full max-w-500 mx-auto px-8 md:mx-0 order-6 flex flex-col relative">
    <h2 class="text-16 text-center font-600 mb-32">
      {{
        isCalculationValid ?
          $t('calculator.summary.employeeProfits') :
          $t('calculator.summary.title')
      }}
    </h2>

    <transition name="fade-summary" mode="out-in">
      <SummaryData v-if="isCalculationValid"
                   :name="benefitName"
                   :deductedZus="deductedZus"
                   :deductedTax="deductedTax"/>

      <div class="relative w-1/2 h-208 mx-auto" v-else>
        <div id="b1" class="box" :class="{'ani1': isAnimate}"></div>
        <div id="b2" class="box" :class="{'ani2': isAnimate}"></div>
        <div id="b3" class="box" :class="{'ani3': isAnimate}"></div>
        <div id="b4" class="box" :class="{'ani4': isAnimate}"></div>
      </div>
    </transition>

    <button @click="calculateProfits"
            class="bg-secondary text-white w-216 rounded-full py-12 px-6 font-600
                  focus:outline-none mx-auto mt-24 mb-28 shadow-button">
      {{
        isCalculationValid ?
          $t('calculator.summary.calculateAgain') :
          $t('calculator.summary.calculate')
      }}
    </button>

    <div class="hidden md:block w-200 self-end mt-16">
      <img class="w-full z-10" :src="require('../../../assets/grupa.svg')" alt="">
    </div>

    <svg class="absolute hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFAB00" fill-opacity="1" d="M0,320L24,272C48,224,96,128,144,117.3C192,107,240,181,288,176C336,171,384,85,432,58.7C480,32,528,64,576,64C624,64,672,32,720,16C768,0,816,0,864,48C912,96,960,192,1008,218.7C1056,245,1104,203,1152,202.7C1200,203,1248,245,1296,266.7C1344,288,1392,288,1416,288L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import SummaryData from '@/views/Calculator/components/SummaryData.vue';
import { calculationSummary } from '../variables';
import setupErrors from '../helpers';

export default defineComponent({
  components: {
    SummaryData,
  },
  setup() {
    const store = useStore();
    const benefitName = computed(() => store.state.benefitName.benefit);
    const employerCost = computed(() => store.state.benefitCosts.employerCost);
    const employeeCost = computed(() => store.state.benefitCosts.employeeCost);
    const netSalary = computed(() => store.state.salary.netSalary);
    const budget = computed(() => store.state.dataForCalculations.budget);
    const meals = computed(() => store.state.dataForCalculations.meals);
    const tax = computed(() => store.state.dataForCalculations.tax);
    const isVehicle = computed(() => store.state.vehicle.isVehicle);
    const engine = computed(() => store.state.vehicle.engine);
    const daysWithVehicle = computed(() => store.state.vehicle.daysWithVehicle);
    const isBon = computed(() => store.state.dataForCalculations.bon);

    const deductedZus = computed(() => store.state.calculations.deductedZus);
    const deductedTax = computed(() => store.state.calculations.deductedTax);
    const isCalculationValid = computed(() => store.state.calculations.isCalculationValid);
    const isAnimate = computed(() => store.state.calculations.isAnimate);

    // eslint-disable-next-line max-len
    const isValid = computed(() => benefitName.value && employerCost.value !== null && employeeCost.value !== null && netSalary.value !== null && budget.value !== null && meals.value !== null && tax.value !== null && isBon.value !== null && (isVehicle.value === false || (isVehicle.value !== null && engine.value !== null && daysWithVehicle.value !== null)));

    function calculateDeductedZus() {
      let zus: number;

      if (budget.value === 'zfss') {
        return 0;
      }

      if (meals.value) {
        if (employerCost.value <= 190) {
          return 0;
        }
        // eslint-disable-next-line max-len
        zus = (employerCost.value - 190) * 0.1371 + ((employerCost.value - 190) - ((employerCost.value - 190) * 0.1371)) * 0.09;
        return +zus.toFixed(2);
      }

      if (isVehicle.value) {
        // eslint-disable-next-line max-len
        zus = employerCost.value * 0.1371 + (employerCost.value - (employerCost.value * 0.1371)) * 0.09;
        return +zus.toFixed(2);
      }

      if (employeeCost.value > 0) {
        return 0;
      }
      // eslint-disable-next-line max-len
      zus = employerCost.value * 0.1371 + (employerCost.value - (employerCost.value * 0.1371)) * 0.09;
      return +zus.toFixed(2);
    }

    function calculateDeductedTax() {
      let taxAmount: number;

      if (isBon.value) {
        taxAmount = employerCost.value * tax.value;
        return +taxAmount.toFixed(2);
      }

      if (budget.value === 'zfss') {
        if (employerCost.value >= 0 && employerCost.value <= 2000) {
          return 0;
        }

        taxAmount = (employerCost.value - 2000) * tax.value;
        return +taxAmount.toFixed(2);
      }

      if (isVehicle.value || meals.value) {
        taxAmount = employerCost.value * tax.value;
        return +taxAmount.toFixed(2);
      }

      taxAmount = employerCost.value * tax.value;
      return +taxAmount.toFixed(2);
    }

    function calculateEmployeesNetSalaryWithBenefit() {
      // eslint-disable-next-line max-len
      const overAllEmployeeSalary = netSalary.value + employerCost.value - employeeCost.value - deductedZus.value - deductedTax.value;
      return +overAllEmployeeSalary.toFixed(2);
    }

    function getEmployersCostWithVehicle(vehicle: string) {
      let newEmployerCost: number;

      if (vehicle === 'small') {
        newEmployerCost = ((250 / 30) * daysWithVehicle.value);
        return +newEmployerCost.toFixed(2);
      }

      newEmployerCost = ((400 / 30) * daysWithVehicle.value);
      return +newEmployerCost.toFixed(2);
    }

    function calculateProfits() {
      if (!benefitName.value) {
        setupErrors(store, 'benefitName');
      }

      if (employerCost.value === null || employeeCost.value === null) {
        setupErrors(store, 'costs');
      }

      if (!netSalary.value) {
        setupErrors(store, 'salary');
      }

      if (!budget.value || meals.value === null || !tax.value || isBon.value === null) {
        setupErrors(store, 'data');
      }

      // eslint-disable-next-line max-len
      if (isVehicle.value === null || (isVehicle.value === true && (!engine.value || daysWithVehicle.value === null))) {
        setupErrors(store, 'vehicle');
      }

      if (isValid.value) {
        store.commit('setAnimateValid', true);
        setTimeout(() => {
          store.commit('setCalculationValid', true);
        }, 1800);

        if (isVehicle.value) {
          const newEmployerCost = getEmployersCostWithVehicle(engine.value);
          store.commit('setEmployerCost', newEmployerCost);
        }

        const deductedZusAmount = calculateDeductedZus();
        store.commit('setDeductedZus', deductedZusAmount);
        const deductedTaxAmount = calculateDeductedTax();
        store.commit('setDeductedTax', deductedTaxAmount);
        const employeeTotalSalary = calculateEmployeesNetSalaryWithBenefit();

        store.commit('setEmployeesNetSalaryWithBenefit', employeeTotalSalary);
      }
    }

    return {
      calculationSummary,
      deductedZus,
      deductedTax,
      calculateProfits,
      isCalculationValid,
      benefitName,
      isAnimate,
      store,
      isValid,
    };
  },
});
</script>

<style scoped>
.fade-summary-enter-from,
.fade-summary-leave-to {
  opacity: 0;
}

.fade-summary-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-summary-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-summary-enter-to,
.fade-summary-leave-from {
  opacity: 1;
}

svg {
  width: 800px;
  z-index: -1;
  bottom: -30px;
}

.box {
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(348.27deg, #FFAB00 7.03%, rgba(255, 255, 255, 0) 93.41%), #FFC107;
}

.ani1 {
  animation: moveAss1 1.4s 0.3s forwards;
}

.ani2 {
  animation: moveAss2 1.4s 0.3s forwards;
}

.ani3 {
  animation: moveAss3 1.4s 0.3s forwards;
}

.ani4 {
  animation: moveAss4 1.4s 0.3s forwards;
}

@keyframes moveAss1 {
  0%   {top: 0; left: 55px;}
  25%   {top: 5px; left: 99px;}
  50%   {top: 119px; left: 65px;}
  75%   {top: 10px; left: 32px;}
  100%   {top: 0; left: 95px;}
}

@keyframes moveAss2 {
  0%   {top: 68px; left: 0;}
  25%   {top: 66px; left: 10px;}
  50%   {top: 20px; left: 148px;}
  75%   {top: 120px; left: 82px;}
  100%   {top: 83px; left: 23px;}
}

@keyframes moveAss3 {
  0%   {top: 160px; left: 80px;}
  25%   {top: 150px; left: 88px;}
  50%   {top: 20px; left: 99px;}
  75%   {top: 49px; left: 142px;}
  100%   {top: 160px; left: 80px;}
}

@keyframes moveAss4 {
  0%   {top: 138px; left: 44px;}
  25%   {top: 0; left: 60px;}
  50%   {top: 90px; left: 120px;}
  75%   {top: 99px; left: 128px;}
  100%   {top: 120px; left: 134px;}
}

#b1 {
  width: 66px;
  height: 66px;
  left: 55px;
  top: 0;
}

#b2 {
  width: 56px;
  height: 56px;
  left: 0;
  top: 68px
}

#b3 {
  width: 42px;
  height: 42px;
  left: 80px;
  top: 160px
}

#b4 {
  width: 29px;
  height: 29px;
  left: 44px;
  top: 138px
}
</style>
