import merge from 'lodash-es/merge';

export default class MillSpeedTrendCtrl {

    constructor($scope, $http, $state, ClusterService, CoilDataService, AppConfig, ChartOptions, FilterService) {
        this.ClusterService = ClusterService;
        this.AppConfig = AppConfig;
        this.ChartOptions = ChartOptions;
        this.$http = $http;
        this.CoilDataService = CoilDataService;

        this.scope = $scope;
        $scope.selectedClusters = [];
        this.$state = $state;
        this.trends = [];
        this.options = merge({},this.ChartOptions.getOption('discreteBar'));

    }

    $onInit() {
        this.selectedClusters = [];
        this.showInsights = () => this.$state.transitionTo('insights', {plant : this.plant, mill: this.mill, gauge: this.gauge});
        let restURL = this.AppConfig.restUrls.MILL_SPEED_TREND;
        const multiBarChart = {
            "chart" :{
                width: 750,
                discretebar: {
                    dispatch: {
                        elementClick: (u) => {
                            this.ClusterService.addCluster(u.data.label);
                            u.data.color = '#F3DD6D';
                            this.scope.$apply();
                        }
                    }
                },
                xAxis:{
                    tickFormat: d => {
                        const values = this.trends.data[this.plant][this.mill][this.gauge][0].values;
                        const ret = values[(d/10) -1] ? values[(d/10) -1].label : null;
                        return ret;
                    },
                    fontSize: 8,
                    axisLabel : this.trends.options.xAxisLabel,
                    rotateLabels: 60,
                    margin : {
                        top: 15
                    }
                },
                yAxis: {
                    axisLabel: this.trends.options.yAxisLabel
                },
            }
        }

        this.options = merge({},this.options, multiBarChart);
    }
}