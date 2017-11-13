import merge from 'lodash-es/merge';

export default class DetailCtrl {

    constructor($stateParams, ChartOptions) {
        this.coilState = $stateParams.coilState;
        this.pieChartOptions = merge({}, ChartOptions.getOption('pieChart'));
        this.paramBase = 'hotsprings';
        this.setParamBase = base => this.paramBase = base;
    }
}