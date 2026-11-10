# TraceOS — Website Resmi

Website profil untuk **TraceOS**, distro Linux berbasis **Xubuntu 24.04 LTS** yang dikemas
khusus untuk **digital forensics** (jejak digital). Situs ini adalah prototype statis
(HTML/CSS/JS) tanpa build step.

## Struktur

```
.
├── index.html          # Halaman utama (landing page)
└── assets
    ├── css/style.css   # Tema "cyber green"
    ├── js/main.js      # Interaksi: menu, reveal, counter, animasi terminal
    └── img/            # Tempat aset gambar (menyusul)
```

## Bagian halaman

1. **Hero** — judul, ASCII art `TraceOS`, dan terminal animasi.
2. **Stats** — ringkasan angka (tools, fitur, basis, tim).
3. **Fitur Unggulan** — Digital Evidence Analysis, Data Recovery & File Investigation, Network Forensics.
4. **Tools** — 8 paket forensik utama (Autopsy, The Sleuth Kit, Wireshark, TestDisk, PhotoRec, Foremost, ExifTool, Binwalk).
5. **Tentang / Rencana Distro** — latar belakang, sasaran pengguna, spesifikasi distro.
6. **Tim Remastering** — Zukhruf Gustdika Cahyatullah (head), Umniyya Khazma, Aisy Tsania Sadzakky, Natan Haryo Prastomo.
7. **Unduh** — placeholder untuk ISO dan video demo (menyusul).

## Menjalankan secara lokal

Tidak butuh tool apa pun, cukup buka `index.html` di browser. Untuk pengalaman terbaik:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Kredit

Universitas Negeri Semarang.
