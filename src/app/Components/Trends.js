import controller from './Trends/trends.controller';
import template from './Trends/trends.template.html';

const bindings = {
    importantFactors: '<',
    factorKey: '<'
};

export default {
    controller,
    template,
    bindings
};