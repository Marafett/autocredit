import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-credit-popup',
  templateUrl: './credit-popup.component.html',
  styleUrls: ['./credit-popup.component.scss'],
})
export class CreditPopupComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}
