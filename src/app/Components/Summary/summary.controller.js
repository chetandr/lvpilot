import {merge} from 'lodash-es';

export default class SummaryCtrl {

    constructor($http, $scope, AppConfig,ChartOptions) {
        this.pieChartOptions = ChartOptions.getOption('pieChart');
        this.$scope = $scope;
        this.coilType = 'Accepted';

    }

    $onInit() {
        this.summary1 = {};

        for(let k in this.summaryData.summary1) {
            if (this.summaryData.summary1.hasOwnProperty(k)) {
                this.summary1[this.summaryData.summary1[k].key] = this.summaryData.summary1[k].y;
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
                }
            }
        }
        this.chartOptions = merge({},this.pieChartOptions, customChartOptions);
    }

    $updateData(coilType) {
        this.coilType = coilType;
    }
}
