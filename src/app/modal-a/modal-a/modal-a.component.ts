import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-a',
  templateUrl: './modal-a.component.html',
  styleUrls: ['./modal-a.component.scss']
})
export class ModalAComponent implements OnInit {

  constructor(
    private _modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  

}
