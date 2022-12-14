import { Type } from "./Type";
import { User } from "./User"

export class Reclamation {
    idReclamation: number;
    DateReclamation?: Date;
    description?: string;
    screenshot?: string;
    statut?: boolean;
    type?: Type;
}
  