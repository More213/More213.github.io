import {Component, OnInit} from '@angular/core';
import {Owner} from '../../interfaces/owner';
import {ownersArray} from './overview-table/overview-table.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
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
