import controller from './SearchNCompare/searchncompare.controller';
import template from './SearchNCompare/searchncompare.template.html';

const bindings = {
    mills: '<',
    filters: '<',
    factors: '<'
}

export default {
    template,
    controller,
    bindings
}

