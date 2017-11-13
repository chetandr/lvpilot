import controller from './FactorChart/factochart.controller';
import template from './FactorChart/factorchart.template.html';

const bindings = {
    chartData: '<',
    showLoading : '<',
};

export default {
    controller,
    template,
    bindings
};