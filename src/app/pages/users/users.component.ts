import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { Permission } from 'src/app/core/models/permission.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private authService: AuthService) {}

  get canViewUsers() {
    return this.authService.verifyPermission(Permission.viewUsersPermission);
  }
}
