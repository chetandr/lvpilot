import {merge} from 'lodash-es';

export default class SummaryCtrl {

    constructor($http, $scope, AppConfig,ChartOptions) {
        this.pieChartOptions = ChartOptions.getOption('pieChart');
        this.$scope = $scope;
        this.coilType = 'Accepted';

    }

    $onInit() {
        this.summary1 = {};
        this.total = 0;
        for(let k in this.summaryData.summary1) {
            if (this.summaryData.summary1.hasOwnProperty(k)) {
                this.summary1[this.summaryData.summary1[k].key] = this.summaryData.summary1[k].y;
                this.total += this.summaryData.summary1[k].y;
            }
        }
        const vm = this;
        const customChartOptions = {
            chart : {
                pie: {
                    dispatch :{
                        elementClick(u) {
                            vm.coilType = u.data.key;
                            vm.$scope.$apply();
                        }
                    }
                },
                y : d => d3.format("d")(d.y),
                labelFormat: n => d3.format("d")(n),
                labelType: (d) => d3.format("d")(d.value) + " ("+ d.data.percent + "%)"

            }
        }
        this.chartOptions = merge({},this.pieChartOptions, customChartOptions);
        this.chartOptionsRejectReason = merge({},this.pieChartOptions, {chart: {legendPosition: "right"}});
    }

    $updateData(coilType) {
        this.coilType = coilType;
    }
}
