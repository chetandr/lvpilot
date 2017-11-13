import { forEach } from 'lodash-es';

export default  class FactorsCtrl {

    constructor(AppConfig, CoilDataService, $http){
        this.CoilDataService = CoilDataService;
        this.http = $http;
        this.AppConfig = AppConfig;
        this.showLoading = true;

    }

    $onInit() {
        this.data = [];
        let restURL = this.AppConfig.restUrls.ML_COIL_FACTORS + '?factor=' + this.factorKey;
        this.http.get(restURL,).then((result) => {
            this.data = result.data;
            this.showLoading = false
        });
        this.options = {
            chart: {
                type: 'scatterChart',
                height: 300,
                width: 550,
                color: d3.scale.category10().range(),
                scatter: {
                    onlyCircles: false
                },
                showDistX: true,
                showDistY: true,
                tooltipContent: function (key) {
                    return '<h3>' + key + '</h3>';
                },
                duration: 350,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                },
                zoom: {
                    //NOTE: All attributes below are optional
                    enabled: false,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: false,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        }
    }
};