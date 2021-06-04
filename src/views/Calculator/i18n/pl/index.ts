export default {
  currency: 'zł',
  header: {
    title: 'Kalkulator benefitów',
    description: 'Poniższe narzędzie pozwala obliczyć realną wartość benefitów pozapłacowych '
      + 'Twoich pracowników. Wypełnij odpowiednie pola, aby poznać realny zysk dla pracownika.',
  },
  benefitName: {
    title: 'Nazwa benefitu',
    benefit: 'Nazwa benefitu',
    benefitDesc: 'Podaj nazwę benefitu.',
    placeholder: 'Podaj nazwę benefitu',
  },
  benefitCosts: {
    title: 'Koszty benefitu',
    employerCost: 'Koszt pracodawcy',
    employerCostDesc: 'Kwota dofinansowania benefitu przez pracodawcę.',
    employeeCost: 'Koszt pracownika',
    employeeCostDesc: 'Kwota, jaką pracownik płaci za benefit.',
    overallCost: 'Całkowity koszt benefitu',
    overallCostDesc: 'Kwota, jaką pracodawca płaci za benefit.',
    placeholder: 'Podaj kwotę PLN',
  },
  salary: {
    title: 'Wynagrodzenie',
    netSalary: 'Wynagrodzenie netto',
    netSalaryDesc: 'Wynagrodzenie zasadnicze pracownika netto.',
    placeholder: 'Podaj kwotę PLN',
  },
  dataForCalculations: {
    title: 'Dane do wyliczeń',
    budget: {
      title: 'Budżet',
      description: 'Z jakiego budżetu finansowany jest benefit.',
    },
    meals: {
      title: 'Dofinansowanie posiłków',
      description: 'Czy benefitem jest dofinansowanie do posiłku?',
    },
    bon: {
      title: 'Bony',
      description: 'Czy benefit jest bonem?',
    },
    tax: {
      title: 'Podatek',
      description: 'Wysokość podatku potrącanego z wynagrodzenia pracownika.',
    },
  },
  vehicle: {
    title: 'Auto służbowe',
    daysWithVehicle: 'Liczba dni',
    daysWithVehicleDesc: 'Liczba dni w których pracownik korzystał z auta do celów prywatnych.',
    placeholder: 'Podaj liczbę dni',
    isVehicle: {
      title: 'Auto służbowe do celów prywatnych',
      description: 'Czy pracownik używa auto służbowe?',
    },
    engine: {
      title: 'Pojemność silnika',
      description: 'Poniżej 1600 cm3 lub powyżej 1600 cm3',
    },
  },
  summary: {
    title: 'Poznaj korzyści płynące z benefitów',
    employeeProfits: 'Zysk pracownika z benefitami',
    benefitName: 'Nazwa benefitu',
    employeeSalary: 'Wynagrodzenie netto pracownika + benefity',
    zusCost: 'Kwota ZUS-u od benefitu',
    taxAmount: 'Kwota podatku od benefitu',
    calculate: 'Oblicz zysk pracownika',
    calculateAgain: 'Oblicz ponownie',
  },
  errorCostsText: 'Wypełnij wszystkie pola',
  errorBudgetText: 'Wybierz budżet',
  errorDataText: 'Wybierz odpowiednie pola',
  errorSalaryText: 'Wypełnij to pole',
};
