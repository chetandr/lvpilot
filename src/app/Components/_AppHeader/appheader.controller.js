export default class AppHeaderCtrl {

    constructor($scope, AppConfig) {
        this.AppConfig = AppConfig;
    }

    $onInit() {
        this.title = this.AppConfig.title;
        this.beta = this.AppConfig.beta;
    }
}