import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Owner} from '../../../models/interfaces/owner';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
import { ownersArray } from '../overview-table/overview-table.component';

@Component({
  selector: 'app-overview-form',
  templateUrl: './overview-form.component.html',
  styleUrls: ['./overview-form.component.scss']
})
export class OverviewFormComponent implements OnInit {
  public warnText = '';
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    profits: new FormControl('', [Validators.required, Validators.pattern('[+]?[0-9]*[.,]?[0-9]+')]),
    losses: new FormControl('', [Validators.required, Validators.pattern('[+]?[0-9]*[.,]?[0-9]+')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')]),
    id: new FormControl(1)
  });

  @Output() addNewOwner = new EventEmitter<Owner>();
  public owners: Owner[] = ownersArray;
  regex = RegExp('[+]?[0-9]*[.,]?[0-9]+');


  constructor(public dialogRef: MatDialogRef<OverviewFormComponent>) {}

  ngOnInit(): void {}

  changeFormatPhone(telephone: string): string {
    const tel = telephone.replace(/[()-]/g, '');
    const newPhoneFormat = `${tel.slice(0, 1)}(${tel.slice(1, 4)})${tel.slice(4, 7)}-${tel.slice(7, 9)}-${tel.slice(9, 11)}`;
    return newPhoneFormat;
  }

  checkProfits(): void {
    if (!this.profileForm.value.profits) {
      this.warnText = 'please enter profits';
    } else if (this.regex.test(this.profileForm.value.profits)) {
      this.warnText = 'please enter a positive profits';
    }
  }

  checkLosses(): void {
    if (!this.profileForm.value.losses) {
      this.warnText = 'please enter losses';
    } else if (this.regex.test(this.profileForm.value.losses)) {
      this.warnText = 'please enter a positive losses';
    }
  }

  validationForm(): void {
    if (!this.profileForm.value.firstName) {
      this.warnText = 'please enter name';
    } else if (!this.profileForm.value.lastName) {
      this.warnText = 'please enter your last name';
    } else if (!this.profileForm.value.endDate) {
      this.warnText = 'please enter date';
    }
    this.checkProfits();
    this.checkLosses();
    // } else if (!this.profileForm.value.profits) {
    //   this.warnText = 'please enter your last name';
    // } else if (!this.profileForm.value.losses) {
    //   this.warnText = 'please enter your last name';
    // } else if (!this.profileForm.value.phone) {
    //   this.warnText = 'please enter your last name'; }
    // } else if (!this.profileForm.value.phone) {
    //   this.warnText = '';
    // }
  }

  public onAdd(): void {
    this.validationForm();
    this.profileForm.value.id = ++this.profileForm.value.id;
    this.profileForm.value.endDate = moment(this.profileForm.value.endDate).format('DD/MM/YY');
    const owner = new Owner(
      this.profileForm.value.firstName,
      this.profileForm.value.lastName,
      this.profileForm.value.endDate,
      this.profileForm.value.profits,
      this.profileForm.value.losses,
      this.changeFormatPhone(this.profileForm.value.phone),
      this.profileForm.value.id,
      );
    this.addNewOwner.emit(owner);
    // this.profileForm.reset();
    // this.onNoClick();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
