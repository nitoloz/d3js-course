class Filters {

    constructor() {
        this.filters = {
            sex: {
                areaId: 'sex-filters',
                label: 'Sex',
                values: [],
                selectedValues: [],
                type: FILTER_TYPES.CHECKBOX
            },
            city: {
                areaId: 'city-filters',
                label: 'City',
                values: [],
                selectedValues: [],
                type: FILTER_TYPES.CHECKBOX
            },
            companyType: {
                areaId: 'company-type-filters',
                label: 'Company type',
                values: [],
                selectedValues: [],
                type: FILTER_TYPES.CHECKBOX
            },
            seniorityLevel: {
                areaId: 'seniority-level-filters',
                label: 'Seniority level',
                values: [],
                selectedValues: [],
                type: FILTER_TYPES.CHECKBOX
            }
        };
    }

    updateData(data) {
        this.data = data;
        this.calculateFilterValues();
        this.appendFiltersToPage();
    }

    calculateFilterValues() {
        this.filters.city.values = this.getFilterValues(DataProperties.CITY);
        this.filters.sex.values = this.getFilterValues(DataProperties.SEX);
        this.filters.companyType.values = this.getFilterValues(DataProperties.COMPANY_TYPE);
        this.filters.seniorityLevel.values = this.getFilterValues(DataProperties.SENIORITY_LEVEL);
    }

    appendFiltersToPage() {
        Object.keys(this.filters).forEach(key => {
            switch (this.filters[key].type) {
                case FILTER_TYPES.CHECKBOX:
                    const filterArea = document.getElementById(this.filters[key].areaId);
                    filterArea.innerHTML = `<hr><h5 class="text-center">${this.filters[key].label}</h5>`;
                    this.filters[key].values.forEach((value, index) => {
                        this.appendCheckbox(filterArea, value, key, index)
                    });
                    break;
                default:
                    break;
            }

        });
    }

    appendCheckbox(filterArea, value, filterKey, index) {
        let input = document.createElement("input");
        input.value = (value + '</br>');
        input.checked = true;
        input.type = "checkbox";
        input.id = filterKey + index;
        input.addEventListener('change', function () {
            if (this.checked) {
                console.log(`${filterKey} ${value} TRUE`);
            } else {
                console.log(`${filterKey} ${value} FALSE`);
            }
        });

        let text = document.createElement("span");
        text.innerHTML = value;
        let br = document.createElement("br");

        filterArea.appendChild(input);
        filterArea.appendChild(text);
        filterArea.appendChild(br);

    }

    getFilterValues(filterProperty) {
        return [...new Set(this.data.map(d => d[filterProperty]).filter(value => !!value).sort())];
    }
}