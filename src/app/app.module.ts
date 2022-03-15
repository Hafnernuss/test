import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TriggerAModule } from './trigger-a/trigger-a.module';
import { TriggerBModule } from './trigger-b/trigger-b.module';
import { ModalAModule } from './modal-a/modal-a.module';
import { ModalBModule } from './modal-b/modal-b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TriggerBModule,
    TriggerAModule,
    // ModalAModule,
    // ModalBModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
