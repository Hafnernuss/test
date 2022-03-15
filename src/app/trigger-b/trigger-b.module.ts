import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerBComponent } from './trigger-b/trigger-b.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBModule } from '../modal-b/modal-b.module';



@NgModule({
  declarations: [
    TriggerBComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    ModalBModule,
  ],
  exports: [
    TriggerBComponent,
  ]
})
export class TriggerBModule { }
