
const defaultFilter:Record<string, Array<string>> = {
                          'shape':[],
                          'color':[],
                          'size':[],
                          } 

export default class Fiter{
  filterValues: Record<string, Array<string>>;
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

  addFilterValue(type:string, value:string):void{
    this.filterValues[type].push(value);
  }

  removeFilterValue(type:string, value:string):void{
    const index = this.filterValues[type].indexOf(value);
    this.filterValues[type].splice(index, 1);
  }
}