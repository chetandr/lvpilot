import angular from 'angular';
import tabs from 'angular-ui-bootstrap/src/tabs';
import nvd3 from 'angular-nvd3';
import uiRouter from 'angular-ui-router';

// Components
import Main from './Components/Main';
import AppHeader from './Components/_AppHeader';
import CoilFilter from './Components/CoilFilter';
import Summary from './Components/Summary';
import Detail from './Components/Detail';
import Trends from './Components/Trends';
import TrendsFactors from './Components/Factors';
import FactorMillSpeed from './Components/FactorMillSpeed';
import FactorChart from './Components/FactorChart';
import FactorChartLegend from './Components/FactorChartLegend';
import ProcessControlLimits from './Components/ProcessControlLimits';
import ControlLimits from './Components/ControlLimits';
import SearchNCompare from './Components/SearchNCompare';
import MillSpeedTrend from './Components/MillSpeedTrend';
import Insights from './Components/Insights';
import InsightDetail from './Components/InsightDetail';

import UIState from './ui.states';
// Services
import AppConfig from './Services/AppConfig';
import ChartOptions from './Services/ChartOptions';
import CoilDataService from './Services/CoilDataService';
import ClusterService from './Services/ClusterService';
import Clusters from './Services/Clusters';
import FilterService from './Services/FilterService';
import Filters from './Services/Filters';
import StateTransition from './Services/StateTransition';

// Static Files
import '../assets/css/app.css';
import '../assets/css/bootstrap.css';
//import '../assets/css/bootstrap.min.css';
import '../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';
import '../../node_modules/nvd3/build/nv.d3.css';

const MODULE_NAME = "my-app";
angular.module(MODULE_NAME,[tabs, nvd3, uiRouter])
    .component('mainApp', Main )
    .component('appHeader', AppHeader )
    .component('coilFilter', CoilFilter )
    .component('summary', Summary )
    .component('detail', Detail )
    .component('trends', Trends )
    .component('factors', TrendsFactors )
    .component('factorMillSpeed', FactorMillSpeed )
    .component('factorChart', FactorChart )
    .component('factorChartLegend', FactorChartLegend )
    .component('processControlLimits', ProcessControlLimits )
    .component('controlLimits', ControlLimits )
    .component('searchNCompare', SearchNCompare )
    .component('millSpeedTrend', MillSpeedTrend )
    .component('insights', Insights )
    .component('insightDetail', InsightDetail )
    .factory('AppConfig', AppConfig)
    .factory('ChartOptions', ChartOptions)
    .factory('CoilDataService', CoilDataService)
    .factory('Clusters', Clusters)
    .factory('ClusterService', ClusterService)
    .factory('FilterService', FilterService)
    .factory('Filters', Filters)
    .factory('StateTransition', StateTransition)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state(UIState.Default)
            .state(UIState.Home)
            .state(UIState.Details)
            .state(UIState.Insights)
            .state(UIState.SearchNCompare);

        $urlRouterProvider.otherwise('/home');
    });

export default MODULE_NAME;