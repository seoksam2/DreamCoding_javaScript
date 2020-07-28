// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object 
// Object = { key: value};


// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const seoksam2 = {
    name: '이재석',
    age: 40
};
print(seoksam2);

// with JavaScript magic (dynamically type language)
// can add properties later
seoksam2.hasJob = true;
console.log(seoksam2.hasJob);

delete seoksam2.hasJob;
console.log(seoksam2.hasJob);

// 2. Computed properties
// key should be always string
console.log(seoksam2.name);
console.log(seoksam2['name']);
seoksam2['hasJob'] = true;
console.log(seoksam2.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(seoksam2, 'name');
printValue(seoksam2, 'age');

// 3. Property value shorthand
const person1 = {
    name: 'bob',
    age: 2
};
const person2 = {
    name: 'steve',
    age: 3
};
const person3 = {
    name: 'dave',
    age: 4
};
const person4 = new Person('seoksam2', 40);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in seoksam2);
console.log('random' in seoksam2);
console.log(seoksam2.random);

// 6. for..in vs for..of
// for (key on obj)
for (key in seoksam2) {
    console.log(key);
}

console.clear();
// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
    name: 'seoksam2',
    age: '20'
};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = {
    color: 'red'
};
const fruit2 = {
    color: 'blue',
    size: 'big '
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);