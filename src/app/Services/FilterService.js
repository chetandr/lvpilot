const FilterService =(AppConfig, $http, $stateParams, Filters) => {
    return {
        setFilters(filters) {
            Filters.list = filters;
        },
        getFilters() {
            return Filters.list;
        }
    }
};

export default FilterService;