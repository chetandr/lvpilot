const env = "dev";
const getURL = (string) => {
    switch(env) {
        case 'dev' :
            return 'http://localhost/RankLousvillePOC/Data/' + string + '.php';
            break;
        case 'prod' :
            return 'http://rlldchdp01.pactiv.com/lvpilot/Data/' + string + '.php';
            break;
        case 'live' :
            return 'http://rlldchdp01.pactiv.com:1234/' + string;
            break;
    }
}

const Config = {
    title : 'Lousville Project POC',
    beta : true,

    restUrls : {
        SUMMARY_DATA : getURL("getSummaryData"),
        REJECT_REASON_COUNT : getURL("getRejectReasonCount"),
        ML_IMPORTANT_FACTORS : getURL("getFactors"),
        ML_IMPORTANT_FACTORS_MILL_SPEED : getURL("getFactorsForMillSpeed"),
        ML_COIL_FACTORS : getURL("getMLForCoilFactors"),
        MILLS : getURL("getMills"),
        CONTROL_LIMITS : getURL("getControlLimits"),
        MILL_SPEED_TREND : getURL("getMillSpeedTrend"),
        FILTERS : getURL("getFilters"),
        IDENTIFIED_REASONS : getURL("getIdentifiedReasons"),
        FACTOR_REASONS : getURL("getRejectFactorReason"),
    },
    colors : {
        'Accepted' : '#cd6a40',
        'Rejected (Mill Edge Cracks)' : '#e6d37d',
        'Rejected (Edge Cracks)' : '#e6d37d',
        'Rejected (Mill - Oscillated ID)' : '#ae1984',
        'Rejected (Oscillated ID)' : '#ae1984',
        'Rejected (Mill - Gauge Spikes)' : '#ef5614',
        'Rejected (Gauge Spikes)' : '#ef5614',
        'Rejected (Mill - Crane Damage)' : '#2f61df',
        'Rejected (Crane Damage)' : '#2f61df',
        'Rejected (Mill - Too Small)' : '#47740e' ,
        'Rejected (Too Small)' : '#47740e' ,
        'Rejected (Cast - Voids)' : '#e785d7',
        'Rejected (Voids)' : '#e785d7',
        'Rejected (Cast - Too Small)' : '#7f1ba7',
        'Rejected (Too Small)' : '#7f1ba7',
        'Rejected (Cast - Dog Ears)' : '#62a58d',
        'Rejected (Dog Ears)' : '#62a58d',
        'Rejected (Cast - Profile)' : '#4af144',
        'Rejected (Profile)' : '#4af144',
        'Rejected (Cast - Edge Freeze)' : '#e0481b',
        'Rejected (Edge Freeze)' : '#e0481b',
        'Rejected (Inclusions - Dross)' : '#e04765',
        'Rejected (Shape)' : '#75AED5',
        "Web Breaks" : "#75AEC0",
        "Non Standard" : "#3b2064",
        "Good" : "#CD6A40"
    }
    ,
    pieChartOptions : {
            chart: {
                type: 'pieChart',
                height: 300,
                width: 400,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                labelType: 'percent',
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legendPosition: 'right'
            }
        },

}

export default Config;