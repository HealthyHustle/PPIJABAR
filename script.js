/**
 * DPW PEMUDA PARLEMEN INDONESIA - PROVINSI JAWA BARAT
 * SCRIPT ENGINE: CYBER BRUTALISM / 3D FLIP FLASHCARDS / LIGHTBOX / MODULAR STATE
 */

/* ==========================================================================
   1. CONFIGURATION DATA (EASILY CUSTOMIZABLE)
   ========================================================================== */

/**
 * Data Pengurus DPW PPI Jawa Barat
 * Catatan: Ini adalah data struktur contoh (SAMPLE DATA).
 * Silakan sesuaikan nama, jabatan, tempat lahir, domisili, periode, dan file foto
 * sesuai surat keputusan (SK) resmi organisasi.
 */
const pengurusData = [
  {
    id: 1,
    kode: "DPW-JB-001",
    nama: "Alisa Nurillah Auliyasin",
    jabatan: "Pengurus Wilayah",
    divisi: "BPH",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/Alisa Nurillah Auliyasin.jpeg"
  },
  {
    id: 2,
    kode: "DPW-JB-002",
    nama: "Candra Kurniawan, S.Sos.",
    jabatan: "Pengurus Wilayah",
    divisi: "BPH",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/Candra Kurniawan, S.Sos..png"
  },
  {
    id: 3,
    kode: "DPW-JB-003",
    nama: "Faisal Rizky Ramadandi",
    jabatan: "Pengurus Wilayah",
    divisi: "BPH",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/Faisal Rizky Ramadandi.jpg"
  },
  {
    id: 4,
    kode: "DPW-JB-004",
    nama: "M. Firdaus Daffarachman",
    jabatan: "Pengurus Wilayah",
    divisi: "BPH",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/M. Firdaus Daffarachman.jpeg"
  },
  {
    id: 5,
    kode: "DPW-JB-005",
    nama: "Muhammad Rahmat",
    jabatan: "Pengurus Wilayah",
    divisi: "KOMITE",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/Muhammad Rahmat.jpeg"
  },
  {
    id: 6,
    kode: "DPW-JB-006",
    nama: "Nida Ghaida Fauziyyah",
    jabatan: "Pengurus Wilayah",
    divisi: "KOMITE",
    tempatLahir: "Jawa Barat",
    domisili: "Jawa Barat",
    periode: "2026–2028",
    foto: "Gambar/Nida Ghaida Fauziyyah.png"
  }
];

/**
 * Data Dokumentasi Kegiatan
 * Format kategori:
 * - ORGANIZATION
 * - AUDIENCE & DISCUSSION
 * - EDUCATION
 * - COLLABORATION
 * - SOCIAL ACTION
 */
const dokumentasiData = [
  {
    id: 1,
    kode: "REC_2026_01",
    judul: "Audiensi Aspirasi Kepemudaan Jawa Barat",
    tanggal: "18 Februari 2026",
    lokasi: "Bandung, Jawa Barat",
    kategori: "AUDIENCE & DISCUSSION",
    deskripsi: "Dialog konstruktif membahas peran pemuda dalam formulasi agenda pembangunan strategis Jawa Barat.",
    foto: "assets/dokumentasi/doc_01.svg"
  },
  {
    id: 2,
    kode: "REC_2026_02",
    judul: "Kajian Kebijakan Pendidikan Inklusif Daerah",
    tanggal: "04 Maret 2026",
    lokasi: "Bogor, Jawa Barat",
    kategori: "EDUCATION",
    deskripsi: "Penyusunan naskah rekomendasi pemuda mengenai pemerataan akses pendidikan dan fasilitas digital sekolah pelosok.",
    foto: "assets/dokumentasi/doc_02.svg"
  },
  {
    id: 3,
    kode: "REC_2026_03",
    judul: "Konsolidasi Organisasi Wilayah Jawa Barat",
    tanggal: "22 Januari 2026",
    lokasi: "Cirebon, Jawa Barat",
    kategori: "ORGANIZATION",
    deskripsi: "Pertemuan koordinasi pimpinan dan perwakilan daerah untuk penetapan arah kerja dan komite konferensi.",
    foto: "assets/dokumentasi/doc_03.svg"
  },
  {
    id: 4,
    kode: "REC_2026_04",
    judul: "Forum Kolaborasi Pemuda & Komunitas Kreatif",
    tanggal: "12 April 2026",
    lokasi: "Bandung Creative Hub, Jawa Barat",
    kategori: "COLLABORATION",
    deskripsi: "Sinergi bersama pegiat industri kreatif dan komunitas lokal dalam memajukan potensi talenta muda daerah.",
    foto: "assets/dokumentasi/doc_04.svg"
  },
  {
    id: 5,
    kode: "REC_2026_05",
    judul: "Aksi Solidaritas Pemuda dan Lingkungan",
    tanggal: "30 April 2026",
    lokasi: "DAS Citarum, Jawa Barat",
    kategori: "SOCIAL ACTION",
    deskripsi: "Inisiatif edukasi ekologi serta gerakan aksi nyata pemuda dalam pelestarian daerah aliran sungai.",
    foto: "assets/dokumentasi/doc_05.svg"
  },
  {
    id: 6,
    kode: "REC_2026_06",
    judul: "Simulasi Sidang Legislatif Pemuda (Model Parliament)",
    tanggal: "15 Mei 2026",
    lokasi: "Gedung Konferensi Wilayah, Jawa Barat",
    kategori: "EDUCATION",
    deskripsi: "Program peningkatan literasi politik dan keparlemenan bagi perwakilan delegasi pemuda se-Jawa Barat.",
    foto: "assets/dokumentasi/doc_06.svg"
  }
];

