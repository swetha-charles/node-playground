// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   printNameArrow() {
//     const printName = () => {
//       console.log(this.name);
//     };
//     printName();
//   }

//   printNameFunction() {
//     console.log(this.name);
//   }
// }

// const notPerson = {};
// notPerson.printNameArrow = person.printNameArrow;
// notPerson.printNameArrow()

const person = {
  name: "Swetha",
  talk() {
    const name = 'second';
    return {
      name: 'third',
      sayHello() {
        console.log("Hello my name is " + this.name);
      },
      sayBye: this.name,
    };
  },
};

this.name = "global";

// person.sayHello();
// person.sayBye();


person.talk().sayHello();
person.talk().sayBye();