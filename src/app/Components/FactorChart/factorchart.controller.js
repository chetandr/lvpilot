import merge from 'lodash-es/merge';
import forEach from 'lodash-es/forEach';
import filter from 'lodash-es/filter';
import uniq from 'lodash-es/uniq';
import map from 'lodash-es/map';
import orderBy from 'lodash-es/orderBy';
import head from 'lodash-es/head';
import isEqual from 'lodash-es/isEqual';

export default class FactorChartCtrl {

    constructor(ChartOptions, AppConfig) {
        this.colors = AppConfig.colors;
        this.filter = filter;
        this.legendFilters = {};
    }

    $onInit() {
        const chartData = this.chartData;
        const indexedChartData = [];
        const chartDataCount = chartData.length;
        this.data = this.chartData;
        for (let k = 0; k < chartDataCount; k++) {
            indexedChartData[chartData[k].x] = chartData[k];
        }
        const plant = this.plant;
        const colors = this.colors;

        const scatterChartOptions = {
            chart: {
                xAxis: {
                    axisLabel: 'Speed Deviation Percent',
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: this.factor,
                    showMaxMin: false
                    //tickFormat: d => d == this.chartOptions.thresholdValues.max ? 'Max' : (d == this.chartOptions.thresholdValues.min ? 'Min' : d)
                },
                showLegend: true,
            }
        };
        this.options = merge({}, this.defaultOptions, scatterChartOptions);
        //this.$setGroupBy();
        this.$setChartData();
        this.groupFactor = this.groupBy;
        this.casterFilter = this.castor;
        this.defaultMax = this.max;
        this.defaultMin = this.min;
        this.ovenFilter = this.oven;
        this.workrollsFilter = this.workrolls;
        this.periodFilter = this.period;
        this.dateFromFilter = this.dateFrom;
        this.dateToFilter = this.dateTo;
    }


    $setGroupBy() {
        this.groupParameters = uniq(map(this.chartData, this.groupBy));
        forEach(this.groupParameters, parameter => this.legendFilters[parameter] = true);
    }

    $setChartData() {
        const chartData = [];
        let filterCriteria = {};
        const filterFn = (data) => {
            let status = true;

            if (this.caster) {
                status = status && data.caster == parseInt(this.caster);
            }
            if (this.oven) {
                status = status && data.oven == parseInt(this.oven);
            }
            if (this.workrolls) {
                status = status && data.workrolls == parseInt(this.workrolls);
            }
            if (this.alloy) {
                status = status && data.aloy == parseInt(this.alloy);
            }
            if (this.dateFrom) {
                status = status && data.date > this.dateFrom;
            }
            if (this.dateTo) {
                status = status && data.date < this.dateTo;
            }

            return status;
        }
        forEach(this.chartData, cdata => {
            chartData.push({
                "key": cdata.key,
                values: filter(cdata.values, filterFn),
                color: cdata.color
            });
        })
        this.data = chartData;
        const arrMax = [];
        const len = this.chartData.length;
        if (this.max) {
            for (let k = 0; k < len; k += 50) {
                arrMax.push({x: k, y: this.max, size: 0.1, color: '#000'});
            }
            chartData.push({
                key: "Max",
                values: arrMax,
                color: "#000000"
            });
        }

        const arrMin = [];
        if (this.min) {
            for (let k = 0; k < len; k += 50) {
                arrMin.push({x: k, y: this.min, color: '#000', size: 0.1});
            }
            chartData.push({
                key: "Min",
                values: arrMin,
                color: "#000000"
            });
        }
        // this.data = chartData;
        this.options.chart.yAxis.tickFormat = d => d == this.max ? 'Max' : (d == this.min ? 'Min' : d);
    }

    $doCheck() {
        if (this.groupBy !== this.groupFactor ||
            this.casterFilter !== this.caster ||
            this.ovenFilter !== this.oven ||
            this.workrollsFilter !== this.workrolls ||
            this.alloyFilter !== this.alloy ||
            this.periodFilter !== this.period ||
            !isEqual(this.legendFilters, this.defaultLegendFilters) ||
            this.defaultMax !== this.max ||
            this.defaultMin !== this.min ||
            this.dateFromFilter !== this.dateFrom ||
            this.dateToFilter !== this.dateTo
        ) {
            //this.$setGroupBy();
            this.$setChartData();
            this.groupFactor = this.groupBy;
            this.casterFilter = this.caster
            this.ovenFilter = this.oven;
            this.workrollsFilter = this.workrolls;
            this.alloyFilter = this.alloy;
            this.periodFilter = this.period;
            this.defaultLegendFilters = merge({}, this.legendFilters);
        }
    }
}