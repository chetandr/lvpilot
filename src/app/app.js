import angular from 'angular'
import Main from './Components/Main';
import AppHeader from './Components/_AppHeader';
import AppConfig from './Services/AppConfig';
import '../style/app.css';
import '../style/bootstrap.min.css';
import '../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';

const MODULE_NAME = "my-app";
angular.module(MODULE_NAME,[])
    .component('mainApp', Main )
    .component('appHeader', AppHeader )
    .factory('AppConfig', AppConfig);

export default MODULE_NAME;