import controller from './FactorMillSpeed/factorMillSpeed.controller';
import template from './FactorMillSpeed/factorMillSpeed.template.html';

const bindings = {
    heading: '<',
    chartData: '<',
    factorKey: '<',
    mltitle: '<'
};

export default {
    controller,
    template,
    bindings
};