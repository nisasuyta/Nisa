let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

function simpan() {
    console.log(npm.value)
    console.log(nama.value)

    //localStorage.setItem("npm", npm.value)
    //localStorage.setItem("nama", nama.value)

    //jika local storage belum da isi/value 
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local storage  (konersi string => object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data 
    data.push({
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    //simpan data terbaru ke local storage 
    //konversi object => string 
    localStorage.setItem('mahasiswa', JSON.stringify(data))

    //panggil tampol()
    tampil()
}

function tampil(){
    //panggil local storage
    let hasil = JSON.parse(localStorage.getItem('mahasiswa'));

    // clear element ul id=list-mhs 
    document.getElementById("list-mhs").innerHTML = '';

    //lakukan perulangan untuk menampilkan data mahasiswa (forEach)
    hasil.forEach((element) => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm}, ${element.nama}</li>`;
    });
}

//jalankan function tampil()
tampil()