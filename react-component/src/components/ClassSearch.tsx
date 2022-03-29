import React from "react";

export default class ClassSearch extends React.Component{
  constructor(props:string){
    super(props);
  }

  render(): React.ReactNode {
      return(
        <div>
          <input className="inputSearch" type="text" placeholder="Enter search" id="" />
          <button className="btnSearch">Search</button>
        </div>
      
      )
  }

}