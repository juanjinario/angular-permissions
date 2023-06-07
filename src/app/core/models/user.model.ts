export class User {
  constructor(
    id?: string,
    userName?: string,
    fullName?: string,
    email?: string,
    jobTitle?: string,
    phoneNumber?: string,
    roles?: string[],
    companyId?: string
  ) {
    this.id = id;
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.jobTitle = jobTitle;
    this.phoneNumber = phoneNumber;
    this.roles = roles;
    this.companyId = companyId;
  }

  get friendlyName(): string {
    let name = this.fullName || this.userName;

    if (this.jobTitle) name = this.jobTitle + ' ' + name;

    return name;
  }

  public id: string;
  public userName: string;
  public fullName: string;
  public email: string;
  public jobTitle: string;
  public phoneNumber: string;
  public isEnabled: boolean;
  public isLockedOut: boolean;
  public roles: string[];
  public companyId: string;
}
