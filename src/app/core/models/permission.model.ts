export type PermissionNames =
  | 'View Users'
  | 'Manage Users'
  | 'View Roles'
  | 'Manage Roles'
  | 'Assign Roles'
  | 'View Companies'
  | 'Manage Companies'
  | 'Assign Companies'
  | 'View Fleet'
  | 'Manage Fleet'
  | 'View Devices'
  | 'Manage Devices'
  | 'Assign Devices'
  | 'View Sims'
  | 'Manage Sims'
  | 'Assign Sims'
  | 'View Drivers'
  | 'Manage Drivers'
  | 'Assign Drivers'
  | 'View Assets'
  | 'Manage Assets'
  | 'Assign Assets'
  | 'View TrackingPoints'
  | 'Manage TrackingPoints'
  | 'Assign TrackingPoints';

export type PermissionValues =
  | 'users.view'
  | 'users.manage'
  | 'roles.view'
  | 'roles.manage'
  | 'roles.assign'
  | 'companies.view'
  | 'companies.manage'
  | 'companies.assign'
  | 'fleet.view'
  | 'fleet.manage'
  | 'devices.view'
  | 'devices.manage'
  | 'devices.assign'
  | 'sims.view'
  | 'sims.manage'
  | 'sims.assign'
  | 'drivers.view'
  | 'drivers.manage'
  | 'drivers.assign'
  | 'assets.view'
  | 'assets.manage'
  | 'assets.assign'
  | 'trackingPoints.view'
  | 'trackingPoints.manage'
  | 'trackingPoints.assign';

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

  public static readonly viewFleetPermission: PermissionValues = 'fleet.view';
  public static readonly manageFleetPermission: PermissionValues =
    'fleet.manage';

  public static readonly viewDevicesPermission: PermissionValues =
    'devices.view';
  public static readonly manageDevicesPermission: PermissionValues =
    'devices.manage';
  public static readonly assignDevicesPermission: PermissionValues =
    'devices.assign';

  public static readonly viewSimsPermission: PermissionValues = 'sims.view';
  public static readonly manageSimsPermission: PermissionValues = 'sims.manage';
  public static readonly assignSimsPermission: PermissionValues = 'sims.assign';

  public static readonly viewDriversPermission: PermissionValues =
    'drivers.view';
  public static readonly manageDriversPermission: PermissionValues =
    'drivers.manage';
  public static readonly assignDriversPermission: PermissionValues =
    'drivers.assign';

  public static readonly viewAssetsPermission: PermissionValues = 'assets.view';
  public static readonly manageAssetsPermission: PermissionValues =
    'assets.manage';
  public static readonly assignAssetsPermission: PermissionValues =
    'assets.assign';

  public static readonly viewTrackingPointsPermission: PermissionValues =
    'trackingPoints.view';
  public static readonly manageTrackingPointsPermission: PermissionValues =
    'trackingPoints.manage';
  public static readonly assignTrackingPointsPermission: PermissionValues =
    'trackingPoints.assign';

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
