import controller from './FactorPrediction/factorprediction.controller';
import template from './FactorPrediction/factorprediction.template.html';

const bindings = {
    chartData: '<',
    defaultOptions: '<',
    factor: '<'
};

export default {
    controller,
    template,
    bindings
};