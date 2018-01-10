import unionBy from 'lodash-es/unionBy';
import upperFirst from 'lodash-es/upperFirst';
import head from "lodash-es/head";
import last from "lodash-es/last";
import ceil from "lodash-es/ceil";

export default class InsightsCtrl {

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
        this.currentPage = 0;
        this.pageSize = 3;
        this.pageFactors = [];
    }

    $onInit(){
        this.dateFrom = head(this.filters.period).key;
        this.dateTo = last(this.filters.period).key;
        const factors = this.factors[this.plant][this.mill][this.gauge];
        this.factor = head(factors).key;
        for(let i=this.currentPage; i<this.currentPage+ this.pageSize; i++) {
            this.pageFactors.push(factors[i])
        }
    }
    $onFactorClick(factor) {
        this.factor = factor;
    }

    $onNext(){
        if(this.currentPage < ceil(this.factors.length /this.pageSize)) {
            this.currentPage++;
            this.pageFactors = [];
        }
        let newPageSize = (this.currentPage * this.pageSize)+ this.pageSize;
        if(newPageSize > this.factors.length) {
            newPageSize = this.factors.length -1;
        }
        for(let i=this.currentPage*this.pageSize; i<=newPageSize; i++) {
            this.pageFactors.push(this.factors[i])
        }
    }

    $onPrev(){

        if(this.currentPage > 0)
            this.currentPage--;
        this.pageFactors = [];
        for(let i=this.currentPage*this.pageSize; i<=this.currentPage * this.pageSize; i++) {
            this.pageFactors.push(this.factors[i])
        }
    }

    $changeFactor(){
        if(this.factorId) {
            this.pageFactors = [];
            this.pageFactors.push(this.factors[this.factorId]);
        }
    }

}