/*
PETUNJUK RSVP KE GOOGLE SHEETS
1. Buat Google Sheet baru untuk daftar RSVP.
2. Di Google Sheet: Ekstensi > Apps Script.
3. Hapus kode contoh lalu tempel kode ini.
4. Simpan. Pilih Deploy > New deployment > Web app.
5. Execute as: Me. Who has access: Anyone.
6. Klik Deploy, beri izin bila diminta, lalu salin URL Web app.
7. Tempel URL itu ke const RSVP_ENDPOINT = ""; di index.html.
8. Simpan perubahan index.html di GitHub. Uji kirim RSVP.
*/
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("RSVP");
    if (!sheet) {
      sheet = ss.insertSheet("RSVP");
      sheet.appendRow(["Waktu diterima", "Nama", "Kehadiran", "Jumlah orang", "Ucapan/Doa"]);
    }
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.attendance || "",
      data.guests || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
