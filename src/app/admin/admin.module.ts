import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {HeaderModule} from './header/header.module';
import {SharedModule} from '../shared/shared.module';
import {NavigationModule} from './navigation/navigation.module';
import { BrandComponent } from './brand/brand.component';

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
    BrandComponent,
  ],
  exports: [
    AdminComponent,

  ],
})
export class AdminModule { }
