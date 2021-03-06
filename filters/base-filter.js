class BaseFilter {
    constructor(areaId, label, dataKey, filtersMapKey) {
        this.areaId = areaId;
        this.label = label;
        this.dataKey = dataKey;
        this.filtersMapKey = filtersMapKey;
        this.event = document.createEvent('Event');
        this.event.initEvent('update', true, true);
    }

    addFilterPlaceholder() {
        const filterArea = document.getElementById(this.areaId);
        filterArea.innerHTML = `<hr><h5 class="text-center">${this.label}
                                                <button type="button" data-toggle="collapse"  
                                                    id=${this.areaId + '-filters-group-toggle'}
                                                    aria-expanded="true" aria-controls=${this.areaId + '-filters-group'} 
                                                    class="btn btn-link float-right p-0" data-target=${'#' + this.areaId + '-filters-group'}>
                                                      <i class="fas fa-minus-square text-dark" id=${this.areaId + '-filters-group-icon'}></i>
                                                </button>
                                                </h5>`;
    }
}
