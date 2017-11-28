import controller from './InsightDetail/insightdetail.controller';
import template from './InsightDetail/insightdetail.template.html'

const bindings = {
    factors: '<',
    caster: '<',
    oven : '<',
    workrolls: '<',
    alloy: '<',
    period: '<',
    dateFrom: '<',
    dateTo : '<'
};

export default {
    controller,
    template,
    bindings
};