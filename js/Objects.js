

//! OBJECTS

let obj = new Object ({
    name: 'prince',
    phone: 100
})


//? object literal

let obj2 = {
    name: "prince",
    id: 101,
    add: 'bengalore'
}



//? constructor fuction method

//  let demo = function (name, salary, email){
//     this.name = name;
//     this.empSalary= salary;
//     this.emp_email= email;
//  }


//  let obj3 = new Object("prince", 6, 'prince@gmail.com')

// console.log(obj3.name)


//! CRUD OPERATION
 
let obj5 = {
    name: 'hello',
    age: 40,
    add: 'bangalore',
    compny: 'jSpiders',
    phone: 100
}

// console.log(obj5.name)

// obj5.name = "prince"

// console.log(obj5.name)

// console.log(obj5.email= 'prince@gmail.com')

// console.log(obj5.email)

// delete obj5.name;
// console.log(obj5.name)

// console.log(Object.keys(obj5))

// console.log(Object.values())

// console.log(Object.entries(obj5))

// Object.seal(obj5);

// console.log(Object.isSealed(obj5))

// console.log(obj5.name ='rahul')
// console.log(obj5.name)
// obj5.rent = 40;

// console.log(obj5.rent)

// Object.freeze(obj5)
// Object.isFrozen(obj5)

// obj5.name = 'raftar'

// console.log(obj5.name)

//! object copying

//? object assign()

let obj6 = Object.assign({}, obj5)

console.log(Object.values(obj6))
