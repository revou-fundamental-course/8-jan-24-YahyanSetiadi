function hitungLuas() {
  var sisi = document.getElementById('sisiInput').value;

  var luas = sisi * sisi;

  document.getElementById('hasilLuas').innerHTML = 'Hasil Luas Persegi Adalah ' + luas;

  document.querySelector('.reset-button').style.display = 'inline-block';
}

function resetFormLuas() {
  document.getElementById('sisiInput').value = '';

  document.getElementById('hasilLuas').innerHTML = '';

  document.querySelector('.reset-button').style.display = 'none';

  document.getElementById('sisiInput').focus();
}

function hitungKeliling() {
  var sisi = parseFloat(document.getElementById('sisiInput').value);

  if (!isNaN(sisi)) {
    var keliling = 4 * sisi;

    document.getElementById('hasilKeliling').innerHTML = 'Hasil Keliling Persegi adalah ' + keliling;
  } else {
    document.getElementById('hasilKeliling').innerHTML = 'Masukkan nilai sisi yang valid!';
  }

  document.querySelector('.reset-button').style.display = 'inline-block';
}

function resetFormKeliling() {
  document.getElementById('sisiInput').value = '';

  document.getElementById('hasilKeliling').innerHTML = '';

  document.querySelector('.reset-button').style.display = 'none';

  document.getElementById('sisiInput').focus();
}
