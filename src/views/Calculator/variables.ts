export const benefitName = [
  'benefit',
];

export const benefitCosts = [
  'employerCost',
  'employeeCost',
];

export const salary = [
  'netSalary',
];

export const vehicle = [
  'daysWithVehicle',
];

export const dataForCalculations = [
  {
    section: 'dataForCalculations',
    name: 'budget',
    optionA: {
      value: 'obrotowe',
      content: 'Śr. obr.',
    },
    optionB: {
      value: 'zfss',
      content: 'ZFŚS',
    },
  },
  {
    section: 'dataForCalculations',
    name: 'meals',
    optionA: {
      value: true,
      content: 'TAK',
    },
    optionB: {
      value: false,
      content: 'NIE',
    },
  },
  {
    section: 'dataForCalculations',
    name: 'bon',
    optionA: {
      value: true,
      content: 'TAK',
    },
    optionB: {
      value: false,
      content: 'NIE',
    },
  },
  {
    section: 'dataForCalculations',
    name: 'tax',
    optionA: {
      value: 0.17,
      content: '17%',
    },
    optionB: {
      value: 0.32,
      content: '32%',
    },
  },
];

export const vehicleData = [
  {
    section: 'vehicle',
    name: 'isVehicle',
    optionA: {
      value: true,
      content: 'TAK',
    },
    optionB: {
      value: false,
      content: 'NIE',
    },
  },
];

export const engineData = [
  {
    section: 'vehicle',
    name: 'engine',
    optionA: {
      value: 'small',
      content: 'TAK',
    },
    optionB: {
      value: 'big',
      content: 'NIE',
    },
  },
];

export const calculationSummary = [
  'employeeSalary',
  'zusCost',
  'taxAmount',
];
