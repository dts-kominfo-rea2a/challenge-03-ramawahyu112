// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) =>{
  let arrayBelanjaan = [];
  for(let counter = 0; counter<dataBelanjaan.length; counter++){
    arrayBelanjaan[counter] = '- '+ dataBelanjaan[counter].nama + ' x '+ dataBelanjaan[counter].kuantitas;
  }
  return arrayBelanjaan;
} ;

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  let totalBelanjaan = 0;
  for(let counter = 0; counter<dataBelanjaan.length; counter++){
    let harga = dataBelanjaan[counter].harga * dataBelanjaan[counter].kuantitas;
    totalBelanjaan = totalBelanjaan + harga;
  }
  return totalBelanjaan;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
