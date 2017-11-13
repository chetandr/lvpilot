import controller from './MillSpeedTrend/millspeedtrend.controller';
import template from './MillSpeedTrend/millspeedtrend.template.html';

const bindings = {
    plant: '<',
    mill: '<',
    gauge: '<',
    clusters: '<',
    clusters: '<',
    trends : '<'
}

export default {
    template,
    controller,
    bindings
}