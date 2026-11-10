# TraceOS — Website Resmi

Website profil untuk **TraceOS**, distro Linux berbasis **Xubuntu 24.04 LTS** yang dikemas
khusus untuk **digital forensics** (jejak digital).

Situs ini statis (HTML/CSS/JS) tanpa build step. Tata letak dan CSS mengikuti
[halaman depan kali.org](https://www.kali.org/) hampir baris per baris (banner penuh
layar, sorotan fitur, carousel tools, bagian "Everywhere" ber-neon, pratinjau desktop,
kartu) — dengan dua perbedaan: **warna** (biru/ungu kali → palet cyber-green) dan
**gambar** (logo ASCII art TraceOS + aset sendiri). Beberapa fitur tambahan: video yang
berputar saat di-scroll, animasi reveal, dan efek neon pada logo.

## Struktur

```
.
├── index.html              # Halaman utama (landing page)
└── assets
    ├── css/style.css       # Tema "cyber green", layout pola kali.org
    ├── js/main.js          # Menu, reveal, video autoplay saat di-scroll
    ├── img/                # Logo, ikon tools, mockup desktop, hero background
    └── video/              # Video demo (mp4 + webm) dan poster
```

## Bagian halaman

1. **Banner / Hero** — logo ASCII art `TraceOS`, judul, dua tombol (Unduh & Dokumentasi), panah gulir.
2. **Sorotan (Highlights)** — "Standar Baru Forensik Digital" + 5 poin fitur dan mockup laptop.
3. **Tools** — carousel 8 paket forensik (Autopsy, The Sleuth Kit, Wireshark, TestDisk, PhotoRec, Foremost, ExifTool, Binwalk).
4. **TraceOS Everywhere** — Live System, Virtual Machine, Bare Metal, plus ARM / Cloud / Containers / USB Persisten.
5. **Video** — video demo yang **berputar otomatis saat masuk area pandang** (scroll), dapat diklik untuk kontrol manual.
6. **Desktop TraceOS** — pratinjau dua tata letak XFCE.
7. **Tentang / Spesifikasi** — latar belakang, tabel spesifikasi, sasaran pengguna.
8. **Tim Remastering** — Zukhruf Gustdika Cahyatullah (head), Umniyya Khazma, Aisy Tsania Sadzakky, Natan Haryo Prastomo.
9. **Unduh** — placeholder ISO (video demo sudah dapat ditonton).

## Menjalankan secara lokal

Tidak butuh tool apa pun, cukup buka `index.html` di browser. Untuk pengalaman terbaik:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Kredit

Universitas Negeri Semarang.
