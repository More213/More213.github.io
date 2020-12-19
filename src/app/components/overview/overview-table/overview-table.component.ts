import { Component, Input } from '@angular/core';
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
  new Owner('Savannah', 'Nguyen', '1/09/20', '100', '100', '79000000000', 1),
  new Owner('Jenny', 'Wilson', '15/09/20', '100', '100', '79000000000', 2),
  new Owner('Annette', 'Black', '15/09/20', '100', '100', '79000000000', 3),
  new Owner('Kathryn', 'Murphy', '15/09/20', '100', '100', '79000000000', 4),
  new Owner('Cameron', 'Williamson', '15/09/20', '100', '100', '79000000000', 5),
  new Owner('Kristin', 'Watson', '15/09/20', '100', '100', '79000000000', 6),
];
