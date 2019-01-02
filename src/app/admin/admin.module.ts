import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {HeaderModule} from './header/header.module';
import {SharedModule} from '../shared/shared.module';
import {NavigationModule} from './navigation/navigation.module';

@NgModule({
  imports: [
      RouterModule,
    CommonModule,
    HeaderModule,
      SharedModule,
      NavigationModule
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [
    AdminComponent,

  ],
})
export class AdminModule { }
