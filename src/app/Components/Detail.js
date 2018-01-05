import controller from './Detail/detail.controller';
import template from './Detail/detail.template.html'

const bindings = {
    details: '<',
    coilType :'<',
    summaryData :'<',
    total: '<'
}

export default {
    controller,
    template,
    bindings
}