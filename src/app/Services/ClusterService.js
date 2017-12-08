import find from 'lodash-es/find';
import filter from 'lodash-es/filter';

const ClusterSevice =(AppConfig, $http, $stateParams, Clusters) => {
    return {
        addCluster(cluster) {
            const idx = find(Clusters.list, item => item.name == cluster);
            Clusters.list.push({ name : cluster, selected: true})
            console.log(Clusters.list);
        },
        removeCluster(cluster) {
            const idx = find(Clusters.list, item => item.name == cluster);
            const newList = [];
            Clusters.list = filter(Clusters.list, item => item.name != cluster)
            console.log(Clusters.list);
        }
    }
}

export default ClusterSevice;