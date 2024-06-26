import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      url: '/',
    },
    {
      titulo: 'Breeds',
      icono: 'mdi mdi-dog',
      url: '/dashboard/breeds',
    },
  ];

  constructor() {}
}
