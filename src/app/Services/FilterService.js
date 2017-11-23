const FilterService =(AppConfig, $http, $stateParams, Filters) => {
    return {
        setFilters(filters) {
            Filters.list = filters;
        },
        getFilters() {
            return Filters.list;
        },
        setValue(key, value){
            Filters.values[key] = value;
        },
        getValue(key){
            return Filters.values[key];
        },

    }
};

export default FilterService;