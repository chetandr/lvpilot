import controller from './Summary/summary.controller';
import template from './Summary/summary.template.html'

const bindings = {
    rejectData: '<',
    summaryData: '<'
}

export default {
    controller,
    template,
    bindings
}