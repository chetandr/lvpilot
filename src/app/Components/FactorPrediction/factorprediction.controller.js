import merge from 'lodash-es/merge';

export default class FactorsPredictionCtrl {

    constructor($http, $sce,  AppConfig, CoilDataService, FilterService, ChartOptions) {
        this.$sce = $sce;
        this.predictedValue = 0;
        this.independentValue = 0;
        this.deviationPercent = 0;
        this.lhs = "";
        this.rhs = "";
        this.rhsInverse = "";
        this.numberStep = 1;
    }

    $onInit() {
        this.independentValue = this.chartData.min;
        this.rhs = this.getRHS(this.chartData.r, this.chartData.rfc);
        this.lhs = this.getRHS(this.chartData.l, this.chartData.lfc);
        this.predictionFormula = this.getPredictionFormula();
        this.predict();
        const arMin = ("" + this.chartData.min).split(".")
        this.numberStep = arMin.length > 1 ? Math.pow(10,  -1 * arMin[1].length) : 1;
    }

    getPredictionFormula() {
        const customChartOptions = {
            chart :{
                xAxis: {
                    axisLabel: this.chartData.r
                },
                yAxis: {
                    axisLabel: this.chartData.ylabel
                }
            }
        }

        this.predChartoptions = merge({},this.defaultOptions, customChartOptions);
        const retValue = this.$sce.trustAsHtml(this.getLHS(this.chartData.l,"none") + " = " + this.getRHSEquation(this.chartData.r, this.chartData.lfc, this.chartData.rfc, this.chartData.intercept, this.chartData.beta));;
        return retValue;
    }

    getLHS(l, lfc) {
        switch (lfc) {
            case "none" :
                return this.$sce.trustAsHtml("<span class='dependent'>" + l + "</span>");
                break;
            case "ln":
                return this.$sce.trustAsHtml("<span class='dependent'>log</span><sub class='constant'>e</sub>(<span class='dependent'>" + l + "</span>)");
                break;
            case "rec":
                return this.$sce.trustAsHtml("1/ (<span class='dependent'>" + l + "</span>)");
                break;
        }
    }

    getRHS(r, rfc) {
        switch (rfc) {
            case "none" :
                return this.$sce.trustAsHtml("</span> * (<span class='independent'>" + r + "</span>)");
                break;
            case "ln":
                return this.$sce.trustAsHtml("<span class='function'>log</span><sub class='constant'>e</sub> (<span class='independent'>" + r + "</span>)");
                break;
            case "rec":
                return this.$sce.trustAsHtml("<span class='constant'>1</span>/(<span class='independent'>" + r + "</span>)");
                break;
        }
    }

    getRHSInverse(str, lfc) {
        switch (lfc) {
            case "none" :
                return this.$sce.trustAsHtml(str);
                break;
            case "ln":
                return this.$sce.trustAsHtml("<span class='constant'>e</span><sup>" + str +"</sup>");
                break;
            case "rec":
                return this.$sce.trustAsHtml("<span class='constant'>1</span>/ (" + str +")");
                break;
        }
    }

    getRHSEquation(r, lfc, rfc, intercept, beta) {
        let str = "<span class='constant'>"+ intercept + "</span>" + " + " + beta + " * (" + this.getRHS(r,rfc) + ")";
        return this.getRHSInverse(str, lfc)
    }

    predict() {
        if(this.independentValue) {
            const rhValue = this.chartData.intercept + ( this.chartData.beta * this.calculateRHS(this.independentValue, this.chartData.rfc));
            this.predictedValue = (parseInt(this.calculateLHS(rhValue, this.chartData.lfc) * 100))/100;
            this.deviationPercent = parseInt((((this.predictedValue - this.chartData.target_speed) / this.chartData.target_speed) * 100) * 100) / 100;
            const arMin = ("" + this.independentValue).split(".");
            this.numberStep = arMin.length > 1 ? Math.pow(10,  -1 * arMin[1].length) : .01;
        }
    }

    calculateRHS(x, fn) {
        switch(fn) {
            case "none" :
                return x;
                break;
            case "ln":
                Math.log(x);
                break;
            case "rec":
                return x == 0 ? 0 : 1 / x ;
                break

        }
    }

    calculateLHS(x, fn) {
        switch(fn) {
            case "none" :
                return x;
                break;
            case "ln":
                return Math.exp(x);
                break;
            case "rec":
                return x == 0 ? 0 : 1 / x ;
                break

        }
    }

    stepDown() {
        this.independentValue = parseFloat(this.independentValue) - parseFloat(this.numberStep);
    }

    stepUp() {
        this.independentValue = parseFloat(this.independentValue) + parseFloat(this.numberStep);
    }
}
;