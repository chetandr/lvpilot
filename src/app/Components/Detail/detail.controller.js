import merge from 'lodash-es/merge';
import round from 'lodash-es/round';

export default class DetailCtrl {

    constructor($stateParams, ChartOptions) {
        this.coilState = $stateParams.coilState;
        this.pieChartOptions = merge({}, ChartOptions.getOption('pieChart'));
        this.paramBase = 'hotsprings';
        this.weatherStatus = false;
        this.round = round;
        this.weathers = ['non-weather','weather'];
        this.setParamBase = base => this.paramBase = base;
        this.coilTypeGrp = 'accepted';
        this.coilType = 'Accepted';
        this.coilTypes = {
            'accepted':[{key:'Accepted', value:'Accepted'}, {key:'Rejected', value:'Rejected'}],
            'goodnall':[{key:'Good', value:'Good'},{key:'Non Standard', value:'Non Standard'},{key:'Web Breaks', value:'Web Breaks'},],
            'good':[{key:'Good', value:'Good'}, {key:'Not Good', value:'Not Good'}],
            'webbreaks':[{key:'Web Breaks', value:'Web Breaks'}, {key:'Not Web Breaks', value:'Not Web Breaks'}],
        }

    }

}