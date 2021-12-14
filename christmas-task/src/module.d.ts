declare module '*.jpg' {
  const a:string;
  export default a;
}

//  declare module '*/style.css'{
//    const a: {page:string};
//    export default a;
//  }
declare module '*.css'{
  interface IClassNames{
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.json'{
  const res: string;
  export default res;
}

//declare module '*.css';
