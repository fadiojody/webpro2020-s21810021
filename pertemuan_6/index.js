/*
    Object
*/

const mahasiswa1 = ["John", "Doe", 31, true];

const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnolnd Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPsemester:[3.05, 3.25, 3.0, 3.4],
    hitungIPK: function () {
      let total = 0;
      this.IPsemester.forEach(function (el){
          total = total + el;
      });
      this.IPKumulatif = total / 4;
    },
};
delete mhs1.namaBelakang;
console.log(mhs1);
// // 2. Kata Kunci new
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

// // Mengakses propertin Objek
// //1. Dot notation
// console.log(mhs1.umur);
// //2. Bracket notation
// console.log(mhs1["namaBelakang"]);

console.log(mhs1.alamat.jalan);
console.log(mhs1.IPsemester[2]);


//Array Object

const mahasiswa= [
    {
        nim:"001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim:"002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },

    {
        nim:"003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el) {
    console.log(el);
});


