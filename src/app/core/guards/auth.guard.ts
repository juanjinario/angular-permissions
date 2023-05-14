import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.checkIsLoggedUser() && this.checkHaveRole(route)) {
      return true;
    }
    return false;
  }

  checkIsLoggedUser() {
    if (this.authService.isUserLogged()) {
      return true;
    }
    return false;
  }

  checkHaveRole(route) {
    const { expectedRoles } = route.data;
    if (!expectedRoles || this.authService.verifyUserHaveRoles(expectedRoles)) {
      return true;
    }
    return false;
  }
}
