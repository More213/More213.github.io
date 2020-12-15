import {Component, OnInit} from '@angular/core';
import {Owner} from '../../models/interfaces/owner';
import {ownersArray} from '../../components/overview/overview-table/overview-table.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  public owners: Owner[] = ownersArray;

  ngOnInit(): void {
  }

  onAdd(owner: Owner): void {
    this.owners.push(owner);
  }

  openPopup(): void {

  }
}
