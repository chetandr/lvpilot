import find from 'lodash-es/find';

const ClusterSevice =(AppConfig, $http, $stateParams, Clusters) => {
    return {
        addCluster(cluster) {
            const idx = find(Clusters.list, item => item.name == cluster);
            if(!idx) {
                Clusters.list.push({ name : cluster, selected: true})
            } else {
                idx.selected = !idx.selected;
            }
        }
    }
}

export default ClusterSevice;