import { IToysData } from "./newDataModel";
const defaultFilter: Record<string, Array<string>> = {
  'shape': [],
  'color': [],
  'size': [],
  'count': ['0', '12'],
  'year': ['1940', '2020'],
};

export default class Filter {
  filterValues: Record<string, Array<string>>;
  toys: IToysData[];
  selectedToys: IToysData[];
  constructor(toys: IToysData[]) {
    this.toys = toys;
    this.selectedToys = [];
    this.loadFromLocalstorage();
  }

  filtrateData() {
    let arr: Array<IToysData> = [];
    let arr2: Array<IToysData> = [];
    let arr3: Array<IToysData> = [];
    let arr4: Array<IToysData> = [];

    if (this.filterValues['shape'].length == 0 &&
      this.filterValues['color'].length == 0 &&
      this.filterValues['size'].length == 0) {
      arr3 = this.toys;
    } else {
      if (this.filterValues['shape'].length) {
        arr = this.toys.filter(value =>
          !!this.filterValues['shape'].includes(value['shape']))
      } else { arr = this.toys }
      if (this.filterValues['color'].length) {
        arr2 = arr.filter(value =>
          !!this.filterValues['color'].includes(value['color']))
      } else { arr2 = arr };
      if (this.filterValues['size'].length) {
        arr3 = arr2.filter(value =>
          !!this.filterValues['size'].includes(value['size']))
      } else { arr3 = arr2 };
    }

    arr4 = arr3.filter(value =>
      (value['count'] >= +this.filterValues['count'][0] &&
        value['count'] <= +this.filterValues['count'][1])
      && (
        value['year'] >= +this.filterValues['year'][0] &&
        value['year'] <= +this.filterValues['year'][1]
      )
    )
    return arr4;
  }

  selectToy(num: string) {
    //console.log(this.selectedToys);
    this.toys.map(item => {
      if (item['num'] == num) {
        item['selected'] = (item['selected'] == false);
        if (this.selectedToys.findIndex(value => {
          return value.num === num}) != -1) 
        {const index = this.selectedToys.findIndex(value => {return value.num == num});
          this.selectedToys.splice(index, 1);
        } else {
          this.selectedToys.push(item);
         // console.log('selected', this.selectedToys);
        }
      //console.log(this.selectedToys.findIndex(value => { return value.num === num } ));
      } 
    })
  }

  // countSelectedToys(): number {
  //   let sum: number = 0;
  //   this.toys.forEach((current) => {
  //     if (current.selected == true) { sum++ }
  //   })
  //   return sum;
  // }

  loadFromLocalstorage() {
    const storageData: string | null = localStorage.getItem('filter');
    if (storageData) {
      // write data from localstorage;
    } else {
      //this.resetFilter();
      this.filterValues = defaultFilter;
    }
  }

  resetFilter() {
    this.filterValues = {
      'shape': [],
      'color': [],
      'size': [],
      'count': ['0', '12'],
      'year': ['1940', '2020'],
    }
    //console.log('filtervalues', this.filterValues);
  }

  addFilterValue(type: string, value: string): void {
    this.filterValues[type].push(value);
  }

  removeFilterValue(type: string, value: string): void {
    const index = this.filterValues[type].indexOf(value);
    this.filterValues[type].splice(index, 1);
  }

  changeFilterValue(type: string, min: string, max: string): void {
    this.filterValues[type][0] = min;
    this.filterValues[type][1] = max;
  }
}