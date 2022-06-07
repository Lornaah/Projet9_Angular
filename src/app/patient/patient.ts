export class Patient {

    id: number;
    family: string;
    given: string;
    dob: Date;
    sex: string;
    address: string;
    phone: string;

    constructor(
        family: string = 'Enter a lastname',
        given: string = 'Enter a firstname',
        dob: Date = new Date(),
        sex: string = 'Enter a gender',
        address: string = 'Enter an address',
        phone: string = 'Enter a phone number',


    ) {
        this.family = family;
        this.given = given;
        this.dob = dob;
        this.sex = sex;
        this.address = address;
        this.phone = phone;
    }

}