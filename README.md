# WEBSITE RESMI DPW PEMUDA PARLEMEN INDONESIA PROVINSI JAWA BARAT

Selamat datang di repositori website resmi **Dewan Pengurus Wilayah (DPW) Pemuda Parlemen Indonesia Provinsi Jawa Barat**. Website ini telah diperbarui secara visual mengikuti sistem desain **Nexora** — mengusung estetika **Modern SaaS landing page, clean minimalism, dominasi warna putih, soft blue gradient, tipografi Plus Jakarta Sans, dan ilustrasi 3D abstrak**.

Seluruh isi konten, struktur data, integrasi foto pengurus resmi, fitur interaktif, dan navigasi dipertahankan 100%.

---

## 1. TECH STACK & PRINSIP DESAIN (NEXORA REDESIGN)

* **HTML5 Semantic**: Struktur semantik yang ramah aksesibilitas (a11y) dan standar SEO modern.
* **CSS3 Vanilla (Nexora Design Tokens)**: 
  * Palet modern SaaS: dominan putih (`#FFFFFF`), latar keabu-abuan halus (`#F7F9FC`), biru utama (`#3267F5`), dan gradasi biru lembut (`#5B8DFF`, `#EEF4FF`).
  * Tipografi modern: **Plus Jakarta Sans** (Heading/Display), **Inter** (Body text), dan **JetBrains Mono** (Technical tags).
  * Sudut membulat modern (`border-radius: 12px – 28px`), border abu-abu tipis (`#E8EDF5`), serta bayangan halus (*soft ambient drop shadows*).
  * Ilustrasi 3D vektor abstrak mengambang (*floating 3D composition*) dengan pencahayaan specular dan kartu SaaS interaktif.
  * Animasi 3D CSS Card Flip (180°) halus dengan transisi mulus.
* **JavaScript Vanilla (ES6+)**: Logika modular tanpa dependensi framework (tanpa React, Vue, atau build tools eksternal). Ringan, cepat, dan siap dijalankan langsung di browser mana pun.
* **100% Kompatibel dengan GitHub Pages**.

---

## 2. STRUKTUR FOLDER PROYEK

```text
dpw-ppi-jawa-barat/
├── index.html                  # Halaman utama dengan 8 section dan footer sistem
├── style.css                   # Stylesheet Nexora Modern SaaS Design System
├── script.js                   # Konfigurasi data & logika interaktif
├── README.md                   # Dokumentasi panduan penggunaan & deployment
├── Gambar/                     # Folder aset utama foto resmi organisasi
│   ├── ppi logo.jpeg           # Logo resmi DPW PPI Jawa Barat
│   ├── Alisa Nurillah Auliyasin.jpeg
│   ├── Candra Kurniawan, S.Sos..png
│   ├── Faisal Rizky Ramadandi.jpg
│   ├── M. Firdaus Daffarachman.jpeg
│   ├── Muhammad Rahmat.jpeg
│   └── Nida Ghaida Fauziyyah.png
└── assets/
    ├── README.md               # Catatan folder aset
    ├── logo.svg                # Vector fallback emblem
    ├── pengurus/               # Salinan & fallback foto pengurus
    └── dokumentasi/            # Foto/placeholder arsip dokumentasi (600x400px)
        ├── doc_01.svg
        ├── doc_02.svg
        ├── doc_03.svg
        ├── doc_04.svg
        ├── doc_05.svg
        └── doc_06.svg
```

---

## 3. CARA MENJALANKAN LOKAL & DEPLOY KE GITHUB PAGES

### A. Menjalankan Langsung di Komputer Lokal
1. Cukup klik ganda (*double-click*) file `index.html` pada browser Anda (Chrome, Edge, Firefox, Safari).
2. Atau jika menggunakan VSCode, klik kanan file `index.html` dan pilih **Open with Live Server**.
3. Atau jalankan server lokal ringan menggunakan Python atau Node:
   ```bash
   # Menggunakan Python
   python -m http.server 8000

   # Atau menggunakan Node.js npx
   npx serve .
   ```
   Buka `http://localhost:8000` di peramban.

### B. Deployment ke GitHub Pages (Gratis & Cepat)
1. Buat repositori baru di GitHub (misal: `dpw-ppi-jabar`).
2. Unggah seluruh isi file proyek ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: redesign visual website DPW PPI Jawa Barat ala Nexora"
   git branch -M main
   git remote add origin https://github.com/USERNAME/dpw-ppi-jabar.git
   git push -u origin main
   ```
3. Buka tab **Settings** di repositori GitHub Anda.
4. Pilih menu **Pages** di bilah sisi kiri.
5. Pada bagian **Build and deployment > Branch**, pilih cabang `main` dan folder `/(root)`, lalu klik **Save**.
6. Dalam 1–2 menit, website resmi langsung online di URL:
   `https://USERNAME.github.io/dpw-ppi-jabar/`

---

## 4. PANDUAN KUSTOMISASI KONTEN (DI `script.js`)

Seluruh data organisasi dipusatkan di file **`script.js`** agar pengurus dapat memperbarui data tanpa menyentuh kode markup HTML.

### A. Data Pengurus & Fitur Flashcard (`script.js`)
Buka file `script.js` pada bagian array `pengurusData`:

