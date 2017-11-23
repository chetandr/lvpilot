import forEach from 'lodash-es/forEach';

export default  class FactorChartLegendCtrl {

    constructor(AppConfig) {
        this.colors = AppConfig.colors;
        this.legendFilters = [];
    }

    $onInit() {
        forEach(this.legends, legend => this.legendFilters[legend] = true);

    }

    _setLegendFilters() {
        this.setLegendFilters(this.legendFilters);
    }

}