import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBComponent } from 'src/app/modal-b/modal-b/modal-b.component';

@Component({
  selector: 'trigger-b',
  templateUrl: './trigger-b.component.html',
  styleUrls: ['./trigger-b.component.scss']
})
export class TriggerBComponent implements OnInit {

  constructor(
    private _modalSerivce: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  public openModalB() {
    this._modalSerivce.open(ModalBComponent);
  }

}
