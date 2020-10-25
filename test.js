const persons = Object.freeze([ //Don't edit this array
 {
 name: "Teppo Testaaja",
 dateOfBirth: new Date("1959-01-01"),
 email: "teppo.testaaja@buutti.com"
 },
 {
 name: "Tessa Testaaja",
 dateOfBirth: new Date("1981-01-01"),
 email: "tessa.testaaja@buutti.com"
 },
 {
 name: "Teuvo Testaaja",
 dateOfBirth: new Date("1989-05-05"),
 email: "teuvo.testaaja@buutti.com"
 },
 {
 name: "Outi Ohjelmoija",
 dateOfBirth: new Date("1972-06-06"),
 email: "outi.ohjelmoija@buutti.com"
 },
 {
 name: "Olli Ohjelmoija",
 dateOfBirth: new Date("1989-05-05"),
 email: "olli.ohjelmoija@buutti.com"
 },
 {
 name: "Teppo Ohjelmoija",
 dateOfBirth: new Date("1980-02-02"),
 email: "teppo.ohjelmoija@buutti.com"
 }
]);

const findByFirstName = (firstname) => persons.filter(cb => cb.name.split(' ')[0].includes(firstname))

const findByLastName = (lastname) =>  persons.filter(cb => cb.name.split(' ')[1].includes(lastname))

const findByAge = (age) => persons.filter(cb => cb.dateOfBirth.getFullYear() + age === new Date().getFullYear())

const personsOrderedByAge = () => Array.from(persons).sort((a,b) => (a.dateOfBirth > b.dateOfBirth ? 1 : -1))


console.log("All persons with first name \"Teppo\" are", findByFirstName("Teppo"));

console.log( "All persons with last name \"Testaaja\" are", findByLastName("Testaaja"));

console.log( "All persons of age 31 are",  findByAge(31)); 

console.log( "Persons ordered from oldest to youngest are", personsOrderedByAge() );


