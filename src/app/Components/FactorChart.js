import controller from './FactorChart/factorchart.controller';
import template from './FactorChart/factorchart.template.html';

const bindings = {
    chartData: '<',
    chartOptions : '<',
    groupBy : '<',
    caster : '<',
    oven : '<',
    workrolls: '<',
    alloy: '<',
    period: '<',
    max: '<',
    min: '<',
    dateFrom: '<',
    dateTo: '<'
};

export default {
    controller,
    template,
    bindings
};