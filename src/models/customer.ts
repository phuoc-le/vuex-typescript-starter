export default class Customer {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  city: string = '';
  memberID: string = '';

  constructor(id: string,
              firstName: string,
              lastName: string,
              address: string,
              email: string,
              phone: string,
              country: string,
              city: string,
              memberID: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.country = country;
    this.city = city;
    this.memberID = memberID;
  }
}
