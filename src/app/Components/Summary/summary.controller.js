import {merge} from 'lodash-es';

export default class SummaryCtrl {

    constructor($http, $scope, AppConfig,ChartOptions) {
        this.pieChartOptions = ChartOptions.getOption('pieChart');
        this.$scope = $scope;
        this.coilType = 'Accepted';

    }

    $onInit() {
        this.summary1 = {};
        this.summary2 = {};
        this.totals = {accepted:0, goodnall:0, good:0, webbreaks:0};
        // caluclate totals for summary 1
        for(let k in this.summaryData.summary1) {
            if (this.summaryData.summary1.hasOwnProperty(k)) {
                this.summary1[this.summaryData.summary1[k].key] = this.summaryData.summary1[k].y;
                this.totals.accepted += this.summaryData.summary1[k].y;
            }
        }
        // calulate Totals for summary2
        for(let k in this.summaryData.summary2) {
            if (this.summaryData.summary2.hasOwnProperty(k)) {
                this.summary2[this.summaryData.summary2[k].key] = this.summaryData.summary2[k].y;
                this.totals.goodnall += this.summaryData.summary2[k].y;
                this.totals.good += this.summaryData.summary2[k].y;
                this.totals.webbreaks += this.summaryData.summary2[k].y;
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
