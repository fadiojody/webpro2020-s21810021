// 1. Array

const colors = ["merah", "kuning", "hijau"];

// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[3];

// let [satu, dua, tiga] = colors;
// console.log (satu, dua, tiga);

// let [satu, dua] = colors;
// console.log(satu, dua);

// let [satu, , tiga] = colors;
// console.log(satu, tiga);

let [satu, dua, tiga, empat = "biru"] = colors;
console.log(satu, dua, tiga, empat);

// 2. Object

const user = {
    name: "John",
    gender: "male",
    age: 33,
};

let name = user.name;
let gender = user.gender;
let age = user.age;

let { name, gender, age } = user;

console.log(name, gender, age);

let { name, gender, age, born = "Makassar" } = user;
console.log(name, gender, age, born);

let {name, age} = user;
console.log(name, age);

let {name: nama, age: umur} = user;
console.log(nama, umur);

const display = (props) => {
    console.log(`Nama saya adalah ${props.name}. Umur saya adalah ${props.age}`);
};
