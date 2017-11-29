import filter from 'lodash-es/map';

export default class InsightDetailCtrl {

    constructor(Clusters){
        this.Clusters = Clusters;
        this.currentPage = 0;
        this.pageSize = 1;

    }

    $onInit() {
        this.maxPage = this.factors.length / this.pageSize;
        this.pageFactors = filter(this.factors, (factor,index) => {return (index >= this.currentPage && index < this.currentPage + this.pageSize)});
        console.log(this.pageFactors);
        //this.CoilDataService.getMills().then(result => {this.mills= result});
    }

    $onNext() {
        if(this.currentPage < this.maxPage)
            this.currentPage+=this.pageSize;
    }

    $onPrev() {
        if(this.currentPage > 0)
            this.currentPage--;
    }
}