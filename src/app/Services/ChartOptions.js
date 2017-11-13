import Config from '../chart.config';

const ChartOptions = () => {
    return {
        getOption(type){
            return Config[type];
        }
    }
};

export default ChartOptions;
