const ControlLimits = () => {
    return {
        lousville : {
            targetGauge: {max:0, min:0},
            rewindTension: {max:0, min:0},
            unwindTension: {max:0, min:0},
            rollLoad: {max:0, min:0},
            coolantTemp: {max:0, min:0}
        },
        hotsprings : {
            targetGauge: {max:0, min:0},
            rewindTension: {max:0, min:0},
            unwindTension: {max:0, min:0},
            rollLoad: {max:0, min:0},
            coolantTemp: {max:0, min:0}
        }

    }
}

export default ControlLimits;