/**
 * Konfigurasi Lokasi Kantor / Sekretariat
 * Atur `isPending: true` jika alamat definitif belum ditetapkan.
 */
const officeConfig = {
  isPending: true, // Ubah ke false jika alamat fisik sudah definitif
  nama: "SEKRETARIAT DPW PEMUDA PARLEMEN INDONESIA PROVINSI JAWA BARAT",
  alamat: "Jl. R.E. Martadinata No. 120, Cihapit, Kec. Bandung Wetan",
  kota: "Kota Bandung, Jawa Barat 40114",
  kordinat: "6.9103° S, 107.6200° E",
  mapsUrl: "https://maps.google.com/?q=Bandung+Jawa+Barat",
  embedMapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=107.58%2C-6.94%2C107.65%2C-6.88&layer=mapnik&marker=-6.9103%2C107.6200"
};

/**
 * Konfigurasi Saluran Komunikasi Resmi
 */
const contactConfig = {
  email: "sekretariat@dpw-ppi-jabar.id",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  instagramUser: "ppi_jawabarat",
  instagramUrl: "https://instagram.com/ppi_jawabarat"
};

/* ==========================================================================
   2. INITIALIZATION & DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFlashcards();
  initDocumentation();
  initOfficeLocation();
  initContactChannels();
  initContactForm();
  initScrollSpy();
  initBackToTop();
  initDynamicYear();
});

/* ==========================================================================
   3. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("active");
    if (isOpen) {
      drawer.classList.remove("active");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    } else {
      drawer.classList.add("active");
      toggleBtn.classList.add("open");
      toggleBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ==========================================================================
   4. ORGANIZATIONAL DIRECTORY (3D FLIP CARDS)
   ========================================================================== */
let activeDirectoryFilter = "ALL";
let directorySearchQuery = "";

