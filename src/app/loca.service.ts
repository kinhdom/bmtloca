import { Injectable } from '@angular/core';

@Injectable()
export class LocaService {
  selectedItem:any;

  constructor() { }
  loadItem(){
    return this.selectedItem;
  }
  edit(item){
    this.selectedItem = item;
  }
}
