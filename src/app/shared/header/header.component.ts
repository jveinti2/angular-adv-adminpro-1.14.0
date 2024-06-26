import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private usuarioService: UsuarioService) {}

  logout() {
    this.usuarioService.logout();
  }

  get userLogged() {
    return this.usuarioService.userLogged;
  }
}
