import controller from './ProcessControlLimits/processcontrollimites.controller';
import template from './ProcessControlLimits/processcontrollimits.template.html';

const bindings = {
    mills: '<',
    'controlLimits' : '<'
}

export default {
    template,
    controller,
    bindings
}

