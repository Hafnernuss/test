import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAComponent } from './modal-a/modal-a.component';
import { TriggerBModule } from '../trigger-b/trigger-b.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ModalAComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    TriggerBModule,
  ],
  exports: [
    ModalAComponent,
  ]
})
export class ModalAModule { }
