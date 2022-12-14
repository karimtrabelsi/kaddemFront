import { Specialite } from "./Specialite";

export class Contrat {
    idContrat: number;
    dateDebutContrat : Date;
    dateFinContrat: Date;
    archive: boolean;
    specialite: Specialite;
    montant : number;
}