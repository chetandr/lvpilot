import controller from './FactorChartLegend/factorchartlegend.controller';
import template from './FactorChartLegend/factorchartlegend.template.html';

const bindings = {
    legends : '<',
    setLegendFilters: '&'
};

export default {
    controller,
    template,
    bindings
};