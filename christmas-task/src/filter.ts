
const defaultFilter:Array<string> = []; 

export default class Fiter{
  filterValues: Array<string>;
  constructor(/*values: Array<string>*/){
   // this.filterValues = values;
  }

  loadFromLocalstorage(){
    const storageData:string|null = localStorage.getItem('filter');
    if(storageData){
      // write data from localstorage;
    }else {
      this.filterValues = defaultFilter;
    }
  }

  addFilterValue(value:string):void{
    this.filterValues.push(value);
  }

  removeFilterValue(value:string):void{
    const index = this.filterValues.indexOf(value);
    this.filterValues.splice(index, 1);
  }
}