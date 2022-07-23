import wizlist from "../fianlTest/thefinaltest-main/students.js"
import utils from "../fianlTest/utils.js"
const {
    querySelector: qs, 
    querySelectorAll: qsa,
    createElement: ce,
    curriedCreateElement: cce,
    appendElements: aes,
    curry,
  } = utils;


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
    if(typeof arr[i] == "object")
    {count+= arr[i].credit}
    else
    {count+= arr[i]}
    

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


const griffindor = getAverage(grifsquad)
const slytherin = getAverage(slythsquad)
const hufflepuff = getAverage(huffsquad)
const ravenclaw = getAverage(ravesquad)

const maxofHouses = Math.max(griffindor,slytherin,hufflepuff,ravenclaw)
const maxofstuds = Math.max(...stud.map(x => x.credit))
const best = stud.find(function(element){if(element.credit==maxofstuds)return element});
const bestStudent = best.firstName
 document.title = "Hogwards Average Credits"
 
 
  aes(
    [
      ce("h1", {
        text: "Hogwards Average Credits",
        id: "heading",
        style: { fontSize : "35px",
        color : "white",
        textAlign : "center",
        backgroundColor : "#0a472b",
       
        
     }
      })
    ],
    qs("body"))

    aes(
        [
            ce("div", {
                text:"Best Student",
                style:{fontSize:"35px",
                color:"white",
                fontFamily:"Brush Script MT"
            }
                
            }),

            ce("img",{
                src:"https://alpanortho.com/wp-content/uploads/2011/07/sorcerer16.jpg",
                style:{
                    width:"16%",

                },

            }),
            ce ("p",{
                text:`${bestStudent} ${best.lastName}`,
                style:{
                fontSize:"20px",
                color:"white",
                fontFamily:"Brush Script MT",
                position:"absolute",
                left:"10px"
                }
                

            }) ,
            ce ("p",{
                text:`Faculty - ${best.house}`,
                style:{
                fontSize:"17px",
                color:"red",
                fontFamily:"Brush Script MT",
                position:"absolute",
                left:"10px",
                top:"23rem"
                }
                
            }),
            ce ("p",{
                text:`Credit - ${maxofstuds}`,
                style:{
                fontSize:"17px",
                color:"white",
                fontFamily:"Brush Script MT",
                position:"absolute",
                left:"10px",
                top:"24rem"
                }
                
            }) ,
            ce("div", {
                text:"Best House",
                style:{fontSize:"35px",
                color:"white",
                fontFamily:"Brush Script MT",
                position:"absolute",
                right:"10px",
                top:"40px"
            }
                
            }),
            ce("img", {
                src:"https://cdn.wallpapersafari.com/75/22/e2nbKZ.jpg",
                style:{
                    width:"15%",
                    backgroundColor:"black",
                    float: "right",
                    
                },
            
                
            }), 
            ce ("p",{
                text:`Faculty - ${best.house}`,
                style:{
                fontSize:"18px",
                color:"red",
                fontFamily:"Brush Script MT",
                position:"absolute",
                right:"10px",
                top:"22rem"
                }
            }),
            
        ],
    qs("body"))

    const card = (params = {}) =>
  ce("div", {
    id: params.id,
    style: {
      width: "300px",
      border: "5px solid var(--accent-color)",
      padding: "1rem",
      boxShadow: "10px 10px var(--light-color)",
      fontFamily: "'Kdam Thmor Pro', sans-serif",
      position:"absolute",
      top:"24rem",
      ...params.style,
    },
  });

    aes(
        [
       [     
      ce("div", {
        style: {
          display:"flex"
          
          
          
        },
      }),
            [
                card({ id: "card1" }),
                ce("h3", { text: "Gryffindor", style:{color:"red", fontSize:"30px"} }),

                ce("img", {
                  src: "https://cdn.wallpapersafari.com/75/22/e2nbKZ.jpg",
                  alt: "griyffindor",
                  style: { width: "25%" },
                }),
                ce("p", {text:`${stud[0].firstName} ${stud[0].lastName} `,style:{color:"white",position:"absolute",left:"94px",bottom:"100px"}}),
                ce("p",{text:`Crdit - ${stud[0].credit}`,style:{color:"white",position:"absolute",left:"94px",bottom:"80px"}}),
                ce("p", {text:`${stud[1].firstName}  ${stud[1].lastName} `,style:{color:"white",position:"absolute",left:"94px",bottom:"60px"}}),
                ce("p",{text:`Crdit - ${stud[1].credit}`,style:{color:"white",position:"absolute",left:"94px",bottom:"40px"}})
              ],
              [
                card({ id: "card2" }),
                ce("h3", { text: "Slytherin", style:{color:"green", fontSize:"30px", position:"absolute",left:"12rem"} }),

                ce("img", {
                  src: "https://wallpapercave.com/wp/wp3510921.jpg",
                  alt: "slytherin",
                  style: { width: "25%", position:"absolute", left:"12rem", top:"3rem" },
                }),
                ce("p", {text:`${stud[3].firstName} ${stud[3].lastName}`,style:{color:"white",fontSize:"17px",position:"absolute",left:"18rem",top:"3rem"}}),
                ce("p",{text:`Crdit - ${stud[3].credit}`,style:{color:"white",position:"absolute",left:"18rem",top:"5.5rem"}}),
                ce("p", {text:`${stud[4].firstName}  ${stud[4].lastName} `,style:{color:"white",position:"absolute",left:"18rem",top:"8rem"}}),
                ce("p",{text:`Crdit - ${stud[4].credit}`,style:{color:"white", fontSize:"17px",position:"absolute",left:"18rem",top:"10.5rem"}})
              ], 
              [
                card({ id: "card3" }),
                ce("h3", { text: "Ravenclaw", style:{color:"blue", fontSize:"30px", position:"absolute",left:"24rem"} }),

                ce("img", {
                  src: "https://cdn.shopify.com/s/files/1/0706/6127/products/21247HP_1200x.jpg?v=1532378425",
                  alt: "ravenclaw",
                  style: { width: "25%", position:"absolute", left:"24rem", top:"3rem" },
                }),
                ce("p", {text:`${stud[9].firstName} ${stud[9].lastName}`,style:{color:"white",fontSize:"17px",position:"absolute",left:"30rem",top:"3rem"}}),
                ce("p",{text:`Crdit - ${stud[9].credit}`,style:{color:"white",position:"absolute",left:"30rem",top:"5.5rem"}}),
                ce("p", {text:`${stud[10].firstName}  ${stud[10].lastName} `,style:{color:"white",position:"absolute",left:"30rem",top:"8rem"}}),
                ce("p",{text:`Crdit - ${stud[10].credit}`,style:{color:"white", fontSize:"17px",position:"absolute",left:"30rem",top:"10.5rem"}})
              ], 

              [
                card({ id: "card3" }),
                ce("h3", { text: "Hufflpuff", style:{color:"yellow", fontSize:"30px", position:"absolute",left:"35rem"} }),

                ce("img", {
                  src: "https://m.media-amazon.com/images/I/61CZcW+yIDL._AC_SY879_.jpg",
                  alt: "huff",
                  style: { width: "25%", position:"absolute", left:"35rem", top:"3rem" },
                }),
                ce("p", {text:`${stud[7].firstName} ${stud[7].lastName}`,style:{color:"white",fontSize:"17px",position:"absolute",left:"41rem",top:"3rem"}}),
                ce("p",{text:`Crdit - ${stud[7].credit}`,style:{color:"white",position:"absolute",left:"41rem",top:"5.5rem"}}),
                ce("p", {text:`${stud[8].firstName}  ${stud[8].lastName} `,style:{color:"white",position:"absolute",left:"41rem",top:"8rem"}}),
                ce("p",{text:`Crdit - ${stud[8].credit}`,style:{color:"white", fontSize:"17px",position:"absolute",left:"41rem",top:"10.5rem"}})
              ], 

        ],
    ],
        qs("body"));


        aes(
            [
                ce("div", {
                    text:`Hogwards avearge is ${hogwarts}` ,
                    style:{fontSize:"35px",
                    color:"gold",
                    fontFamily:"arial",
                    position:"absolute",
                    left:"30rem",
                    bottom:"38rem"

                }
                    
                }),
            ],
            qs("body"));
