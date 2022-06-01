import { Patient } from './patient';
  
export const PATIENTS: Patient[] = [
    {
        id: 1,
        lastName: "Baratheon",
        firstName: "Robert",
        birthDate: new Date(),
        gender: "M",
        address: "Rue du chateau",
        phoneNumber: '001',
    },
    {
        id: 2,
        lastName: "Snow",
        firstName: "Jon",
        birthDate: new Date(),
        gender: "M",
        address: "Rue du chateau",
        phoneNumber: '002',
    },
    {
        id: 3,
        lastName: "Targaryen",
        firstName: "Daenerys",
        birthDate: new Date(),
        gender: "F",
        address: "Rue du chateau un peu cramé",
        phoneNumber: '003',
    },
    {
        id: 4,
        lastName: "Lannister",
        firstName: "Cersei",
        birthDate: new Date(),
        gender: "F",
        address: "Rue du chateau",
        phoneNumber: '004',
    },
    
];