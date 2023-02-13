export class Person {
    constructor(name: String, email: String, profilePicture: String) {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    name: String
    email: String
    profilePicture: String
}

export enum EmailCategory {
    Draft,
    Sent
}

export class Email {
    constructor(id: string, sender: Person, subject: String, message: String, date: Date, category: EmailCategory, isFavorite = false) {
        this.id = id;
        this.sender = sender;
        this.subject = subject;
        this.message = message;
        this.date = date;
        this.category = category;
        this.isFavorite = isFavorite;
    }

    id: string
    sender: Person
    subject: String
    message: String
    date: Date
    category: EmailCategory
    isFavorite: boolean = false
}
