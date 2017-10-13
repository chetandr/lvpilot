import ActionsList from './Services/ActionList';

export default class AppController {
    constructor($scope, ActionDispatcher) {
        ActionDispatcher.dispatch(ActionsList.CREATE_PRODUCT,{id:1056, name:'First Product'});
    }
}