import filter from 'lodash-es/map';

export default class InsightDetailCtrl {

    constructor(Clusters, ChartOptions){
        this.Clusters = Clusters;
        this.defaultScatterOptions = ChartOptions.getOption('scatterChart');

    }
}