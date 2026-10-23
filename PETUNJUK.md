# Undangan Rizqah & Farhan

Paket ini menggunakan 8 gambar desain yang kamu kirim.

## Isi
- `index.html`: kode website lengkap dan responsif.
- `01-sampul.jpg` sampai `08-penutup.jpg`: gambar desain asli, berurutan.
- `Code.gs`: kode penghubung RSVP ke Google Sheets.

## Pasang ke GitHub Pages
1. Buka repositori GitHub dan pilih Add file > Upload files.
2. Unggah `index.html` dan semua 8 gambar JPG ke folder yang sama (root repositori).
3. Unggah file musik asli dengan nama `Lagu.mp3` ke folder yang sama. Jangan gunakan file kosong sebagai musik.
4. Commit changes.
5. Untuk menyimpan RSVP, pasang `Code.gs` di Google Apps Script yang terhubung ke Google Sheet, deploy sebagai Web App, lalu tempel URL Web App ke `RSVP_ENDPOINT` di `index.html`.

Catatan: area klik transparan pada gambar lokasi dan Wedding Gift diposisikan berdasarkan perkiraan; uji di HP dan sesuaikan jika perlu. Form RSVP tidak menyimpan jawaban sampai URL Apps Script terpasang.
