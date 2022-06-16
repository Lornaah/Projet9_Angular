export class Note{
    id: string;
    note: string;
    date : Date;
    patientId:number;

    constructor(
        note: string = '',
        date : Date = new Date()
    )
    {
        this.note = note;
        this.date = date;
    }


}


