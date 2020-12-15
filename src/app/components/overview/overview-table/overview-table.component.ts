import {Component, Input, ViewChild} from '@angular/core';
import { Owner } from '../../../models/interfaces/owner';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']
})
export class OverviewTableComponent{
  public owners: Owner[] = ownersArray;

  @Input() owner!: Owner;

}

export const ownersArray: Owner[] = [
  new Owner('Savannah', 'Nguyen', '1/09/20', '1000', '100', '99999999', 1),
  new Owner('Jenny', 'Wilson', '15/09/20', '1000', '100', '99999999',2),
  new Owner('Annette', 'Black', '15/09/20', '1000', '100', '99999999',3),
  new Owner('Kathryn', 'Murphy', '15/09/20', '1000', '100', '99999999',4),
  new Owner('Cameron', 'Williamson', '15/09/20', '1000', '100', '99999999',5),
  new Owner('Kristin', 'Watson', '15/09/20', '1000', '100', '99999999',6),
  // new Owner('Eleanor', 'Pena', '15/09/20', '1000', '100', '99999999',7),
  // new Owner('Guy', 'Hawkins', '15/09/20', '1000', '100', '99999999',8),

];
