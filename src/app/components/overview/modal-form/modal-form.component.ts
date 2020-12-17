import {Component, Inject, OnInit} from '@angular/core';
import {Owner} from '../../../models/interfaces/owner';
import {ownersArray} from '../overview-table/overview-table.component';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  public owners: Owner[] = ownersArray;
  constructor(public dialogRef: MatDialogRef<ModalFormComponent>) {}

  ngOnInit(): void {
  }

  onAdd(owner: Owner): void {
    this.owners.push(owner);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
