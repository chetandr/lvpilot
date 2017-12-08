
export default class TestCtrl {

    constructor(ChartOptions) {
        this.chartOptions = ChartOptions.getOption('scatterChart');
    }

    $onInit() {
        this.data = {"key": "deviation", color:"#E8A9E4", values: this.sampleData};

    }

    $updateData(coilType) {
    }
}
