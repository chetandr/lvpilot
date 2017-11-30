export default class MainCtrl {

    constructor($rootScope, $scope, AppConfig, CoilDataService, ClusterService, Clusters, $state) {
        this.AppConfig = AppConfig;
        this.CoilDataService = CoilDataService;
        this.ClustreService = ClusterService;
        this.Clusters = Clusters;
        this.$state = $state;
        this.mills = [];
        $rootScope.$on('$stateChangeStart ',(event, toState, toParams, fromState, fromParams) =>
            console.log('Started Change'));
    }

    $onInit() {
        this.title = this.AppConfig.title;
        this.beta = this.AppConfig.beta;
        this.CoilDataService.getMills().then(result => {this.mills= result});
    }
}