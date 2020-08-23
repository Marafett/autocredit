import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreditPopupComponent } from '../credit-popup/credit-popup.component';

@Component({
  selector: 'app-auto-popup',
  templateUrl: './auto-popup.component.html',
  styleUrls: ['./auto-popup.component.scss'],
})
export class AutoPopupComponent implements OnInit {
  title: string;
  img: string;
  price: number;
  elementaryPrice: number;
  stepUp: number;
  minPrice: number;
  oneProcent: number;
  elementaryFee: number = 10000;
  minDate: number;
  elementaryDay: number;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.elementaryPrice = this.price / 10;
    this.oneProcent = this.price / 100;
    this.minPrice = this.price / 10;
    this.stepUp = this.price / 20;
    this.minDate = Math.ceil((this.price - this.minPrice) / 100000);
    this.changePriceAndFee();
  }
  changePriceAndFee() {
    this.elementaryDay = Math.ceil(
      (this.price - this.elementaryPrice) / this.elementaryFee
    );
  }
  changeDay() {
    this.elementaryFee = Math.floor(
      (this.price - this.elementaryPrice) / this.elementaryDay
    );
  }
  openModal() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(CreditPopupComponent);
  }
}
