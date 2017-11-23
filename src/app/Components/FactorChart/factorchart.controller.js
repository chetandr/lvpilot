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
        this.defaultScatterOptions = ChartOptions.getOption('scatterChart');
        this.colors = AppConfig.colors;
        this.filter = filter;
        this.legendFilters = {};
    }

    $onInit() {
        const chartData = this.chartData;
        const indexedChartData = [];
        const chartDataCount = chartData.length;
        for (let k = 0; k < chartDataCount; k++) {
            indexedChartData[chartData[k].x] = chartData[k];
        }
        console.log(this.plant);
        const plant = this.plant;
        const colors = this.colors;

        const scatterChartOptions = {
            chart: {
                xAxis: {
                    axisLabel: this.chartOptions.xAxisLabel,
                },
                yAxis: {
                    axisLabel: this.chartOptions.yAxisLabel,
                    tickFormat: d => d == this.chartOptions.thresholdValues.max ? 'Max' : (d == this.chartOptions.thresholdValues.min ? 'Min' : d)
                },
                dispatch: {
                    stateChange: () => console.error('StateChangeDispatched')
                },
                showLegend: false,
                tooltip: {
                    valueFormatter: function (d, i) {
                        return '';
                    },

                    headerFormatter: function (d, i) {
                        const coilData = indexedChartData[d];
                        let str = "<div class='panel panel-success'><div class='panel-heading'>Coil # : " + d + "</div><div class='panel-body'><table class='table'>"
                        str += '<tr><td>Caster</td><td>' + coilData.caster + '</td></tr>';
                        console.log(plant);
                        if (plant == 'louisville') {
                            str += '<tr><td>Oven</td><td>' + coilData.oven + '</td></tr>';
                            str += '<tr><td>Work Rolls</td><td>' + coilData.workrolls + '</td></tr>';
                            str += '<tr><td>Alloy</td><td>' + coilData.aloy + '</td></tr>';
                        }
                        str += "<tr><td colspan='2'><div class='label' style='background-color: " + colors[coilData.group1] + "'>" + coilData.group1 + "</div></td></tr>";
                        str += "<tr><td colspan='2'><div class='label' style='background-color: " + colors[coilData.group2] + "'>" + coilData.group2 + "</div></td></tr>";
                        str += "</table></div></div>";
                        return str;
                    },
                    keyFormatter: function (d, i) {
                        return undefined;
                    }

                }
            }
        };

        this.options = merge({}, this.defaultScatterOptions, scatterChartOptions);
        this.$setGroupBy();
        this.$setChartData();
        this.groupFactor = this.groupBy;
        this.casterFilter = this.castor;
        this.defaultMax = this.max;
        this.defaultMin = this.min;
        this.ovenFilter = this.oven;
        this.workrollsFilter = this.workrolls;
        this.periodFilter = this.period;
    }

    $setLegendFilter(legend) {
        let allFalse = true;
        forEach(this.legendFilters, (l, k) => {
            if (l && k != legend) {
                allFalse = false;
            }
        });
        if (allFalse) {
            for (let k in this.legendFilters) {
                if (this.legendFilters.hasOwnProperty(k)) {
                    this.legendFilters[k] = true;
                }
            }
        }
    }

    $dblSetLegendFilter(legend) {
        let allFalse = false;
        forEach(this.legendFilters, (l, k) => {
            if (l && k != legend) {
                allFalse = true;
            }
        });
        if (allFalse) {
            const legendFiltersCount = this.legendFilters.length;
            for (let k in this.legendFilters) {
                if (this.legendFilters.hasOwnProperty(k)) {
                    if (k == legend) {
                        this.legendFilters[k] = true;
                    } else {
                        this.legendFilters[k] = false;
                    }
                }
            }
        } else {
            for (let k in this.legendFilters) {
                if (this.legendFilters.hasOwnProperty(k)) {
                    this.legendFilters[k] = true;
                }
            }
        }
    }

    $setGroupBy() {
        this.groupParameters = uniq(map(this.chartData, this.groupBy));
        forEach(this.groupParameters, parameter => this.legendFilters[parameter] = true);
    }

    $setChartData() {
        const chartData = [];
        let filterCriteria = {};
        forEach(this.groupParameters, parameter => {
            filterCriteria = {[this.groupBy]: parameter};
            if (this.caster) {
                filterCriteria.caster = parseInt(this.caster);
            }
            if (this.oven) {
                filterCriteria.oven = parseInt(this.oven);
            }
            if (this.workrolls) {
                filterCriteria.workrolls = parseInt(this.workrolls);
            }
            if (this.alloy) {
                filterCriteria.aloy = parseInt(this.alloy);
            }
            if (this.legendFilters[parameter]) {
                chartData.push({
                    "key": parameter,
                    values: filter(this.chartData, filterCriteria),
                    color: this.colors[parameter]
                });
            }
        })
        const arrMax = [];
        const arrMin = [];
        for (let i = 0; i < this.chartData.length; i += 4) {
            arrMax.push({x: i, y: this.max, size: 0.1});
            arrMin.push({x: i, y: this.min, size: 0.1});
        }
        chartData.push({
            "key": 'Max',
            values: arrMax,
            color: "#4C5259"
        })
        chartData.push({
            "key": 'Min',
            values: arrMin,
            color: "#4C5259"
        })
        this.data = chartData;
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
            this.defaultMin !== this.min
        ) {
            this.$setGroupBy();
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