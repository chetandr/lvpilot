import filter from 'lodash-es/filter';
import isEmpty from 'lodash-es/isEmpty';
import keys from 'lodash-es/keys';
import head from 'lodash-es/head';

export default class ProcessControlLimitsCtrl {

    constructor(CoilDataService, $scope){
        this.CoilDataService = CoilDataService;
        //this.mills = [];
        this.scope = $scope;
        this.limits = [];

    }

    $onInit() {
        this.currentMill = head(keys(this.controlLimits.lousville));
        this.hsLimits = this.controlLimits.hotsprings;
        this.scope.onMillChange = () => {
            this.limits = filter(this.controlLimits.lousville, (limit, key) => key == this.currentMill);
        }
        this.limits = filter(this.controlLimits.lousville, (limit, key) => key == this.currentMill);
    }

    $doCheck() {
    }
}