# Petunjuk publikasi gratis

## A. Persiapan
1. Ekstrak ZIP ini ke satu folder.
2. Buka `index.html` untuk memeriksa kodenya. Untuk melihat seperti website lokal, gunakan preview HTML di Acode atau browser dengan server lokal.
3. Jika ingin musik, masukkan file MP3 yang legal kamu gunakan ke `assets/` dengan nama persis `music.mp3`.
4. Periksa lagi nama, gelar, tanggal, jam, alamat, nomor rekening, dan alamat hadiah sebelum dibagikan.

## B. Terbitkan lewat GitHub Pages
1. Daftar/login di https://github.com/
2. Buat repository baru bernama `undangan-rizqah-farhan`. Pilih **Public** agar dapat menggunakan GitHub Pages gratis.
3. Unggah `index.html`, folder `assets` beserta seluruh gambar, dan file lain yang diperlukan. Struktur harus tetap seperti ini:
   - `index.html`
   - `assets/01-sampul.jpg` ... `assets/08-penutup.jpg`
4. Buka **Settings → Pages**.
5. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main`, folder `/(root)`, lalu tekan **Save**.
7. Tunggu beberapa menit. Link biasanya berbentuk `https://NAMA-USER.github.io/undangan-rizqah-farhan/`.
8. Buka link dari HP untuk menguji semua tombol. Jika gambar tidak muncul, pastikan nama file dan folder sama persis.

## C. Agar RSVP tersimpan ke Google Sheets (gratis)
### 1. Buat spreadsheet
1. Buka https://sheets.google.com/ dan buat spreadsheet baru, misalnya `RSVP Rizqah Farhan`.
2. Pastikan akun Google yang digunakan adalah akun milik keluarga/pengelola undangan.

### 2. Pasang Apps Script
1. Dari spreadsheet, pilih **Extensions → Apps Script**.
2. Hapus kode contoh lalu salin seluruh isi file `rsvp-google-apps-script.gs` ke editor Apps Script.
3. Simpan proyek.
4. Pilih **Deploy → New deployment**.
5. Pilih ikon roda gigi/jenis deployment **Web app**.
6. Pada **Execute as**, pilih **Me**.
7. Pada **Who has access**, pilih **Anyone** jika pilihan ini tersedia dan kamu setuju formulir dapat diakses publik. Kebijakan akun sekolah/kantor bisa membatasi opsi ini.
8. Tekan **Deploy**, ikuti otorisasi Google, lalu salin URL Web app yang berakhiran `/exec`.

### 3. Hubungkan ke website
1. Buka `index.html`.
2. Cari baris: `const RSVP_ENDPOINT = "";`
3. Tempel URL Web app di antara tanda kutip, misalnya:
   `const RSVP_ENDPOINT = "https://script.google.com/macros/s/ID_DEPLOYMENT/exec";`
4. Simpan dan unggah ulang `index.html` ke repository GitHub.
5. Uji RSVP dari link publik. Kirim satu entri percobaan, lalu buka spreadsheet untuk memastikan baris baru muncul.

### 4. Jika mengubah kode Apps Script
Buka **Deploy → Manage deployments**, edit deployment yang ada, pilih versi baru, lalu deploy. Pastikan URL `/exec` yang dipakai tetap benar; jika URL berubah, perbarui `RSVP_ENDPOINT`.

### Privasi
- Siapa pun yang memiliki link undangan dapat mengirim RSVP; hindari mengumpulkan informasi sensitif.
- Batasi akses spreadsheet hanya untuk pengelola yang perlu melihat respons.
- URL Apps Script yang dipakai di website bersifat publik. Jangan menaruh password, nomor identitas, atau rahasia di kode.
- Karena request memakai mode `no-cors`, browser tidak bisa membaca balasan server secara langsung. Pesan di halaman berarti pengiriman telah dicoba, bukan bukti mutlak bahwa baris berhasil tersimpan. Periksa spreadsheet setelah tes.
- Jika akun tidak mengizinkan deployment publik, gunakan Google Forms sebagai alternatif RSVP dan sematkan/link formulirnya.

## D. Yang perlu diuji sebelum dibagikan
- Buka undangan dan gulir seluruh halaman.
- Hitung mundur menuju 28 November 2026 pukul 08.00 WIB.
- Tombol Google Maps membuka lokasi yang benar.
- Tombol salin rekening dan alamat berfungsi.
- Musik hanya bisa berjalan setelah file `assets/music.mp3` ditambahkan dan tombol ditekan.
- Form RSVP menyimpan data ke spreadsheet.
- Coba di HP Android dan iPhone jika memungkinkan.
