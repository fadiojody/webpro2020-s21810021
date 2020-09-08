/*
    Array
*/

//Deklarasi Array

let angka =[1, 2, 3, 4, 5, 6, 7, 8];
console.log(angka);
let buah =["Mangga", "Apel", "Jeruk"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function () {
    return "Hello Array";
}
 let arr2 =["text", 1, true, myFunc]


 //Manipulasi Array
 //1. Menambah Array

 let mhs = [];
 mhs[0] = "John";
 mhs[1] = "Bob";
 mhs[2] = "Jane";
 mhs[3] = "Peter";

 console.log(mhs);

 //2.Mengubah isi Array
 mhs [1] ="Donny";
 console.log(mhs);

 //3. Menghapus isi array
mhs[2] = undefined;
console.log(mhs);

//4. Menampilkan isi Array
let mhs = ["John, Bob, Jane, Peter"];

for (let i=0; i < mhs. lenght; i++) {
    console.log("Mahasiswa ke-" + (i + 1) + "adalah" )
}



