export interface State {
  benefitName: {
    benefit: null | string,
    benefitNameError: null | boolean,
  },
  benefitCosts: {
    overallCost: null | number,
    employerCost: null | number,
    employeeCost: null | number,
    costsError: null | boolean,
  },
  salary: {
    netSalary: null | number,
    salaryError: null | boolean,
  },
  dataForCalculations: {
    budget: null | string,
    meals: null | boolean,
    tax: null | string,
    dataForCalculationsError: null | boolean,
  },
  vehicle: {
    isVehicle: null | boolean,
    engine: null | string,
    daysWithVehicle: null | number,
    vehicleError: null | boolean,
  },
  calculations: {
    deductedZus: null | number,
    deductedTax: null | string,
    employeesNetSalaryWithBenefit: null | string,
    isCalculationValid: boolean,
    isAnimate: boolean,
  },
}
