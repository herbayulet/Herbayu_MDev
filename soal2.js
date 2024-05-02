const ubahKalimat = (kalimat) => {
  const pisah = kalimat.split(" ");
  console.log(pisah);
  let kalimatBaru = "";

  for (let i = 0; i < pisah.length; i++) {
    if (i === 0) {
      kalimatBaru += pisah[i].charAt(0).toUpperCase() + pisah[i].slice(1);
    } else {
      kalimatBaru += " " + pisah[i].charAt(0).toUpperCase() + pisah[i].slice(1);
    }
  }

  return kalimatBaru;
};

console.log(ubahKalimat("saya dapat menyelesaikan soal ini dengan baik")); // Output: Saya Dapat Menyelesaikan Soal Ini Dengan Baik
