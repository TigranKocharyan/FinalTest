import wizlist from "../fianlTest/thefinaltest-main/students.js"


class Person{
    constructor(firstName, lastName, age, adult) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.adult = adult;

    }

    introduce(){
        return `Hi, I am ${this.firstName} ${this.lastName}`
    }
    static greet(person){
        return `Hi ${person.firstName} good to see you`
    }
}
const pers = new Person("Vaxo", "Asatryan", 30, true )
const pers1 = new Person("Gago", "Asatryan", 30, true )
console.log(Person.greet(pers1))

class Wizard extends Person{
    constructor(firstName, lastName, age, adult, level){
     super(firstName, lastName, age, adult);
        this.level = level
        
        
    }
    bless(){
        return "Expecto Patronum"
    }
    curse(){
        return "Avada Kedavra"
    }
}
class Student extends Wizard{
    constructor(firstName, lastName, age, adult, level, house,credit){
        super(firstName, lastName, age, adult, level)
        this.house = house
        this.credit = credit
    }

}
let arr = wizlist.map((x) => Object.values(x))
let stud = arr.map((x) => new Student(...x))
let count = 0;
const getAverage = (arr)=>{for(let i = 0; i <arr.length; ++i){
    count+= arr[i].credit;
}return Math.round(count/arr.length)}
const hogwarts = getAverage(stud)
let grifsquad = []
let slythsquad = []
let huffsquad = []
let ravesquad = []
for(let i = 0; i <stud.length; ++i)
{
    if(stud[i].house == "Griffindor" )
    {grifsquad.push(stud[i].credit)}

    if(stud[i].house == "Slytherin" )
    {slythsquad.push(stud[i].credit)}

    if(stud[i].house == "Hufflepuff" )
    {huffsquad.push(stud[i].credit)}

    if(stud[i].house == "Ravenclaw" )
    {ravesquad.push(stud[i].credit)}

}

const griffindor = getAverage[grifsquad]
const slytherin = getAverage[slythsquad]
const hufflepuff = getAverage[huffsquad]
const ravenclaw = getAverage[ravesquad]


document.title = "hdehdehd";
