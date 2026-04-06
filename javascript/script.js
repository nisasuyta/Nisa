//alert("Belajar Javascript");

function kirim() {
//ambil value nama 
let nama = document.getElementById('nama').value;
console.log("Nama : "+nama);

// tampilkan nama ke ul id-list-pesan
//document.getElementById('list-pesan').innerHTML = "<il>"+nama+"</li>";

document.getElementById('list-pesan').innerHTML = `<li>${nama}</li>`;
}
