declare class CustomLog {
  constructor() {}

  declare info(message:any) : any;
  declare debug(message:any) : any;
  declare warn(message:any) : any;
  declare error(message:any) : any;
  declare traceLog(message:any) : any;
}

export = new CustomLog();