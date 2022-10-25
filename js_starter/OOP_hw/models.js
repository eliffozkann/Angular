export class Users {
    constructor(name, surname, mail, pasword, type) { 
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.pasword = pasword;
        this.type = type;
    }
}


export class Questions {
    constructor(hood, comment) { 
        this.hood = hood;
        this.comment = comment;
    }
}


export class Course {
    constructor(title, subtitle, instructor, price, category) { 
        this.title = title;
        this.subtitle = subtitle;
        this.instructor = instructor;
        this.price = price;
        this.category = category;
    }
}

export class Career {
    constructor(nameSurname, phone, graduation, workingCondition, experience, workingCity, workingField ) { 
        this.nameSurname = nameSurname;
        this.phone = phone;
        this.graduation = graduation;
        this.workingCondition = workingCondition;
        this.experience = experience;
        this.workingCity = workingCity;
        this.workingField = workingField;
    }
}