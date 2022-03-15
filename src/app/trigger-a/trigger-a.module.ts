import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerAComponent } from './trigger-a/trigger-a.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAModule } from '../modal-a/modal-a.module';



@NgModule({
  declarations: [
    TriggerAComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    //ModalAModule,
  ],
  exports: [
    TriggerAComponent,
  ]
})
export class TriggerAModule { }
