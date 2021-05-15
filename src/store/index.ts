import { createStore } from 'vuex';
import { State } from '@/types';

export default createStore<State>({
  state: {
    benefitName: {
      benefit: null,
      benefitNameError: null,
    },
    benefitCosts: {
      overallCost: null,
      employerCost: null,
      employeeCost: null,
      costsError: null,
    },
    salary: {
      netSalary: null,
      salaryError: null,
    },
    dataForCalculations: {
      budget: null,
      meals: null,
      tax: null,
      dataForCalculationsError: null,
    },
    vehicle: {
      engine: null,
      isVehicle: null,
      daysWithVehicle: null,
      vehicleError: null,
    },
    calculations: {
      deductedZus: null,
      deductedTax: null,
      employeesNetSalaryWithBenefit: null,
      isCalculationValid: false,
      isAnimate: false,
    },
  },
  getters: {
    overallBenefitCost(state) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return state.benefitCosts.employerCost + state.benefitCosts.employeeCost;
    },
  },
  mutations: {
    onInputChange(state, payload: { option: string, name: string, value: string }) {
      switch (payload.option) {
        case 'benefitName':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.benefitName[payload.name] = payload.value;
          break;
        case 'benefitCosts':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.benefitCosts[payload.name] = +payload.value;
          break;
        case 'salary':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.salary[payload.name] = +payload.value;
          break;
        case 'vehicle':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.vehicle[payload.name] = +payload.value;
          break;
        default:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.dataForCalculations.daysWithVehicle = +payload.value;
          break;
      }
    },
    onToggleOptionData(state, payload) {
      if (payload.name === 'isVehicle' || payload.name === 'engine') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.vehicle[payload.name] = payload.value;
        if (!payload.value) {
          state.vehicle.engine = null;
          state.vehicle.daysWithVehicle = null;
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.dataForCalculations[payload.name] = payload.value;
      }
    },
    setCalculationValid(state, payload) {
      state.calculations.isCalculationValid = payload;
    },
    setAnimateValid(state, payload) {
      state.calculations.isAnimate = payload;
    },
    setEmployerCost(state, payload) {
      state.benefitCosts.employerCost = payload;
    },
    setDeductedZus(state, payload) {
      state.calculations.deductedZus = payload;
    },
    setDeductedTax(state, payload) {
      state.calculations.deductedTax = payload;
    },
    setEmployeesNetSalaryWithBenefit(state, payload) {
      state.calculations.employeesNetSalaryWithBenefit = payload;
    },
    setErrors(state, payload) {
      switch (payload.errorOption) {
        case 'benefitName':
          state.benefitName.benefitNameError = payload.errorValue;
          break;
        case 'costs':
          state.benefitCosts.costsError = payload.errorValue;
          break;
        case 'salary':
          state.salary.salaryError = payload.errorValue;
          break;
        case 'vehicle':
          state.vehicle.vehicleError = payload.errorValue;
          break;
        default:
          state.dataForCalculations.dataForCalculationsError = payload.errorValue;
      }
    },
  },
});
