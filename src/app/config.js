const Config = {
    title : 'Lousville Project POC',
    beta : true,
    restUrls : {
        SUMMARY_DATA : "http://localhost/RankLousvillePOC/Data/getSummaryData.php",
        REJECT_REASON_COUNT : "http://localhost/RankLousvillePOC/Data/getRejectReasonCount.php",
        ML_IMPORTANT_FACTORS : "http://localhost/RankLousvillePOC/Data/getFactors.php",
        ML_IMPORTANT_FACTORS_MILL_SPEED : "http://localhost/RankLousvillePOC/Data/getFactorsForMillSpeed.php",
        ML_COIL_FACTORS : "http://localhost/RankLousvillePOC/Data/getMLForCoilFactors.php",
        MILLS : "http://localhost/RankLousvillePOC/Data/getMills.php",
        CONTROL_LIMITS : "http://localhost/RankLousvillePOC/Data/getControlLimits.php",
        MILL_SPEED_TREND : "http://localhost/RankLousvillePOC/Data/getMillSpeedTrend.php",
        FILTERS : "http://localhost/RankLousvillePOC/Data/getFilters.php",
        IDENTIFIED_REASONS : "http://localhost/RankLousvillePOC/Data/getIdentifiedReasons.php",
        FACTOR_REASONS : "http://localhost/RankLousvillePOC/Data/getRejectFactorReason.php",
    },
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