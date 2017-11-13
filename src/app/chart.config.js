const Config = {
    pieChart : {
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
                legendPosition: 'top'
            }
        },
    'multiBar' : {
        "chart": {
            "type": "multiBarChart",
            "height": 400,
            "margin": {
                "top": 30,
                "right": 75,
                "bottom": 50,
                "left": 75
            },

        }
    },
    'discreteBar' : {
        "chart": {
            "type": "discreteBarChart",
            "height": 400,
            "margin": {
                "top": 30,
                "right": 75,
                "bottom": 50,
                "left": 75
            }
        }
    },

}

export default Config;