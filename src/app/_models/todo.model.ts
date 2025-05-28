import { Data } from "@angular/router";

export class todoforsavemodel {
    title:string
    description:string
    date:Date
    constructor(title:string='', description:string='', date:Date = new Date()){
        this.title=title;
        this.description=description;
        this.date=date;
    }
}
export class todoforlistmodel{
    id:number
    title:string
    description:string
    date:Date
    constructor(id:number=0 , title:string='', description:string='', date :Date =new Date() ){
        this.id=id;
        this.title=title;
        this.description=description;
        this.date=date;
    }
}


export class dataforlist{
    date:Date
    constructor(date:Date = new Date){
        this.date=date;
    }
   
}