function initFlashcards() {
  const gridContainer = document.getElementById("directory-grid");
  const searchInput = document.getElementById("structure-search");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!gridContainer) return;

  function renderCards() {
    gridContainer.innerHTML = "";

    const filtered = pengurusData.filter(item => {
      const matchFilter = activeDirectoryFilter === "ALL" || item.divisi === activeDirectoryFilter;
      const matchSearch = item.nama.toLowerCase().includes(directorySearchQuery) ||
                          item.jabatan.toLowerCase().includes(directorySearchQuery) ||
                          item.domisili.toLowerCase().includes(directorySearchQuery);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; background: var(--bg-alt); padding: 4rem 2rem; text-align: center; font-family: var(--font-mono); color: var(--text-secondary); border: 1px solid var(--border-color);">
          <div style="color: var(--accent-purple); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">[NODE_NOT_FOUND]</div>
          <p>Tidak ada data pengurus yang cocok dengan kriteria pencarian: "<strong>${directorySearchQuery}</strong>"</p>
          <button id="reset-search-btn" class="btn-brutalist" style="margin-top: 1.5rem; padding: 0.5rem 1.25rem;">RESET PENCARIAN ↺</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          directorySearchQuery = "";
          renderCards();
        });
      }
      return;
    }

    filtered.forEach(p => {
      const cardEl = document.createElement("div");
      cardEl.className = "flashcard-item";
      cardEl.setAttribute("tabindex", "0");
      cardEl.setAttribute("role", "button");
      cardEl.setAttribute("aria-label", `Kartu Pengurus: ${p.nama}, ${p.jabatan}. Klik atau tekan Enter untuk memutar kartu.`);
      cardEl.setAttribute("aria-expanded", "false");

      cardEl.innerHTML = `
        <div class="flashcard-inner">
          <!-- TAMPILAN DEPAN KARTU -->
          <div class="flashcard-front">
            <div class="card-photo-wrapper">
              <span class="card-tag-id">${p.kode}</span>
              <img src="${p.foto}" alt="${p.nama} - ${p.jabatan}" loading="lazy" onerror="this.src='assets/pengurus/placeholder_ketua.svg'">
            </div>
            <div class="card-front-info">
              <div class="card-member-role">${p.jabatan}</div>
              <h3 class="card-member-name">${p.nama}</h3>
              <div class="card-flip-prompt">
                <span>DETAIL IDENTITAS</span>
                <span class="flip-icon">Klik untuk melihat detail ↻</span>
              </div>
            </div>
          </div>

          <!-- TAMPILAN BELAKANG KARTU (180 DEGREE FLIP) -->
          <div class="flashcard-back">
            <div class="card-back-header">
              <div class="card-back-code">// ${p.kode} // ${p.divisi}</div>
              <h3 class="card-back-name">${p.nama}</h3>
            </div>
            <div class="card-meta-list">
              <div class="card-meta-row">
                <span class="card-meta-label">POSITION / JABATAN</span>
                <span class="card-meta-value">${p.jabatan}</span>
              </div>
              <div class="card-meta-row">
                <span class="card-meta-label">BIRTHPLACE / TEMPAT LAHIR</span>
                <span class="card-meta-value">${p.tempatLahir}</span>
              </div>
              <div class="card-meta-row">
                <span class="card-meta-label">REGION / DOMISILI</span>
                <span class="card-meta-value">${p.domisili}</span>
              </div>
              <div class="card-meta-row">
                <span class="card-meta-label">TERM / PERIODE</span>
                <span class="card-meta-value">${p.periode}</span>
              </div>
            </div>
            <div class="card-back-footer">
              <button type="button" class="btn-flip-back" aria-label="Kembali ke profil depan">
                <span>KEMBALI KE DEPAN</span>
                <span>↺</span>
              </button>
            </div>
          </div>
        </div>
      `;

      gridContainer.appendChild(cardEl);
    });
  }

  // Event Delegation: Klik atau Tap untuk membalik kartu (Desktop & Mobile)
  gridContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".flashcard-item");
    if (!card) return;

    // Abaikan jika mengeklik tautan navigasi eksternal
    if (event.target.closest("a")) return;

    // Balik kartu dengan toggle class .is-flipped dan .flipped
    const isFlipped = card.classList.toggle("is-flipped");
    card.classList.toggle("flipped", isFlipped);
    card.setAttribute("aria-expanded", isFlipped ? "true" : "false");
  });

  // Aksesibilitas Keyboard (Enter dan Spasi untuk membalik kartu)
  gridContainer.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const card = event.target.closest(".flashcard-item");
      if (!card) return;

      if (event.target.tagName === "A" || event.target.tagName === "INPUT") return;

      event.preventDefault();
      const isFlipped = card.classList.toggle("is-flipped");
      card.classList.toggle("flipped", isFlipped);
      card.setAttribute("aria-expanded", isFlipped ? "true" : "false");
    }
  });

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDirectoryFilter = btn.getAttribute("data-filter") || "ALL";
      renderCards();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      directorySearchQuery = e.target.value.trim().toLowerCase();
      renderCards();
    });
  }

  // Initial Render
  renderCards();
}

