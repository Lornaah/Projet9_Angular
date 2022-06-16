import { MedicalAntedecent } from "../medicalAntecedent/medicalAntecedent";
import { Note } from "../note/note";

export class PatientHistory {

    id: number;

    note: Note[];

    medicalAntecedents : MedicalAntedecent[];
}