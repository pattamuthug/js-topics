// PRIMITIVE DATA TYPES
// STRING
const cars = "audi"; 
console.log(cars, typeof cars);

// NUMBER
let a=1; 
b=10.0; 
c=-29;
d=123e5;
e=123e-5;


console.log(a,typeof a);
console.log(b,typeof b);
console.log(c,typeof c);
console.log(d,typeof d);
console.log(e,typeof e);

// BOOLEAN
let z=2;
let z1='2';
let z2=(z==z1);
let z3=(z===z1);
console.log(z2,typeof z2);
console.log(z3,typeof z3);


// UNDEFINED
let x;
console.log(x);

// NULL
let bike=null;
console.log(bike,typeof bike);

// NAN
let f=4;
let g="ant";
let h=f/g;
console.log(h,typeof h);

// OBJECT
const person={
    name:"muthu",
    age:"23"
}
console.log(person,typeof person);


// ARRAY
const bikes=["r15","ktm","pulsar"]
console.log(bikes,typeof bikes);

// function 
function fun(who) {
    return (console.log(who));
}
fun('pattamuthu');
console.log(fun,typeof fun);