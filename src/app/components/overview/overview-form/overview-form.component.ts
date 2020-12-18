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
  @Output() addNewOwner = new EventEmitter<Owner>();
  public owners: Owner[] = ownersArray;
  regexNumber = RegExp('[+]?[0-9]*[.,]?[0-9]+');
  regexTel = RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$');
  public warnText = {
    firstName: '',
    lastName: '',
    endDate: '',
    profits: '',
    losses: '',
    phone: '',
  };
  formValid = false;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    endDate: new FormControl(''),
    profits: new FormControl(null),
    losses: new FormControl(null),
    phone: new FormControl(null),
    id: new FormControl(1)
  });

  constructor(public dialogRef: MatDialogRef<OverviewFormComponent>) {}

  ngOnInit(): void {}

  changeFormatPhone(telephone: string): string {
    const tel = telephone.replace(/[()-]/g, '');
    const newPhoneFormat = `${tel.slice(0, 1)}(${tel.slice(1, 4)})${tel.slice(4, 7)}-${tel.slice(7, 9)}-${tel.slice(9, 11)}`;
    return newPhoneFormat;
  }

  checkProfits(): void {
    if (!this.profileForm.value.profits) {
      this.warnText.profits = 'please enter profits';
      this.formValid = false;
    } else if (this.profileForm.value.profits < 0) {
      this.warnText.profits = 'please enter a positive profits';
      this.formValid = false;
    } else {
      this.warnText.profits = '';
      this.formValid = true;
    }
  }

  checkLosses(): void {
    if (!this.profileForm.value.losses) {
      this.warnText.losses = 'please enter losses';
      this.formValid = false;
    } else if (this.profileForm.value.losses < 0) {
      this.warnText.losses = 'please enter a positive losses';
      this.formValid = false;
    } else {
      this.warnText.losses = '';
      this.formValid = true;
    }
  }

  checkPhone(): void {
    if (!this.profileForm.value.phone) {
      this.warnText.phone = 'please enter phone';
      this.formValid = false;
    } else if (`${this.profileForm.value.phone}`.length < 9) {
      this.warnText.phone = 'please enter a phone';
      this.formValid = false;
    } else {
      this.warnText.phone = '';
      this.formValid = true;
    }
  }

  checkFirstName(): void {
    if (!this.profileForm.value.firstName) {
      this.warnText.firstName = 'please enter name';
      this.formValid = false;
    } else {
      this.warnText.firstName = '';
      this.formValid = true;
    }
  }
  checkLastName(): void {
    if (!this.profileForm.value.lastName) {
      this.warnText.lastName = 'please enter your last name';
      this.formValid = false;
    } else {
      this.warnText.lastName = '';
      this.formValid = true;
    }
  }

  checkEndDate(): void {
    if (!this.profileForm.value.endDate) {
      this.warnText.endDate = 'please enter date';
      this.formValid = false;
    } else {
      this.warnText.endDate = '';
      this.formValid = true;
    }
  }

  validationForm(): void {
    this.checkFirstName();
    this.checkLastName();
    this.checkEndDate();
    this.checkProfits();
    this.checkLosses();
    this.checkPhone();
  }

  public onAdd(): void {
    this.validationForm();
    if (this.formValid) {
      this.profileForm.value.id = ++this.profileForm.value.id;
      const owner = new Owner(
        this.profileForm.value.firstName,
        this.profileForm.value.lastName,
        this.profileForm.value.endDate,
        this.profileForm.value.profits,
        this.profileForm.value.losses,
        this.profileForm.value.phone,
        this.profileForm.value.id,
      );
      this.addNewOwner.emit(owner);
      this.profileForm.reset();
      this.onNoClick();
    }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
