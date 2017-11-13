import filter from 'lodash-es/filter';
import keys from 'lodash-es/keys';
import head from 'lodash-es/head';

export default class SearchNCompareCtrl {

    constructor($scope, $http, ClusterService, Clusters, CoilDataService, AppConfig){
        this.ClusterService = ClusterService;
        this.CoilDataService = CoilDataService;
        this.scope = $scope;
        this.$http = $http;
        this.plant = 'hotsprings';
        this.Clusters = Clusters;
        this.trends = null;
        this.trendsURL = AppConfig.restUrls.MILL_SPEED_TREND;
    }

    $onInit() {
        this.currentMill = head(keys(this.filters.MillFilter[this.plant]));
        this.targetGauge = "" + head(this.filters.MillFilter[this.plant][this.currentMill].targetGauge);
        //this.setTargetGauge = () => this.targetGauge = "" + head(this.filters.MillFilter[this.plant][this.currentMill].targetGauge);
        this.clusters = this.Clusters.list;
        this.setPlant = plant => this.plant = plant;

        this.$http.get(this.trendsURL).then((result) => this.trends = result.data, (err) => console.error(err));
    }

    $doCheck() {
        if(this.currentMill == null) {
            this.currentMill = head(keys(this.filters.MillFilter[this.plant]));
        }
        if(this.targetGauge == null) {
            this.targetGauge = "" + head(this.filters.MillFilter[this.plant][this.currentMill].targetGauge);
        }
    }

    $setTrends() {
        this.$http.get(restURL,).then((result) => this.trends = result.data, (err) => console.error(err));
    }
}