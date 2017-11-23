import controller from './Insights/insights.controller';
import template from './Insights/insights.template.html'

const bindings = {
    filters: '<',
    factors: '<',
    caster: '<'
};

export default {
    controller,
    template,
    bindings
};