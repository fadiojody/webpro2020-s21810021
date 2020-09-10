/*JavaScript Conditional (Persyaratan)
------------------------------- 
*/
//1. menggunakan If, Else, Else if


// let nilaiJody = 95;

// if (nilaiJody > 80) {
//   console.log("SANGAT MEMUASKAN");
// } else if (nilaiJody >= 60 && nilaiJody <= 80) {
//   console.log("MEMUASKAN");
// } else {
//   console.log("JANGAN MENYERAH, COBA LAGI!");
// }



//2. Menggunakan Switch Case
// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah); 

//Jika Kondisi mempunyai output yang sama

let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah); // Output: kemeja putih bawahan merah

/*JavaScript Loop (Pengulangan)
------------------------------- 
*/

//for, for...in, for...of, while
//1. For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//2. For in Loop

// const buku = {
//     judul: "Marvel Comic: The Human Torch and the Sub-Mariner",
//     pengarang: "Stan lee",
//     tahun: 1939
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }

 //3. For/Of loop

//  const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];

// for (x of buku) {
//   console.log(x);
// }

// //3. While Loop

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//4. Do While Loop

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);