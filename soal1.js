const hitungKemunculan = (kalimat, target) => {
  let hitung = 0;

  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat.substr(i, target.length) === target) {
      hitung++;
      i += target.length - 1; // Langsung loncat ke karakter setelah target
    }
  }

  return hitung;
};

const kalimat =
  "soal ini mudah dan ini tidak akan menghentikan langkah saya di sini";
const kata1 = "ini";
const kata2 = "a";

console.log(`Output 1: ${hitungKemunculan(kalimat, kata1)}`); // Output = 3
console.log(`Output 2: ${hitungKemunculan(kalimat, kata2)}`); // Output = 11
