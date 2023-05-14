import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { AccessToken, LoginResponse } from '../models/loginResponse.interface';
import { JwtHelper } from 'src/app/shared/utils/jwt.helper';
import { PermissionValues } from '../models/permission.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = {
    username: 'juanito',
    roles: ['administrator'],
    permissions: ['fleet.view', 'users.manage'],
  };

  constructor(private http: HttpClient) {}

  login() {
    // posterior a recibir un 200 de backend al hacer el login
    // almaceno el token en local storage y guardo el usuario en una
    // variable local
    // posterior al login hago una nueva petición getPermissions (a veces)
    return this.http.get('pagina login').pipe(
      map((response: LoginResponse) => {
        // localStorageSet save token, save user information
        // decode token
        return this.handlerLoginResponse(response);
      })
    );
  }

  getUserPermissions() {
    return this.http.get('/me');
  }

  logout() {}

  handlerLoginResponse(response: LoginResponse) {
    let accessToken = response.access_token;

    if (accessToken == null) {
      throw new Error('Received accessToken was empty');
    }

    // let refreshToken = response.refresh_token || this.refreshToken;
    let expiresIn = response.expires_in;

    let tokenExpiryDate = new Date();
    tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);

    let accessTokenExpiry = tokenExpiryDate;

    let jwtHelper = new JwtHelper();
    let decodedAccessToken = <AccessToken>(
      jwtHelper.decodeToken(response.access_token)
    );

    let permissions: PermissionValues[] = Array.isArray(
      decodedAccessToken.permission
    )
      ? decodedAccessToken.permission
      : [decodedAccessToken.permission];

    // if (!this.isLoggedIn) {
    //   this.configurations.import(decodedAccessToken.configuration);
    // }

    let user = new User(
      decodedAccessToken.sub,
      decodedAccessToken.name,
      decodedAccessToken.fullname,
      decodedAccessToken.email,
      decodedAccessToken.jobtitle,
      decodedAccessToken.phone_number,
      Array.isArray(decodedAccessToken.role)
        ? decodedAccessToken.role
        : [decodedAccessToken.role],
      decodedAccessToken.company
    );
    user.isEnabled = true;

    // GUARDAR EN LOCAL STORAGE
    // this.saveUserDetails(
    //   user,
    //   permissions,
    //   accessToken,
    //   refreshToken,
    //   accessTokenExpiry,
    //   rememberMe
    // );

    // this.reevaluateLoginStatus(user);

    return user;
  }

  isUserLogged() {
    // verificar que tenga un usuario
    // verificar que tenga un token en el local storage
    if (this.user) {
      return true;
    }
  }

  verifyUserHaveRoles(expectedRoles = []) {
    // verificar que el usuario tenga rol para una pagina
    let haveRole = false;
    this.user.roles.forEach((role) => {
      if (expectedRoles.includes(role)) {
        haveRole = true;
        return;
      }
    });
    return haveRole;
  }

  verifyPermission(permissionValue: PermissionValues): boolean {
    const { permissions } = this.user;
    return permissions.some((p) => p == permissionValue);
  }
}
