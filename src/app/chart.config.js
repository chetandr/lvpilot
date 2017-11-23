const Config = {
    'pieChart' : {
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
                labelType: 'value',
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
    'scatterChart' : {
        "chart": {
            "type": "scatterChart",
            "height": 450,
            "color": [
                "#1f77b4",
                "#ff7f0e",
                "#2ca02c",
                "#d62728",
                "#9467bd",
                "#8c564b",
                "#e377c2",
                "#7f7f7f",
                "#bcbd22",
                "#17becf"
            ],
            "scatter": {
                "onlyCircles": false
            },
            "showDistX": true,
            "showDistY": true,
            "duration": 350,
            "xAxis": {
                "axisLabel": "X Axis"
            },
            "yAxis": {
                "axisLabel": "Y Axis",
                "axisLabelDistance": -5
            },
            "zoom": {
                "enabled": true,
                "scaleExtent": [
                    1,
                    10
                ],
                "useFixedDomain": false,
                "useNiceScale": false,
                "horizontalOff": false,
                "verticalOff": false,
                "unzoomEventType": "dblclick.zoom"
            }
        }
    },
    'multiChart':  {
        "chart": {
            "type": "multiChart",
            "height": 450,
            "color": [
                "#1f77b4",
                "#ff7f0e",
                "#2ca02c",
                "#d62728",
                "#9467bd",
                "#8c564b",
                "#e377c2",
                "#7f7f7f",
                "#bcbd22",
                "#17becf"
            ],
            "duration": 500,
        }
    }

}

export default Config;