import controller from './_AppHeader/appheader.controller';
import template from './_AppHeader/appheader.template.html';

const controllerAs = 'appHeader';

const bindings = {
        title : '<',
        beta: '<'
};

export default {
        controller,
        template,
        bindings
}

