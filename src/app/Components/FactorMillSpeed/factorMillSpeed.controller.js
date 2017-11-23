import map from 'lodash-es/map';
import uniq from 'lodash-es/uniq'
import orderBy from 'lodash-es/orderBy';
import forEach from 'lodash-es/forEach';
import filter from 'lodash-es/filter';

export default  class FactorsMillSpeedCtrl {

    constructor($http, AppConfig, CoilDataService, FilterService ){
        this.CoilDataService = CoilDataService;
        this.http = $http;
        this.AppConfig = AppConfig;
        this.showLoading = true;
        this.plant = FilterService.getValue('plant');
        this.mill = FilterService.getValue('mill');
        this.gauge = FilterService.getValue('gauge');
        this.groupFactor = 'group1';
    }
    $onInit() {
        this.data = [];
        this.chartOptions = [];
        this.loading = true;
        this.maxThreshold = 0;
        this.minThreshold = 0;
        let restURL = this.AppConfig.restUrls.ML_COIL_FACTORS + '?factor=' + this.factorKey + '&plant=' + this.plant + '&mill=' + this.mill + '&gauge=' + this.gauge + '&deviation=' + this.deviation.name.split(' To ').join();
        this.http.get(restURL,).then((result) => {
            this.data = result.data.data;
            //this.$setChartData();
            this.maxMinValues = uniq(map(orderBy(this.data, 'y'), 'y'));
            this.chartOptions = result.data.options;
            this.maxThreshold = this.chartOptions.thresholdValues.max;
            this.minThreshold = this.chartOptions.thresholdValues.min;
            this.showLoading = false
        });
    }

    $setChartData() {
        const groupParameters = uniq(map(this.data, this.groupFactor));
        const chartData = [];
        let filterCriteria = {};
        forEach(groupParameters, parameter => {
            filterCriteria = {[this.groupFactor] : parameter };
            chartData.push({"key" : parameter, values : filter(this.data, filterCriteria), color: this.AppConfig.colors[parameter]});
        })
        this.chartData = chartData;
        this.loading = false;
    }


};