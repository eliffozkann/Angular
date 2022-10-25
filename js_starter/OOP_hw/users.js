export default class Users {
    constructor(name, surname, mail, pasword, type) { 
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.pasword = pasword;
        this.type = type;
    }

    tanit() {
        console.log(this);
    }
}


const user1 = new Users("Elif", "Özkan", "elfozkan@gmail.com", 123, "Student");
user1.tanit();

const user2 = new Users("Berkay", "Yücel", "berkay@gmail.com", 235, "Student");
const user3 = new Users("Hülya", "Karapınar", "hulya@gmail.com", 654, "Student");
const user4 = new Users("Engin", "Demiroğ", "engin@gmail.com", 987, "Instructor");

user2.tanit();
user3.tanit();
user4.tanit();

