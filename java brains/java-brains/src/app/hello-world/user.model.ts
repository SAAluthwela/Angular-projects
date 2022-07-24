export class User {
  name: string;
  designation: string;
  address: string;
  phone: string;

  constructor(
    name: string = '',
    designation: string = '',
    address: string = '',
    phone: string = ''
  ) {
    this.name = name;
    this.address = address;
    this.designation = designation;
    this.phone = phone;
  }
}
