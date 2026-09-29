const daftarfilm = [
  { judul: "The Tongers ", genre: "Drama", rating: 9.2, gambar: "poster/film1.jpg" },
  { judul: "The Dark Knight", genre: "Aksi", rating: 8.9, gambar: "poster/film2.jpg" },
  { judul: "Project Hail Mary", genre: "Fiksi Ilmiah", rating: 9.5, gambar: "poster/film3.jpg" },
  { judul: "Transformers", genre: "Aksi", rating: 8.6, gambar: "poster/film4.jpg" },
  { judul: "Resident Evil", genre: "Horor", rating: 7.5, gambar: "poster/film5.jpg" },
  { judul: "Kimi no Nawa", genre: "Romance", rating: 9.4, gambar: "poster/film6.jpg" }
];

const pilihgenre  = document.getElementById("genre");
const pilihrating = document.getElementById("rating");
const daftar    = document.getElementById("daftar");
const info      = document.getElementById("info");

function tampilkanfilm() {
  
  const genredipilih = pilihgenre.value;
  const ratingMin = parseFloat(pilihrating.value);

  
  daftar.innerHTML = "";
  let jumlah = 0;

  for (let film of daftarfilm) {
    if (genredipilih !== "Semua" && film.genre !== genredipilih) {
      continue;
    }

    if (film.rating < ratingMin) {
      continue;
    }

    const kartu = document.createElement("div");
    kartu.classList.add("kartu");

    if (film.rating >= 8.5) {
      kartu.classList.add("tinggi");
    }

    kartu.innerHTML = `<img src="${film.gambar}" alt="Poster ${film.judul}">
      <h3>${film.judul}</h3>
      <p>Genre: ${film.genre}</p>
      <p class="rating">Rating: ${film.rating}</p>`;

    daftar.appendChild(kartu);
    jumlah++;
  }

  if (jumlah === 0) {
    info.textContent = "Tidak ada film yang sesuai filter.";
  } else {
    info.textContent = "Menampilkan " + jumlah + " dari " + daftarfilm.length + " film";
  }
}

pilihgenre.addEventListener("change", tampilkanfilm);
pilihrating.addEventListener("change", tampilkanfilm);

tampilkanfilm();
