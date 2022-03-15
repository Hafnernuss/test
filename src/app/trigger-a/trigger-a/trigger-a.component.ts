import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAComponent } from 'src/app/modal-a/modal-a/modal-a.component';
import { ModalBComponent } from 'src/app/modal-b/modal-b/modal-b.component';

@Component({
  selector: 'trigger-a',
  templateUrl: './trigger-a.component.html',
  styleUrls: ['./trigger-a.component.scss']
})
export class TriggerAComponent implements OnInit {

  constructor(
    private _modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }


  public openModalA() {
    this._modalService.open(ModalAComponent);
  }
}

