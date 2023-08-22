class Book {
    title = 'Voina & Mir';
    author = 'Lev Tolstoy';
    pages = 832;
    constructor() {
        this.displayInfo = this.displayInfo.bind(this)
    }
    displayInfo() {
        console.log('Title:', this.title, ",", "Author:", this.author, ",", "Pages:", this.pages);
    }
}

class Student {
    name = 'Martin';
    age = 15;
    grade = 'Art'
    constructor() {
        this.displayInfo = this.displayInfo.bind(this)
    }
    displayInfo() {
        console.log('Name:', this.name, ",", "Age:", this.age, ",", "grade:", this.grade);
    }
}