/* ==========================================================================
   5. DOCUMENTATION GALLERY & LIGHTBOX
   ========================================================================== */
let activeDocCategory = "ALL";
let currentLightboxIndex = 0;
let currentLightboxList = [];

function initDocumentation() {
  const docGrid = document.getElementById("documentation-grid");
  const filterBtns = document.querySelectorAll(".doc-filter-btn");

  if (!docGrid) return;

  function renderDocs() {
    docGrid.innerHTML = "";

    currentLightboxList = dokumentasiData.filter(d => {
      return activeDocCategory === "ALL" || d.kategori === activeDocCategory;
    });

    if (currentLightboxList.length === 0) {
      docGrid.innerHTML = `
        <div style="grid-column: 1 / -1; background: var(--bg-alt); padding: 4rem 2rem; text-align: center; font-family: var(--font-mono); color: var(--text-secondary); border: 1px solid var(--border-color);">
          <div style="color: var(--accent-purple); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">[NO_RECORDS_AVAILABLE]</div>
          <p>Belum ada dokumentasi untuk kategori: ${activeDocCategory}</p>
        </div>
      `;
      return;
    }

    currentLightboxList.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "doc-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Lihat dokumentasi: ${item.judul}`);

      card.innerHTML = `
        <div class="doc-thumb-frame">
          <span class="doc-category-badge">${item.kategori}</span>
          <img src="${item.foto}" alt="${item.judul}" loading="lazy">
        </div>
        <div class="doc-info-wrap">
          <div>
            <div class="doc-meta-row">
              <span>// ${item.kode}</span>
              <span>${item.tanggal}</span>
            </div>
            <h3 class="doc-title">${item.judul}</h3>
            <p class="doc-desc">${item.deskripsi}</p>
          </div>
          <div class="doc-card-link">
            <span>EXPAND RECORD</span>
            <span class="arrow-purple">↗</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        openLightbox(index);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      docGrid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDocCategory = btn.getAttribute("data-category") || "ALL";
      renderDocs();
    });
  });

  initLightboxControls();
  renderDocs();
}

function openLightbox(index) {
  const modal = document.getElementById("doc-lightbox-modal");
  if (!modal || !currentLightboxList[index]) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("doc-lightbox-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightboxContent() {
  const item = currentLightboxList[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightbox-img");
  const codeEl = document.getElementById("lightbox-code");
  const catEl = document.getElementById("lightbox-category");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const metaEl = document.getElementById("lightbox-meta");

  if (imgEl) {
    imgEl.src = item.foto;
    imgEl.alt = item.judul;
  }
  if (codeEl) codeEl.textContent = `// ${item.kode}`;
  if (catEl) catEl.textContent = item.kategori;
  if (titleEl) titleEl.textContent = item.judul;
  if (descEl) descEl.textContent = item.deskripsi;
  if (metaEl) metaEl.textContent = `DATE: ${item.tanggal} | LOCATION: ${item.lokasi}`;
}

function initLightboxControls() {
  const modal = document.getElementById("doc-lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentLightboxList.length <= 1) return;
      currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentLightboxList.length <= 1) return;
      currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
      updateLightboxContent();
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
    if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
  });
}

/* ==========================================================================
   6. OFFICE LOCATION (CONFIGURABLE NODE)
   ========================================================================== */
function initOfficeLocation() {
  const nameEl = document.getElementById("office-name-display");
  const addressEl = document.getElementById("office-address-display");
  const cityEl = document.getElementById("office-city-display");
  const pendingAlert = document.getElementById("office-pending-alert");
  const openMapsBtn = document.getElementById("btn-open-maps");
  const getDirectionsBtn = document.getElementById("btn-get-directions");
  const mapIframe = document.getElementById("office-map-iframe");
  const statusBadge = document.getElementById("office-status-badge");

  if (officeConfig.isPending) {
    if (pendingAlert) pendingAlert.style.display = "block";
    if (statusBadge) statusBadge.innerHTML = `<span class="tech-tag" style="background: #FFE28A; color: #101010;">[STATUS: LOCATION DATA PENDING]</span>`;
  } else {
    if (pendingAlert) pendingAlert.style.display = "none";
    if (statusBadge) statusBadge.innerHTML = `<span class="tech-tag lime">[STATUS: VERIFIED NODE]</span>`;
  }

  if (nameEl) nameEl.textContent = officeConfig.nama;
  if (addressEl) addressEl.textContent = officeConfig.alamat;
  if (cityEl) cityEl.textContent = `${officeConfig.kota} // COORD: ${officeConfig.kordinat}`;

  if (openMapsBtn) {
    openMapsBtn.href = officeConfig.mapsUrl;
    openMapsBtn.target = "_blank";
    openMapsBtn.rel = "noopener noreferrer";
  }

  if (getDirectionsBtn) {
    getDirectionsBtn.href = officeConfig.mapsUrl;
    getDirectionsBtn.target = "_blank";
    getDirectionsBtn.rel = "noopener noreferrer";
  }

  if (mapIframe && officeConfig.embedMapUrl) {
    mapIframe.src = officeConfig.embedMapUrl;
  }
}

