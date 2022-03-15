import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBComponent } from './modal-b/modal-b.component';
import { TriggerAModule } from '../trigger-a/trigger-a.module';

@NgModule({
  declarations: [
    ModalBComponent,
  ],
  imports: [
    CommonModule,
    TriggerAModule,
  ],
  exports: [
    ModalBComponent,
  ]
})
export class ModalBModule { }
