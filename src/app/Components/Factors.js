import controller from './Factors/factors.controller';
import template from './Factors/factors.template.html';

const bindings = {
    heading: '<',
    chartData: '<',
    factorKey: '<'
};

export default {
    controller,
    template,
    bindings
};