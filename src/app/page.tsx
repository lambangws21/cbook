"use client";

import JadwalOperasi from "@/components/jadwaloperasi/jadwaloperasi";

export default function Home() {
  return (
    <div>
      <main className="bg-white min-h-screen p-8">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-green-600">
            Kamar Bedah OK Carolus
          </h1>
          <p className="text-lg mt-4">
            Selamat Datang di Pusat Pelayanan Bedah Terbaik
          </p>
        </header>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Visi Kami</h2>
          <p className="mt-4 text-gray-600">
            Menjadi pusat pelayanan bedah terkemuka yang diakui secara nasional
            dan internasional dalam memberikan perawatan bedah yang komprehensif
            dan inovatif.
          </p>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Misi Kami</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>
              Menyediakan layanan bedah yang berkualitas dengan mengutamakan
              keselamatan dan kenyamanan pasien.
            </li>
            <li>
              Menggunakan teknologi canggih dan metode bedah terkini untuk hasil
              yang optimal.
            </li>
            <li>
              Memberikan pendidikan dan pelatihan berkelanjutan kepada tenaga
              medis untuk meningkatkan kompetensi.
            </li>
            <li>
              Membangun hubungan yang harmonis dengan pasien dan keluarga
              melalui komunikasi yang efektif dan pelayanan yang penuh empati.
            </li>
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Layanan Kami</h2>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Bedah Umum</h3>
              <p className="mt-2 text-gray-600">
                Kami menangani berbagai jenis operasi umum dengan teknik minimal
                invasif yang meminimalkan nyeri dan mempercepat pemulihan.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">
                Bedah Ortopedi
              </h3>
              <p className="mt-2 text-gray-600">
                Layanan bedah untuk mengatasi masalah tulang, sendi, dan otot
                dengan pendekatan yang holistik.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Bedah Saraf</h3>
              <p className="mt-2 text-gray-600">
                Tim ahli bedah saraf kami siap memberikan perawatan terbaik
                untuk kondisi neurologis kompleks.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">
                Bedah Plastik dan Rekonstruksi
              </h3>
              <p className="mt-2 text-gray-600">
                Menyediakan solusi bedah plastik dan rekonstruksi untuk
                memperbaiki fungsi dan estetika tubuh.
              </p>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">
            Mengapa Memilih Kami?
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>
              Pengalaman dan Keahlian: Tim kami memiliki pengalaman
              bertahun-tahun dalam berbagai jenis operasi dengan tingkat
              keberhasilan yang tinggi.
            </li>
            <li>
              Pelayanan Personal: Kami memahami kebutuhan unik setiap pasien dan
              memberikan perawatan yang dipersonalisasi.
            </li>
            <li>
              Keamanan dan Kenyamanan: Kami mengutamakan keamanan pasien dan
              menyediakan lingkungan yang nyaman selama proses perawatan.
            </li>
          </ul>
        </section>

        {/* <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Hubungi Kami</h2>
          <p className="mt-4 text-gray-600">
            Untuk informasi lebih lanjut atau konsultasi, silakan hubungi kami
            di:
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Telepon:</strong> (021) 123-4567
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Email:</strong> info@okcarolus.com
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Alamat:</strong> Jl. Mawar No. 10, Jakarta
          </p>
        </section> */}
      
      </main>

      <footer className="text-center my-8">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Herlambang Wicaksono. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
