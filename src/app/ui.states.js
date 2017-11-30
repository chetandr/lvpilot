const UIStates = {
    Default : {
      name: 'default',
      url: '/',
      component: 'summary',
      resolve: {
          summaryData : (CoilDataService) => CoilDataService.getSummaryData(),
      }
    },
    Home : {
        name : 'home',
        url: '/home',
        component: 'summary',
        resolve: {
            summaryData : (CoilDataService) => CoilDataService.getSummaryData(),
        }
    },
    Details : {
        name: 'detail',
        url: '/detail/{coilState}',
        component : 'detail',
        resolve: {
            importantFactors : (CoilDataService, $stateParams) => CoilDataService.getFactors($stateParams.coilState)
        }
    },
    Insights : {
        name: 'insights',
        url: '/insights/{plant}/{mill}/{gauge}',
        component : 'insights',
        resolve: {
            filters : (CoilDataService) => CoilDataService.getFilters(),
            factors : (CoilDataService) => CoilDataService.getFactorsForMillSpeed(),
        }
    },
    SearchNCompare : {
        name: 'searchncompare',
        url: '/searchncompare',
        component : 'searchNCompare',
        resolve: {
            filters : (CoilDataService) => CoilDataService.getFilters(),
            mills : (CoilDataService) => CoilDataService.getMills()
        }
    }
}

export default UIStates;