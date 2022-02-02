const ApexCharts = window.ApexCharts;

var options = {
  series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

/*
"FEDERAL TRADE COMMISSION ftc.gov/data"
"Percentages are based on the total number of 2020 Sentinel reports (4,720,743).9% of the total we recoded"
series: [
  name: "Rank"
  data:
  Category #ofReports %
]
"IdentityTheft", 29.39 %, 1, 387, 615
"ImposterScams", 10.56 %, 498, 278
"OnlineShoppingandNegativeReviews", 7.49 %, 353, 509
"CreditBureaus, InformationFurnishersandReportUsers", 6.70 %, 316, 521
"BanksandLenders", 3.62 %, 170, 958
"InternetServices", 2.97 %, 140, 435
"AutoRelated", 2.55 %, 120, 474
"DebtCollection", 2.55 %, 120, 190
"Prizes, SweepstakesandLotteries", 2.46 %, 116, 205
"HealthCare", 1.77 %, 83, 472
"TelephoneandMobileServices", 1.73 %, 81, 835
"Privacy, DataSecurity, andCyberThreats", 1.59 %, 74, 925
"Travel, VacationsandTimesharePlans", 1.55 %, 73, 388
"CreditCards", 1.40 %, 66, 090
"BusinessandJobOpportunities", 1.25 %, 59, 131
"HomeRepair, ImprovementandProducts", 1.11 %, 52, 555
"TelevisionandElectronicMedia", 0.87 %, 41, 079
"ForeignMoneyOffersandFakeCheckScams", 0.81 %, 38, 420
"Education", 0.57 %, 26, 872
"InvestmentRelated", 0.52 %, 24, 647
"ComputerEquipmentandSoftware", 0.45 %, 21, 306
"AdvancePaymentsforCreditServices", 0.36 %, 16, 842
"MortgageForeclosureReliefandDebtManagement", 0.23 %, 10, 727
"MagazinesandBooks", 0.13 %, 6, 333
"OfficeSuppliesandServices", 0.11 %, 5, 392
"CharitableSolicitations", 0.10 %, 4, 629
"TaxPreparers", 0.10 %, 4, 616
"Grants", 0.09 %, 4, 014
"FuneralServices", 0.03 %, 1, 309


var id_theft_options = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var id_theft = new ApexCharts(document.querySelector("#chart"), id_theft_options);
id_theft.render();
*/
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();