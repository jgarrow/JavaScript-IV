// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(name, age, location, specialty, favLangauge, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLangauge = favLangauge;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        let scoreAdjustmentAdd = Math.round(Math.random() * (100 - student.grade));
        let scoreAdjustmentSubtract = Math.round(Math.random() * student.grade);

        if (Math.random() >= 0.5) {
            student.grade = student.grade + scoreAdjustmentAdd;
        } else {
            student.grade = student.grade - scoreAdjustmentSubtract;

            if (student.grade < 0) {
                student.grade = 0;
            }
        }
    
        console.log(`${student.name} receives a score of ${student.grade} on ${subject}`);
    }
}

class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = 80;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade > 70) {
            console.log(`${this.name} is ready to graduate!`);
        } else {
            console.log(`${this.name} is not ready to graduate.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(name, age, location, specialty, favLangauge, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLangauge, catchPhrase);
    this.gradeClassName = gradClassName;
    this.favInstructor = favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const Peter = new Person('Peter', 25, 'Utah');
const Justin = new Person('Justin', 28, 'Missouri');
console.log('Person objects:\n')
console.log(Peter);
Peter.speak();
console.log(Justin);
Justin.speak();

const Pace = new Instructor('Pace', 30, 'Washington',  'Front-end', 'JavaScript', 'Noice');
const Pietro = new Instructor('Pietro', 25, 'New York', 'Front-end', 'JavaScript', 'Aw yeah');
console.log('\n\nInstructor objects:\n')
console.log(Pace);
Pace.speak();
Pace.demo('JavaScript');
console.log(Pietro);
Pietro.speak();
Pietro.demo('CSS');

const Janessa = new Student('Janessa', 25, 'Utah', 'College graduate, BA in Linguistics, BA in Italian Studies. Now a stay-at-home mom.', 'WEBPT11', ['CSS', 'JavaScript']);
const Kora = new Student('Kora', 1, 'Utah', 'Living the baby life', 'WEBPT11', ['HTML']);
console.log('\n\nStudent objects:\n')
console.log(Janessa);
Janessa.speak();
Janessa.listsSubjects();
Janessa.PRAssignment('CSS');
Janessa.sprintChallenge('HTML');
console.log(Kora);
Kora.speak();
Kora.listsSubjects();
Kora.PRAssignment('JavaScript');
Kora.sprintChallenge('Python');


const Giovanni = new ProjectManager('Giovanni', 26, 'Minnesota', 'React', 'JavaScript', 'Alright', 'WEB19', 'Ryan');
const Alessandra = new ProjectManager('Alessandra', 22, 'Rome', 'Text processing', 'Python', 'Va bene', 'WEB21', 'Sean');
console.log('\n\Project Manager objects:\n')
console.log(Giovanni);
Giovanni.speak();
Giovanni.demo('React');
Giovanni.standUp('TLGroup');
Giovanni.debugsCode(Janessa, 'JavaScript');
console.log(Alessandra);
Alessandra.speak();
Alessandra.demo('Node.js');
Alessandra.standUp('WEBPT11');
Alessandra.debugsCode(Kora, 'React');
Pace.grade(Janessa, 'JavaScript');
Pietro.grade(Kora, 'HTML');

do {
    Giovanni.grade(Janessa, 'JavaScript');
    Janessa.graduate();
}
while (Janessa.grade < 70);

do {
    console.log(Kora.grade);
    Kora.graduate();
    Alessandra.grade(Kora, 'HTML');
}
while (Kora.grade < 70);