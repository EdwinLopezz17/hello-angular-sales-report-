import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  title = 'Item List (edited Zepol)'
  date = new Date();
  simpleDate !: string |null;
  longDate !: string | null;
  discount = 20.39;
  items: any[]=[
    {id: 1, name: 'iPhone 14', desc:'Refurbished iPhone 14', price: 1099},
    {id: 2, name: 'Samsung S23', desc:'A great Samsung Galaxy % series smartphone', price: 869},
    {id: 3, name: 'Asus R06 Phone 7', desc:'lorem footer forthe green', price: 939},
    {id: 4, name: 'Sony X-Perya L1', desc:'Color is black', price: 569.90},

  ];

  constructor(private datePipe: DatePipe) {

  }

  updateDate():void{
    this.date = new Date();
    this.longDate = this.datePipe.transform(this.date, 'long');
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
}
