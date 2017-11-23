import merge from 'lodash-es/merge';

export default class DetailCtrl {

    constructor($stateParams, ChartOptions) {
        this.coilState = $stateParams.coilState;
        this.pieChartOptions = merge({}, ChartOptions.getOption('pieChart'));
        this.paramBase = 'hotsprings';
        this.weatherStatus = false;
        this.round = Math.round;
        this.weathers = ['non-weather','weather'];
        console.log(this.weathers);
        this.setParamBase = base => this.paramBase = base;
    }
}