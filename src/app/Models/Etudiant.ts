export class Etudiant{
    id :number;
    nom : string;
    prenom : string;
    telephone : number;
    email : string;
    password: string;
    roles: string;

    public  getNom(): string{
        return this.nom;
    }
}