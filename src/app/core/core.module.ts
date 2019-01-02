import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import {ConfigService} from './config.service';

@NgModule({
  imports: [
    CommonModule
  ],
    providers: [AuthService, ConfigService],
  declarations: []
})
export class CoreModule { }
