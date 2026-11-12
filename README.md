# TraceOS — Digital Forensics Linux

Website resmi prototipe **TraceOS**: proyek remastering Linux berbasis **Xubuntu 24.04 LTS** (XFCE), menggunakan **Cubic**, dengan fokus investigasi dan analisis bukti digital.

**Website:** https://roxtong1337.github.io/TraceOS/

> "Every trace tells a story." — Nama TraceOS berasal dari *trace* (jejak), yaitu jejak digital yang ditinggalkan oleh aktivitas pada sistem komputer.

## Identitas visual

Logo resmi TraceOS menggunakan **siluet kucing yang tersusun dari angka biner 0 dan 1**, disediakan oleh tim TraceOS. Gambar transparan yang dioptimalkan untuk website berada di `assets/img/traceos-cat.webp`. File SVG lama tetap disimpan sebagai arsip. Gambar asli resolusi tinggi disimpan terpisah oleh pemilik.

Logo kucing biner dipakai sebagai identitas kecil di navbar, favicon, dan footer—**tidak lagi ditampilkan besar pada hero**. Hero memakai ilustrasi terminal dan sidik jari ASCII untuk tema forensik digital. Tata letak situs terinspirasi situs distro Linux profesional seperti Kali Linux, tetapi dengan identitas TraceOS sendiri dan aksen **cyber green** yang tidak mendominasi seluruh bidang.

## Isi website

- Hero dengan artwork sidik jari **ASCII** dan terminal konsep, bertema **cyber-green**.
- Penjelasan latar belakang TraceOS dan sasaran pengguna.
- Tiga fitur utama: **Digital Evidence Analysis**, **Data Recovery & File Investigation**, dan **Network Forensics**.
- Delapan tools: **Autopsy**, **The Sleuth Kit**, **Wireshark**, **TestDisk**, **PhotoRec**, **Foremost**, **ExifTool**, dan **Binwalk**. Tersedia filter berdasarkan kategori. Aset ikon untuk Autopsy, Wireshark, TestDisk, PhotoRec/QPhotoRec, dan ExifTool diambil dari proyek atau logo asli; untuk TSK, Foremost, dan Binwalk yang utamanya berbasis CLI ditampilkan identitas perintah, bukan logo rekaan.
- Spesifikasi remastering: Xubuntu 24.04 LTS, XFCE, Cubic.
- Area khusus screenshot desktop dan video demo.
- Tim remastering dari **Universitas Negeri Semarang**.
- Area rilis dengan link unduhan ISO Google Drive; video dan checksum masih placeholder.


## Asal aset ikon aplikasi

Ikon tidak digambar ulang. Aset asli dipakai dari sumber berikut:

| Tool | Asal icon |
| --- | --- |
| Autopsy | `sleuthkit/autopsy` — `icons/icon.ico` (ikon installer aplikasi) |
| Wireshark | `wireshark/wireshark` — `resources/icons/wsicon256.png` |
| TestDisk | `cgsecurity/testdisk` — `icons/testdisk.ico` |
| PhotoRec | `cgsecurity/testdisk` — `icons/scalable/apps/qphotorec.svg`, disimpan di `assets/img/tools/photorec.svg` |
| ExifTool | Wikimedia Commons — `ExifTool_logo.svg` |
| The Sleuth Kit, Foremost, Binwalk | Identitas text perintah CLI; **bukan** diklaim sebagai ikon resmi aplikasi |

Kredit dan lisensi mengikuti pemegang hak masing-masing: [Autopsy](https://github.com/sleuthkit/autopsy), [Wireshark](https://github.com/wireshark/wireshark), [TestDisk & PhotoRec](https://github.com/cgsecurity/testdisk), dan [ExifTool di Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ExifTool_logo.svg). PhotoRec/QPhotoRec dan Wireshark menggunakan lisensi GPL yang berlaku pada proyeknya. Penggunaan gambar merek tidak menyiratkan afiliasi.

## Anggota tim

1. **Zukhruf Gustdika Cahyatullah** — Project Lead / Team Head
2. **Umniyya Khazma** — Integrasi tools dan konfigurasi sistem
3. **Aisy Tsania Sadzakky** — Desain visual dan dokumentasi
4. **Natan Haryo Prastomo** — Pengujian ISO dan validasi

Peran anggota 2–4 merupakan **rancangan awal** untuk prototipe; sesuaikan setelah pembagian tugas final disepakati.

## Struktur

```text
.
├── index.html
├── README.md
└── assets
    ├── css/
    │   ├── style.css
    │   └── kali-inspired.css
    ├── img/
    │   ├── traceos-cat.webp
    │   ├── traceos-binary-cat.svg
    │   └── tools/
    │       └── photorec.svg
    └── js/
        └── main.js
```

Seluruh halaman berbasis **HTML, CSS, dan JavaScript murni**. Tidak memerlukan Node, npm, framework, maupun build pipeline. GitHub Pages langsung menyajikan berkas statis dari branch `main` (jika pengaturan Pages mengarah ke root branch tersebut).

## Pratinjau lokal

Buka `index.html` di browser, atau jalankan dari direktori repo:

```bash
python3 -m http.server 8000
```

Lalu kunjungi `http://localhost:8000`.

## Menambahkan screenshot desktop

1. Simpan screenshot XFCE TraceOS asli di `assets/img/traceos-desktop.png`.
2. Cari elemen `showcase__placeholder` di `index.html`.
3. Ganti konten placeholder dengan gambar responsive, misalnya:
   `<img src="assets/img/traceos-desktop.png" alt="Tampilan desktop XFCE pada TraceOS" loading="lazy">`
4. Tambahkan styling agar gambar memenuhi lebar area dan mempertahankan aspect ratio.

Jangan menyebut visual konsep sebagai screenshot OS asli.

## Unduh TraceOS ISO

Image ISO telah ditautkan oleh pemilik proyek melalui Google Drive:

- [TraceOS ISO (Google Drive)](https://drive.google.com/file/d/1EM8UQKSuC7A5FiuAQG6gpsXBmgY6tTsr/view?usp=sharing)
- Tautan ditampilkan di tombol utama **Download TraceOS** dan bagian **Get TraceOS** pada website.
- Untuk mengunduh, buka halaman file lalu gunakan tombol **Download** di Google Drive.

Catatan: akses publik, nama file aktual, dan integritas image belum diverifikasi secara independen. **Checksum SHA-256 belum diberikan**; perbarui bagian checksum setelah nilainya diketahui.

Untuk membuat checksum dari ISO yang sesuai di Linux:

```bash
sha256sum nama-file-iso-sebenarnya.iso
```

Hindari mengunggah image ISO berukuran besar ke direktori GitHub Pages.

## Menambahkan video

1. Upload video demo ke YouTube atau penyedia video yang digunakan.
2. Ganti item "Video Demonstrasi" di bagian `#rilis` menjadi tautan video, atau sisipkan embed pada area preview.
3. Jika menggunakan iframe, sertakan `title` dan `loading="lazy"`.

## Catatan

- Panel terminal, gambar sidik jari ASCII, dan metadata diagnostik di hero adalah **artwork / visualisasi konsep**, bukan output live.
- Link **Explore tool** menuju situs resmi proyek masing-masing.
- Proyek independen untuk pendidikan; bukan produk resmi Xubuntu atau Kali Linux.
- Animasi dinonaktifkan atau dikurangi mengikuti preferensi `prefers-reduced-motion`.
