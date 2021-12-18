const defaultFilter: Record<string, Array<string>> = {
  'count': ['0', '12'],
  'year': ['1950', '2010'],
}

export default class FiterByRanges {
  filterValues: Record<string, Array<string>>;
  constructor(/*values: Array<string>*/) {
    // this.filterValues = values;
  }

  loadFromLocalstorage() {
    const storageData: string | null = localStorage.getItem('filter');
    if (storageData) {
      // write data from localstorage;
    } else {
      this.filterValues = defaultFilter;
    }
  }

  changeFilterValue(type: string, min: string, max: string): void {
    this.filterValues[type][0] = min;
    this.filterValues[type][1] = max;

  }
}