```javascript
const pengurusData = [
  {
    id: 1,
    kode: "DPW-JB-001",
    nama: "Candra Kurniawan, S.Sos.",
    jabatan: "Ketua Dewan Pengurus Wilayah",
    divisi: "BPH", // Pilihan: "BPH" atau "KOMITE"
    tempatLahir: "Kota Bandung",
    domisili: "Kota Bandung, Jawa Barat",
    periode: "2024–2026",
    foto: "Gambar/Candra Kurniawan, S.Sos..png"
  },
  // Data pengurus lainnya...
];
```

* **Fitur 3D Flip Flashcard**:
  * **Sisi Depan**: Menampilkan foto pengurus beresolusi tinggi, badge kode, nama lengkap, jabatan, dan indikator `Klik untuk melihat detail ↻`.
  * **Sisi Belakang**: Kartu berputar 180° menampilkan jabatan lengkap, tempat lahir, domisili, periode kepengurusan, dan tombol `KEMBALI KE DEPAN ↺`.
  * **Interaksi**: Berputar HANYA ketika diklik atau ditap (bukan hover). Mendukung klik mouse desktop, ketukan layar sentuh (*mobile tap*), dan navigasi keyboard (Enter / Spasi). Klik kedua mengembalikan kartu ke sisi depan.

---

### B. Dokumentasi Kegiatan (`script.js`)
Buka file `script.js` pada bagian array `dokumentasiData`:

```javascript
const dokumentasiData = [
  {
    id: 1,
    kode: "REC_2026_01",
    judul: "Audiensi Strategis Kepemudaan Jawa Barat",
    tanggal: "18 Februari 2026",
    lokasi: "Bandung, Jawa Barat",
    kategori: "AUDIENCE & DISCUSSION",
    deskripsi: "Dialog konstruktif membahas peran pemuda dalam formulasi agenda pembangunan strategis Jawa Barat.",
    foto: "assets/dokumentasi/doc_01.svg"
  }
];
```

Kartu dokumentasi dilengkapi dengan **Interactive Lightbox Viewer** (zoom foto, navigasi keyboard panah kiri/kanan, dan tombol Escape).

---

### C. Lokasi Sekretariat & Peta (`script.js`)
Buka file `script.js` pada bagian objek `officeConfig`:

```javascript
const officeConfig = {
  isPending: true, // Atur ke false jika alamat fisik sudah definitif
  nama: "SEKRETARIAT DPW PEMUDA PARLEMEN INDONESIA PROVINSI JAWA BARAT",
  alamat: "Jl. R.E. Martadinata No. 120, Cihapit, Kec. Bandung Wetan",
  kota: "Kota Bandung, Jawa Barat 40114",
  kordinat: "6.9103° S, 107.6200° E",
  mapsUrl: "https://maps.google.com/?q=Bandung+Jawa+Barat",
  embedMapUrl: "https://www.openstreetmap.org/export/embed.html?..."
};
```

---

### D. Saluran Kontak & Media Sosial (`script.js`)
```javascript
const contactConfig = {
  email: "sekretariat@dpw-ppi-jabar.id",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  instagramUser: "ppi_jawabarat",
  instagramUrl: "https://instagram.com/ppi_jawabarat"
};
```

---

## 5. SISTEM DESAIN & PALET WARNA RESMI (NEXORA)

| Elemen | Kode Warna | Deskripsi Penggunaan |
| :--- | :--- | :--- |
| **Putih Utama** | `#FFFFFF` | Latar belakang dominan, kartu putih, navbar |
| **Putih Keabu-abuan** | `#F7F9FC` | Latar belakang section selang-seling (*alternate*) |
| **Biru Utama** | `#3267F5` | Tombol CTA, aksen heading, ikon aktif, brand color |
| **Biru Sekunder** | `#5B8DFF` | Gradasi tombol, orbit cincin 3D, hover efek |
| **Biru Muda** | `#DCE9FF` | Border badge pill, hover state, card accents |
| **Biru Sangat Muda** | `#EEF4FF` | Latar badge tag pill, glow ambient hero |
| **Teks Utama** | `#141821` | Tipografi judul dan teks primer (keterbacaan tinggi) |
| **Teks Sekunder** | `#667085` | Paragraf deskripsi dan label pendukung |
| **Border Halus** | `#E8EDF5` | Garis batas tipis kartu, pemisah navbar & footer |

---

## 6. FITUR INTERAKTIF UTAMA

1. **Nexora Clean Minimalist Layout**: Desain bersih, whitespace lega, kartu putih bersudut membulat dengan bayangan lembut.
2. **Hero 3D Abstract Artwork**: Ilustrasi 3D vektor berdimensi mengambang (*floating spheres*, kartu SaaS transparan, cincin orbital) dengan animasi gerak melayang halus.
3. **Interactive 3D Flip Flashcards**: Kartu pengurus 3 dimensi (180°) yang dapat dibalik dengan klik atau tap di perangkat seluler.
4. **Pencarian & Filter Pengurus**: Real-time search dan filter kategori (BPH vs Komite).
5. **Interactive Lightbox Galeri**: Penampil foto arsip dengan kontrol keyboard dan latar overlay bersih.
6. **Transmisi Pesan Terstruktur**: Formulir kontak terintegrasi dengan pembuatan payload resmi dan modal pratinjau transmisi (*dispatch preview*).
7. **Responsif Desktop, Tablet, & Smartphone**: Adaptif penuh tanpa *horizontal scrollbar*.

---

*Hak Cipta © 2026 Dewan Pengurus Wilayah Pemuda Parlemen Indonesia Provinsi Jawa Barat. Redesain visual dengan standar Nexora Modern SaaS Design.*