/* ==========================================================================
   7. CONTACT CHANNELS & TRANSMISSION FORM
   ========================================================================== */
function initContactChannels() {
  const emailVal = document.getElementById("channel-email-val");
  const emailBtn = document.getElementById("btn-channel-email");

  const waVal = document.getElementById("channel-wa-val");
  const waBtn = document.getElementById("btn-channel-wa");

  const igVal = document.getElementById("channel-ig-val");
  const igBtn = document.getElementById("btn-channel-ig");

  if (emailVal) emailVal.textContent = contactConfig.email;
  if (emailBtn) emailBtn.href = `mailto:${contactConfig.email}?subject=[PPI%20JABAR]%20Inquiry%20from%20Website`;

  if (waVal) waVal.textContent = contactConfig.whatsappDisplay;
  if (waBtn) waBtn.href = `https://wa.me/${contactConfig.whatsappNumber}?text=Halo%20Sekretariat%20DPW%20Pemuda%20Parlemen%20Indonesia%20Jawa%20Barat`;

  if (igVal) igVal.textContent = contactConfig.instagramUser;
  if (igBtn) igBtn.href = contactConfig.instagramUrl;
}

function initContactForm() {
  const form = document.getElementById("transmission-form");
  const modal = document.getElementById("transmission-modal");
  const modalClose = document.getElementById("transmission-modal-close");
  const previewLog = document.getElementById("transmission-log-preview");
  const directMailBtn = document.getElementById("btn-direct-mailto");
  const copyBtn = document.getElementById("btn-copy-transmission");

  if (!form || !modal) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("form-nama").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const kategori = document.getElementById("form-kategori").value;
    const subjek = document.getElementById("form-subjek").value.trim();
    const pesan = document.getElementById("form-pesan").value.trim();

    // Validasi
    if (!nama || !email || !subjek || !pesan) {
      alert("Harap lengkapi semua bidang formulir yang diperlukan.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Harap masukkan format alamat email yang valid.");
      return;
    }

    // Format Transmisi Pesan
    const payloadText = 
`=========================================
DPW PPI JAWA BARAT // TRANSMISSION DISPATCH
=========================================
TIMESTAMP  : ${new Date().toISOString()}
PENGIRIM   : ${nama}
EMAIL      : ${email}
KATEGORI   : ${kategori}
SUBJEK     : ${subjek}

ISI PESAN:
${pesan}
=========================================`;

    if (previewLog) previewLog.textContent = payloadText;

    // Siapkan tombol Mailto terstruktur
    const mailtoSubject = encodeURIComponent(`[${kategori}] ${subjek} - ${nama}`);
    const mailtoBody = encodeURIComponent(
      `Nama: ${nama}\nEmail: ${email}\nKategori: ${kategori}\n\nPesan:\n${pesan}`
    );
    if (directMailBtn) {
      directMailBtn.href = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }

    // Buka Modal Transmisi
    modal.classList.add("active");
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (copyBtn && previewLog) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(previewLog.textContent).then(() => {
        copyBtn.textContent = "COPIED TO CLIPBOARD ✓";
        setTimeout(() => {
          copyBtn.textContent = "COPY TEXT BUFFER";
        }, 2000);
      });
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

/* ==========================================================================
   8. SCROLLSPY & NAVIGATION HIGHLIGHT
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu-desktop .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   10. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
