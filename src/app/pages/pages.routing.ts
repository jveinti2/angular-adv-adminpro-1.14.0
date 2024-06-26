import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BreedsComponent } from './breeds/breeds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      },
      {
        path: 'breeds',
        component: BreedsComponent,
        data: { titulo: 'Breeds' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Profile' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
