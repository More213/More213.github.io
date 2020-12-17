import {Component, OnInit} from '@angular/core';
import {Owner} from '../../models/interfaces/owner';
import {ownersArray} from '../../components/overview/overview-table/overview-table.component';
import {MatDialog} from "@angular/material/dialog";
import {ModalFormComponent} from "../../components/overview/modal-form/modal-form.component";
import {OverviewFormComponent} from "../../components/overview/overview-form/overview-form.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  public owners: Owner[] = ownersArray;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onAdd(owner: Owner): void {
    this.owners.push(owner);
  }
}
