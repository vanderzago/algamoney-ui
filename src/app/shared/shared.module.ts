import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent
  ],
  exports: [
    MessageComponent
  ]
})
export class SharedModule { }
