const CoildDataSevice =($http, $stateParams, AppConfig, FilterService, Filters) => {
    return {

        getRejectCoilsData() {
            let restURL = AppConfig.restUrls.REJECT_REASON_COUNT;
            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },
        getFactors() {
            let restURL = AppConfig.restUrls.ML_IMPORTANT_FACTORS + '?coilstate=' + $stateParams.coilState;
            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },
        getFactorsForMillSpeed() {

            let plant = Filters.values['plant'];
            let mill = Filters.values['mill'];
            let gauge = Filters.values['gauge'];
            let isWeather = Filters.values['isWeather'];
            let restURL = AppConfig.restUrls.ML_IMPORTANT_FACTORS_MILL_SPEED + "?plant="+plant+"&mill="+mill+"&gauge="+gauge+"&isweather="+isWeather;
            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },

        getControlLimits() {
            let restURL = AppConfig.restUrls.CONTROL_LIMITS;
            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },

        getSummaryData() {
            let restURL = AppConfig.restUrls.SUMMARY_DATA;
            return new Promise((resolve, reject) => {
                    $http.get(restURL).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },

        getMills() {
            let resultURL = AppConfig.restUrls.MILLS;
            return new Promise((resolve, reject) => {
                $http.get(resultURL).then(result =>  resolve(result.data), err => reject(err));
            })
        },

        getMLForCoilFactors(factor){
            let restURL = AppConfig.restUrls.ML_COIL_FACTORS + '?factor=' + factor;

            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },
        getInsightFilters(){
            let restURL = AppConfig.restUrls.INSIGHT_FILTERS;

            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },
        getMillSpeedTrends(){
            let restURL = AppConfig.restUrls.MILL_SPEED_TREND;

            return new Promise((resolve, reject) => {
                    $http.get(restURL,).then((result)=> resolve(result.data),(err)=> reject(err) );
                }
            )
        },
        getFilters(){
            let restURL = AppConfig.restUrls.FILTERS;
            return new Promise((resolve, reject) => {
                    const filters = FilterService.getFilters();
                    if(filters.length > 0) {
                        resolve(filters);
                    } else {
                        $http.get(restURL,).then((result)=> {
                            FilterService.setFilters(result.data);
                            resolve(result.data);
                        },(err)=> reject(err));
                    }
                }
            )
        },

        getCoilData() {
            return [
                {
                    "label": "Good",
                    "value": 25000,
                },
                {
                    "label": "Rejected",
                    "value": 500,
                },
            ]
        }

    }
}

export default CoildDataSevice;