import toysDataUrl from './toys-data.json'

export interface IToysData{
  num: string,
  name: string,
  count: number,
  year: number,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}

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


export class ToysData {
  data: Array<IToysData>;
  constructor() {
  }
 
  public async build(){
    this.data = await this.loadData(toysDataUrl)
    return this;
  }

 private async loadData(url:string): Promise<Array<IToysData>> {
    return fetch(url).then(res=>res.json());/*.then((toysData: IToysDto)=>{
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
  } 
}