import controller from './MillSpeedTrend/millspeedtrend.controller';
import template from './MillSpeedTrend/millspeedtrend.template.html';

const bindings = {
    plant: '<',
    mill: '<',
    gauge: '<',
    clusters: '<',
    clusters: '<',
    trends : '<',
    rangeSize: '<'
}

export default {
    template,
    controller,
    bindings
}