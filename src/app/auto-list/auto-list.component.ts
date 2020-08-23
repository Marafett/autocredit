import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { auto } from '../../auto.js';
import { AutoPopupComponent } from '../auto-popup/auto-popup.component.js';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss'],
})
export class AutoListComponent implements OnInit {
  auto: [];
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.auto = auto;
  }
  openModal(auto) {
    const initialState = {
      title: auto.series,
      img: auto.img,
      price: auto.price,
    };
    this.bsModalRef = this.modalService.show(AutoPopupComponent, {
      initialState,
    });
  }
}
