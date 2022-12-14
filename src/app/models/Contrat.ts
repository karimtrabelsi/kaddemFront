import { Specialite } from "./Specialite";
import { User } from "./user";

export class Contrat {
    idContrat: number;
    dateDebutContrat : Date;
    dateFinContrat: Date;
    archive: boolean;
    specialite: Specialite;
    montant : number;
    user : User;
}