let person = {
    name: 'Olga',
    year: '1993',
    city: 'Kyiv'
};

let book = {
    title: 'A Farewell to Arms',
    author: 'Ernest Hemingway',
    year: '1929'
};

let smartphone = {
    brand: 'Iphone',
    model: 'Iphone15',
    storage: '128GB'
};

let person2 = new Object(); 
person2.name = 'Maria';
person2.year = '2003'; 
person2.city = 'Kyiv'; 

let book2 = new Object(); 
book2.title = 'For Whom the Bell Tolls';
book2.author = 'Ernest Hemingway';
book2.year = '1940';

let smartphone2 = new Object (); 
smartphone2.brand = 'Samsung';
smartphone2.model = 'SamsungA23';
smartphone2.storage = '128GB'; 

let some_android = Object.create(smartphone2); 
some_android.melody = 'Android_ringtone'; 
console.log(some_android.melody);
console.log(some_android.brand);

let engineer = {}; 
engineer.__proto__ = person;
console.log(engineer.city);
engineer.profession = 'general engineer';
engineer.experience = 0;
engineer.skills = [];

engineer.addSkill = function(skill) {
    this.skills.push(skill);
};

let QA_engineer = Object.create(engineer);
QA_engineer.addSkill('Javascript');
QA_engineer.addSkill('Cypress');
QA_engineer.addSkill('Playwright');

for (let property in person) {
    if (person.hasOwnProperty(property)) {
        console.log(property + ': ' + person[property]);
    }
}; 

for (let property in engineer) {
    if (engineer.hasOwnProperty(property)) {
        console.log(property + ': ' + engineer[property]);
    }
};

for (let property in QA_engineer) {
    if (QA_engineer.hasOwnProperty(property)) {
        console.log(property + ': ' + QA_engineer[property]);
    }
};
