import { Patient } from './patient';
  
export const PATIENTS: Patient[] = [
    {
        id: 1,
        family: "Baratheon",
        given: "Robert",
        dob: new Date(),
        sex: "M",
        address: "Rue du chateau",
        phone: '001',
    },
    {
        id: 2,
        family: "Snow",
        given: "Jon",
        dob: new Date(),
        sex: "M",
        address: "Rue du chateau",
        phone: '002',
    },
    {
        id: 3,
        family: "Targaryen",
        given: "Daenerys",
        dob: new Date(),
        sex: "F",
        address: "Rue du chateau un peu cramé",
        phone: '003',
    },
    {
        id: 4,
        family: "Lannister",
        given: "Cersei",
        dob: new Date(),
        sex: "F",
        address: "Rue du chateau",
        phone: '004',
    },
    
];