import toysDataUrl from '../toys-data.json'
import Fiter from './filter';
import data from '../data'

export interface IToysData{
  num: string,
  name: string,
  count: number,
  year: number,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
  selected: boolean
}


/*
interface IDataDto{
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}

type IToysDto = Record<string, IDataDto>
*/

export class ToysData {
  data: Array<IToysData>;
  constructor() {
  }
 

  loadData(){
    const modelData:IToysData[] = data.map((it, index) => {
      const item = data[index];
      return {
        num: item.num,
        name: item.name,
        count: Number(item.count),
        year: Number(item.year),
        shape: item.shape,
        color: item.color,
        size: item.size,
        favorite: item.favorite,
        selected: false
      }
    })
    return modelData;
  }



  
// private async loadData(url:string): Promise<Array<IToysData>> {
//    return fetch(url).then(res=>res.json());
/*.then((toysData: IToysDto)=>{
      const modelData: Array<IToysData> = Object.keys(toysData).map(it=>{
        const item = toysData[it];
        const record: IToysData = {
          name: item.name,
          count: Number(item.count),
          year: Number(item.year),
          shape: item.shape,
          color: item.color,
          size: item.size,
          favorite: item.favorite
        };
        return record;
      });
      return modelData;
    });*/
 // } 
}