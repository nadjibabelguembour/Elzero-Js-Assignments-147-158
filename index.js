//task one
console.log(`%cTask 1---------------------------------`,`color:red; font-size:24px;`)
//use Class syntax:
// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }

class Car{
//propreties
    constructor(name, model, price){
        this.n=name,
        this.mod=model,
        this.p=price;
    }
// methods
    run(){
        // return `Car is running`;
        console.log(`Car is running`) ;
        
    }
    stop(){
        console.log(`this car is stopped`);
    }
}
// instanciating 3 cars:
let carOne= new Car("MG",2022,420000);
let carTwo= new Car("BMW",2021,720000);
let carThree= new Car("AUDI",2020,620000);

console.log(`Car One 's name is ${carOne.n} and modal is ${carOne.mod} and price is ${carOne.p}`)
carOne.run()
console.log(`Car Two 's name is ${carTwo.n} and modal is ${carTwo.mod} and price is ${carTwo.p}`)
carTwo.stop()
// console.log(`Car Three 's name is ${carThree.n} and modal is ${carThree.mod} and price is ${carThree.p}`)
  
  // Needed Output
  
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//task 2
console.log(`%cTask 2---------------------------------`,`color:red; font-size:24px;`)

class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  
  // Write Tablet Class Here
  class Tablet extends Phone{
    constructor(name, serial, price, size){
        super(name, serial, price);
        this.size = size || "Unkown";
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} and size is ${this.size}`
    }
  }
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown
  
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //task 3
console.log(`%cTask 3---------------------------------`,`color:red; font-size:24px;`)
  
  // Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    carNumber(){
        //we convert the card number into a string then we
        // use regex to give it a form 
        //then we use join("-") to separate each 4 digits with a -
        return this.#c.toString().match(/\d{4}/ig).join("-");
    }
    showData(){
        return `Hello ${this.u} your credit card number is ${this.carNumber()}`
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData());
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData());
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData());
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //task 4
 console.log(`%cTask 4---------------------------------`,`color:red; font-size:24px;`)

// Write Your Code Here
Object.prototype.addLove=function(){
    return `I love ${this} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //task 5
 console.log(`%cTask 5---------------------------------`,`color:red; font-size:24px;`)
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperty(myObj, "score", {
  // ممنوع التغيير في السكور
    writable: false,
    enumerable: true,
    configurable: false,
  });
  
  Object.defineProperty(myObj, "id", {
    writable: true,
    enumerable: false, // يمنه ظهوره داخل  اللوب
    configurable: true,
  });
  
  Object.defineProperty(myObj, "country", {
   // we have to turn all of them into true otherwise they will be considred false by default
    writable: true,
    enumerable: true,
    configurable: true,
  });
  
  delete myObj.country;
  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Output
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}