import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {HeaderModule} from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [
    AdminComponent,

  ],
})
export class AdminModule { }
