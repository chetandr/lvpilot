import unionBy from 'lodash-es/unionBy';
import upperFirst from 'lodash-es/upperFirst';
import head from "lodash-es/head";
import last from "lodash-es/last";

export default class ProcessControlLimitsCtrl {

    constructor($state, Clusters, FilterService){
        this.Clusters = Clusters;
        this.plant = FilterService.getValue('plant');

        if(!this.plant) {
            $state.transitionTo('searchncompare');
        }
        const filters = FilterService.getFilters();
        this.plantLabel = upperFirst(FilterService.getValue('plant'));
        this.mill = FilterService.getValue('mill');
        this.millLabel = filters.MillFilter[this.plant][this.mill].value;
        this.gauge = FilterService.getValue('gauge');
        this.weatherStatus = false;


        this.insightFilters = this.plant == 'hotsprings' ?
            filters.DataFilters['hotsprings'] :
            unionBy({}, filters.DataFilters['hotsprings'], filters.DataFilters['louisville'], 'key');
    }

    $onInit(){
        this.dateFrom = head(this.filters.period).key;
        console.log(last(this.filters.period).key);



        this.dateTo = last(this.filters.period).key;
    }
}