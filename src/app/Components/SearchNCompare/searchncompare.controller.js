import filter from 'lodash-es/filter';
import keys from 'lodash-es/keys';
import head from 'lodash-es/head';

export default class SearchNCompareCtrl {

    constructor($scope, $http, ClusterService, Clusters, CoilDataService, FilterService, AppConfig){
        this.ClusterService = ClusterService;
        this.CoilDataService = CoilDataService;
        this.scope = $scope;
        this.$http = $http;
        this.plant = 'hotsprings';
        this.Clusters = Clusters;
        this.trends = null;
        this.FilterService = FilterService;
        this.trendsURL = AppConfig.restUrls.MILL_SPEED_TREND;
        this.weatherStatus = false;
    }

    $onInit() {
        this.currentMill = head(keys(this.filters.MillFilter[this.plant]));
        this.targetGauge = "" + head(this.filters.MillFilter[this.plant][this.currentMill].targetGauge);
        this.setPlant = plant => {
            this.plant = plant;
            this.clearCluster();
        }

        this.clearCluster = () => {
            this.Clusters.list = [];
        }

        this.$http.get(this.trendsURL).then((result) => this.trends = result.data, (err) => console.error(err));
    }

    $doCheck() {
        if(this.currentMill == null) {
            this.currentMill = head(keys(this.filters.MillFilter[this.plant]));
        }
        if(this.targetGauge == null) {
            this.targetGauge = "" + head(this.filters.MillFilter[this.plant][this.currentMill].targetGauge);
        }
        this.FilterService.setValue('plant', this.plant);
        this.FilterService.setValue('mill', this.currentMill);
        this.FilterService.setValue('gauge', this.targetGauge);
    }

    $setTrends() {
        this.$http.get(restURL,).then((result) => this.trends = result.data, (err) => console.error(err));
    }
}