import { IToysData } from "./newDataModel";
const defaultFilter: Record<string, Array<string>> = {
  'shape': [],
  'color': [],
  'size': [],
  'count': ['0', '12'],
  'year': ['1950', '2010'],
}

export default class Fiter {
  filterValues: Record<string, Array<string>>;
  toys: IToysData[];
  constructor(toys: IToysData[]) {
    this.toys = toys;
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

  loadFromLocalstorage() {
    const storageData: string | null = localStorage.getItem('filter');
    if (storageData) {
      // write data from localstorage;
    } else {
      this.filterValues = defaultFilter;
    }
  }

  setFilter() {

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