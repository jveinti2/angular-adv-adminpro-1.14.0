import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { BreedsComponent } from './breeds/breeds.component';

@NgModule({
  declarations: [DashboardComponent, PagesComponent, AccountSettingsComponent, BreedsComponent],
  exports: [DashboardComponent, PagesComponent, AccountSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
