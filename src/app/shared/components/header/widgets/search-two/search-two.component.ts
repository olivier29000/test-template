import { Component } from '@angular/core';

@Component({
  selector: 'app-search-two',
  templateUrl: './search-two.component.html',
  styleUrls: ['./search-two.component.scss']
})
export class SearchTwoComponent {

  public open: boolean = false;
  public selectedItem: string = 'Apartment'

  openMenu(){
    this.open =! this.open;
  }

  changedItem(item: string){
    this.selectedItem = item
  }
}
