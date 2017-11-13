import {merge} from 'lodash-es';

export default class SummaryCtrl {

    constructor($http, $scope, AppConfig,ChartOptions) {
        this.pieChartOptions = ChartOptions.getOption('pieChart');
        this.$scope = $scope;
        this.coilType = null;

    }

    $onInit() {
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
