import controller from './FactorMillSpeed/factorMillSpeed.controller';
import template from './FactorMillSpeed/factorMillSpeed.template.html';

const bindings = {
    heading: '<',
    chartData: '<',
    factorKey: '<',
    mltitle: '<',
    deviation: '<',
    caster: '<',
    oven : '<',
    workrolls: '<',
    alloy: '<',
    period: '<'
};

export default {
    controller,
    template,
    bindings
};