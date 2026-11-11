# TraceOS — Digital Forensics Linux

Website resmi prototipe **TraceOS**: proyek remastering Linux berbasis **Xubuntu 24.04 LTS** (XFCE), menggunakan **Cubic**, dengan fokus investigasi dan analisis bukti digital.

**Website:** https://roxtong1337.github.io/TraceOS/

> "Every trace tells a story." — Nama TraceOS berasal dari *trace* (jejak), yaitu jejak digital yang ditinggalkan oleh aktivitas pada sistem komputer.

## Identitas visual

Logo resmi TraceOS menggunakan **siluet kucing yang tersusun dari angka biner 0 dan 1**, disediakan oleh tim TraceOS. Gambar transparan yang dioptimalkan untuk website berada di `assets/img/traceos-cat.webp`. File SVG lama tetap disimpan sebagai arsip. Gambar asli resolusi tinggi disimpan terpisah oleh pemilik.

Logo digunakan sebagai ikon navigasi, artwork utama hero, favicon, dan elemen footer. Layout website terinspirasi halaman utama distro Linux seperti Kali: logo besar di kiri, penjelasan dan tombol utama di kanan, serta section fitur dan daftar tool. Warna hijau sengaja dibuat lebih lembut (sage/forest green) agar tidak terlalu neon. Identitas visual tetap milik TraceOS.

## Isi website

- Hero dengan artwork sidik jari **ASCII** dan terminal konsep, bertema **cyber-green**.
- Penjelasan latar belakang TraceOS dan sasaran pengguna.
- Tiga fitur utama: **Digital Evidence Analysis**, **Data Recovery & File Investigation**, dan **Network Forensics**.
- Delapan tools: **Autopsy**, **The Sleuth Kit**, **Wireshark**, **TestDisk**, **PhotoRec**, **Foremost**, **ExifTool**, dan **Binwalk**. Tersedia filter berdasarkan kategori.
- Spesifikasi remastering: Xubuntu 24.04 LTS, XFCE, Cubic.
- Area khusus screenshot desktop dan video demo.
- Tim remastering dari **Universitas Negeri Semarang**.
- Area rilis untuk ISO, video, dan checksum (saat ini placeholder).

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
    │   └── traceos-binary-cat.svg
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

## Menambahkan ISO dan checksum

1. Upload ISO ke **GitHub Releases** atau platform distribusi berkas lain yang sesuai. **Jangan** mengunggah ISO berukuran besar ke folder GitHub Pages.
2. Hitung SHA-256 file rilis: `sha256sum TraceOS-1.0-amd64.iso`.
3. Di bagian `#rilis` pada `index.html`, ganti badge **SEGERA** dengan tautan ke URL unduhan ISO asli.
4. Tampilkan checksum SHA-256 yang sesuai dan anjurkan pengguna memverifikasi hasil download.

## Menambahkan video

1. Upload video demo ke YouTube atau penyedia video yang digunakan.
2. Ganti item "Video Demonstrasi" di bagian `#rilis` menjadi tautan video, atau sisipkan embed pada area preview.
3. Jika menggunakan iframe, sertakan `title` dan `loading="lazy"`.

## Catatan

- Panel terminal, gambar sidik jari ASCII, dan metadata diagnostik di hero adalah **artwork / visualisasi konsep**, bukan output live.
- Link **Explore tool** menuju situs resmi proyek masing-masing.
- Proyek independen untuk pendidikan; bukan produk resmi Xubuntu atau Kali Linux.
- Animasi dinonaktifkan atau dikurangi mengikuti preferensi `prefers-reduced-motion`.
