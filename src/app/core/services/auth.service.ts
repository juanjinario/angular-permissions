import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = {
    username: 'juanito',
  };

  constructor() {}

  login() {
    // posterior a recibir un 200 de backend al hacer el login
    // almaceno el token en local storage y guardo el usuario en una
    // variable local
  }

  logout() {}

  isUserLogged() {
    // verificar que tenga un usuario
    // verificar que tenga un token en el local storage
    if (this.user) {
      return true;
    }
  }
}
