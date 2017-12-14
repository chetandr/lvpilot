import merge from "lodash-es/merge";

export default class TestCtrl {

    constructor(ChartOptions) {
        const scatterChartOptions = {
            chart: {
                xAxis: {
                    axisLabel: "Manganese Percent",
                },
                yAxis: {
                    axisLabel: "Deviation Percent",
                },
                showDistX: false,
                showDistY: false
            }
        };
        this.chartOptions = merge({},ChartOptions.getOption('scatterChart'), scatterChartOptions);

    }

    $onInit() {
        this.data = {"key": "deviation", color:"#E8A9E4", values: this.sampleData};

    }

    $updateData(coilType) {
    }
}
