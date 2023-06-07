export type PermissionNames =
  | 'View Users'
  | 'Manage Users'
  | 'View Roles'
  | 'Manage Roles'
  | 'Assign Roles'
  | 'View Companies'
  | 'Manage Companies'
  | 'Assign Companies'
  | 'Assign Vacation'
  | 'View Vacation'
  | 'Manage Vacation'
  | 'View Clockinout'
  | 'Request Clockinout'
  | 'Create Clockinout'
  | 'Delete Clockinout'
  | 'View Whoisin'
  | 'View Shift'
  | 'Manage Shift'
  | 'Create Shift'
  | 'Delete Shift';

export type PermissionValues =
  | 'users.view'
  | 'users.manage'
  | 'roles.view'
  | 'roles.manage'
  | 'roles.assign'
  | 'companies.view'
  | 'companies.manage'
  | 'companies.assign'
  | 'vacation.assign'
  | 'vacation.view'
  | 'vacation.manage'
  | 'clockinout.create'
  | 'clockinout.delete'
  | 'clockinout.request'
  | 'clockinout.view'
  | 'whoisin.view'
  | 'shift.create'
  | 'shift.delete'
  | 'shift.manage'
  | 'shift.view';

export class Permission {
  public static readonly viewUsersPermission: PermissionValues = 'users.view';
  public static readonly manageUsersPermission: PermissionValues =
    'users.manage';

  public static readonly viewRolesPermission: PermissionValues = 'roles.view';
  public static readonly manageRolesPermission: PermissionValues =
    'roles.manage';
  public static readonly assignRolesPermission: PermissionValues =
    'roles.assign';

  public static readonly viewCompaniesPermission: PermissionValues =
    'companies.view';
  public static readonly manageCompaniesPermission: PermissionValues =
    'companies.manage';
  public static readonly assignCompaniesPermission: PermissionValues =
    'companies.assign';

  public static readonly viewVacationPermission: PermissionValues =
    'vacation.view';
  public static readonly manageVacationPermission: PermissionValues =
    'vacation.manage';
  public static readonly assignVacationPermission: PermissionValues =
    'vacation.assign';

  public static readonly viewClockinoutPermission: PermissionValues =
    'clockinout.view';
  public static readonly deleteClockinoutPermission: PermissionValues =
    'clockinout.delete';
  public static readonly requestClockinoutPermission: PermissionValues =
    'clockinout.request';

  public static readonly viewWhoisinPermission: PermissionValues =
    'whoisin.view';

  public static readonly createShiftPermission: PermissionValues =
    'shift.create';
  public static readonly deleteShiftPermission: PermissionValues =
    'shift.delete';
  public static readonly manageShiftPermission: PermissionValues =
    'shift.manage';
  public static readonly viewShiftPermission: PermissionValues = 'shift.view';

  constructor(
    name?: PermissionNames,
    value?: PermissionValues,
    groupName?: string,
    description?: string
  ) {
    this.name = name;
    this.value = value;
    this.groupName = groupName;
    this.description = description;
  }

  public name: PermissionNames;
  public value: PermissionValues;
  public groupName: string;
  public description: string;
}
