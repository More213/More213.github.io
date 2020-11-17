import {Component, Input, ViewChild} from '@angular/core';
import { Owner } from '../../../interfaces/owner';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.css']
})
export class OverviewTableComponent{
  public owners: Owner[] = ownersArray;

  @Input() owner!: Owner;

}

export const ownersArray: Owner[] = [
  new Owner('dsfsd', 'sdfsdf', 'asdasds', 'dasdsad', 'dgfg', '99999999', 1),
  new Owner('dsfsd', 'sdfsdf', 'asdasds', 'dasdsad', 'dgfg', '99999999',2)
];
