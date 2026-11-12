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
- Area video demo Google Drive; screenshot desktop asli masih bisa ditambahkan nanti.
- Tim remastering dari **Universitas Negeri Semarang**.
- Area rilis TraceOS Preview 11 dengan folder ISO & SHA-256 dan video demonstrasi Google Drive.


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

## TraceOS Preview 11: ISO, checksum, dan video

Rilis **TraceOS Preview 11** disediakan oleh pemilik proyek melalui folder Google Drive:

- **Folder ISO + SHA-256:** https://drive.google.com/drive/folders/11SZgdrPCVppIUZlc-VWg0TcM070B-gM9
- **Video demonstrasi:** https://drive.google.com/file/d/1BWGWEy5H0eaR8F1bXqBo-ShHnGyxneP2/view?usp=sharing

Tombol utama **Get TraceOS Preview 11** dan tombol ISO pada section **Get TraceOS** sekarang menuju folder rilis tersebut. Video disematkan dalam section **See TraceOS** melalui Google Drive `/preview`, dengan tautan alternatif untuk membuka video secara langsung.

Berkas SHA-256 dilaporkan tersedia dalam folder yang sama dengan ISO, tetapi nilai hash dan akses file belum dapat diverifikasi langsung. Karena itu website menyediakan tautan **Lihat SHA-256** menuju folder, dan **tidak menampilkan nilai hash yang belum terkonfirmasi**.

Setelah mengunduh ISO, cek hash lokal:

```bash
sha256sum nama-file-iso-sebenarnya.iso
```

Cocokkan nilainya dengan berkas checksum di folder. Pastikan folder dan video memakai akses **Anyone with the link / Viewer** jika ditujukan untuk publik. Jangan mengunggah ISO berukuran besar ke direktori GitHub Pages.

## Menambahkan video

1. Upload video demo ke YouTube atau penyedia video yang digunakan.
2. Ganti item "Video Demonstrasi" di bagian `#rilis` menjadi tautan video, atau sisipkan embed pada area preview.
3. Jika menggunakan iframe, sertakan `title` dan `loading="lazy"`.

## Catatan

- Panel terminal, gambar sidik jari ASCII, dan metadata diagnostik di hero adalah **artwork / visualisasi konsep**, bukan output live.
- Link **Explore tool** menuju situs resmi proyek masing-masing.
- Proyek independen untuk pendidikan; bukan produk resmi Xubuntu atau Kali Linux.
- Animasi dinonaktifkan atau dikurangi mengikuti preferensi `prefers-reduced-motion`.
