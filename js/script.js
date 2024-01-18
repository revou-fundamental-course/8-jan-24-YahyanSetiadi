//Luas
function hitungLuas() {
  // Ambil nilai sisi dari input
  var sisi = document.getElementById('sisiInput').value;

  // Hitung luas persegi
  var luas = sisi * sisi;

  // Tampilkan hasil di bawah tombol hitung
  document.getElementById('hasilLuas').innerHTML = 'Hasil Luas Persegi Adalah ' + luas;

  // Tampilkan tombol reset
  document.querySelector('.reset-button').style.display = 'inline-block';
}

function resetFormLuas() {
  // Reset nilai input
  document.getElementById('sisiInput').value = '';

  // Reset hasil luas
  document.getElementById('hasilLuas').innerHTML = '';

  // Sembunyikan kembali tombol reset
  document.querySelector('.reset-button').style.display = 'none';

  // Fokuskan kembali ke input
  document.getElementById('sisiInput').focus();
}

// Kliling
function hitungKeliling() {
  // Mengambil nilai sisi dari elemen input
  var sisi = parseFloat(document.getElementById('sisiInput').value);

  // Memastikan bahwa nilai sisi yang dimasukkan adalah angka yang valid
  if (!isNaN(sisi)) {
    // Hitung keliling persegi
    var keliling = 4 * sisi;

    // Tampilkan hasil di bawah tombol hitung
    document.getElementById('hasilKeliling').innerHTML = 'Hasil Keliling Persegi adalah ' + keliling;
  } else {
    // Tampilkan pesan kesalahan jika input tidak valid
    document.getElementById('hasilKeliling').innerHTML = 'Masukkan nilai sisi yang valid!';
  }

  // Tampilkan tombol reset
  document.querySelector('.reset-button').style.display = 'inline-block';
}

function resetFormKeliling() {
  // Reset nilai input
  document.getElementById('sisiInput').value = '';

  // Reset hasil luas
  document.getElementById('hasilKeliling').innerHTML = '';

  // Sembunyikan kembali tombol reset
  document.querySelector('.reset-button').style.display = 'none';

  // Fokuskan kembali ke input
  document.getElementById('sisiInput').focus();
}
