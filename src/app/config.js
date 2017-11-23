const env = "dev";
const url =  env == 'prod' ? 'http://rlldchdp01.pactiv.com/lvpilot/Data/' : "http://localhost/RankLousvillePOC/Data/";

const Config = {
    title : 'Lousville Project POC',
    beta : true,

    restUrls : {
        SUMMARY_DATA : url + "getSummaryData.php",
        REJECT_REASON_COUNT : url + "getRejectReasonCount.php",
        ML_IMPORTANT_FACTORS : url + "getFactors.php",
        ML_IMPORTANT_FACTORS_MILL_SPEED : url + "getFactorsForMillSpeed.php",
        ML_COIL_FACTORS : url + "getMLForCoilFactors.php",
        MILLS : url + "getMills.php",
        CONTROL_LIMITS : url + "getControlLimits.php",
        MILL_SPEED_TREND : url + "getMillSpeedTrend.php",
        FILTERS : url + "getFilters.php",
        IDENTIFIED_REASONS : url + "getIdentifiedReasons.php",
        FACTOR_REASONS : url + "getRejectFactorReason.php",
    },
    colors : {
        'Accepted' : '#cd6a40',
        'Rejected (Mill Edge Cracks)' : '#e6d37d',
        'Rejected (Mill - Oscillated ID)' : '#ae1984',
        'Rejected (Mill - Gauge Spikes)' : '#ef5614',
        'Rejected (Mill - Crane Damage)' : '#2f61df',
        'Rejected (Mill - Too Small)' : '#47740e' ,
        'Rejected (Cast - Voids)' : '#e785d7',
        'Rejected (Cast - Too Small)' : '#7f1ba7',
        'Rejected (Cast - Dog Ears)' : '#62a58d',
        'Rejected (Cast - Profile)' : '#4af144',
        'Rejected (Cast - Edge Freeze)' : '#e0481b',
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