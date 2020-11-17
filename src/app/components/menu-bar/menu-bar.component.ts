import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../../interfaces/item-menu';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  items: ItemMenu[] = [
    { nameItem: 'Overview', urlImg: 'Overview', URL: ''},
    { nameItem: 'Cloud', urlImg: 'Cloud', URL: 'Cloud'},
    { nameItem: 'Sketch', urlImg: 'Sketch', URL: 'Sketch'},
    { nameItem: 'Experiments', urlImg: 'Experiments', URL: 'Experiments'},
    { nameItem: 'Security', urlImg: 'Security', URL: 'Security'},
    { nameItem: 'Ownership',  urlImg: 'Owenership', URL: 'Owenership'},
    { nameItem: 'A/B Test', urlImg: 'ABTest', URL: 'ABTest'},
    { nameItem: 'Colors', urlImg: 'Colors', URL: 'Colors'},
  ];

  ngOnInit(): void {
  }

}
