import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { nilai, element, attribut } from './component';
import logoHtml from '../../assets/html.png';

const ContentKetiga = () => {
  return (
    <section className="artikel section">
      <div className="artikel__container container">
        <h2 className="artikel__title">Fundamental of HTML</h2>
        <img src={logoHtml} alt="Gambar Content" className="artikel__img" />
        <p className="artikel__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          quibusdam ad quam deleniti dolore dolorum corrupti amet quos deserunt
          hic vitae excepturi commodi, fuga, iste animi illo pariatur aperiam
          mollitia!
        </p>
        <div className="artikel__content grid">
          <div className="artikel__content-tags">
            <div className="artikel__tags-item">
              <span>JavaScript</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item">
              <span>HTML</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item">
              <span>CSS</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item tags__icon">
              <i className="uil uil-instagram tags__icon"></i>
              <i className="uil uil-facebook tags__icon"></i>
              <i className="uil uil-github tags__icon"></i>
              <i className="uil uil-twitter-alt tags__icon"></i>
            </div>
          </div>
          <div className="artikel__content-desc">
            <p>
              Hypertext Markup Language (HTML) adalah bahasa markah yang
              mendasari seluruh halaman web yang Anda lihat dan gunakan saat
              menjelajah internet. Pada dasarnya, HTML adalah kerangka kerja
              yang memungkinkan kita untuk membuat, mengatur, dan menggabungkan
              berbagai jenis konten - mulai dari teks, gambar, video, tautan,
              hingga elemen-elemen interaktif lainnya - menjadi satu kesatuan
              yang dapat diakses oleh pengguna melalui peramban web.
            </p>
            <span className="artikel__desc-subtitle">Elemen dan Tag:</span>
            <p>{`Elemen dasar HTML diwakili oleh tag, yaitu kode yang ditempatkan di antara tanda kurung sudut (< dan >). Setiap elemen memiliki tag pembuka (opening tag) dan mungkin memiliki tag penutup (closing tag) yang memberi tahu peramban bagaimana cara mengolah dan menampilkan kontennya. Sebagai contoh, tag <p> digunakan untuk merencanakan paragraf teks, tag <h1> sampai <h6> untuk judul-judul dengan tingkat kepentingan yang berbeda, dan tag <img> untuk menampilkan gambar.`}</p>
            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: '25px',
                borderRadius: '0.8rem',
                marginBottom: '1.5rem'
              }}
            >
              {element}
            </SyntaxHighlighter>
            <span className="artikel__desc-subtitle">Atribut:</span>
            <p>{`Setiap elemen HTML dapat memiliki atribut yang memberikan informasi tambahan tentang elemen tersebut. Atribut berisi nama dan nilai, dan biasanya dimasukkan ke dalam tag pembuka elemen. Misalnya, atribut src pada elemen <img> digunakan untuk menunjukkan sumber gambar yang akan ditampilkan. Atribut href pada elemen <a> (anchor) menunjukkan URL yang akan dihubungkan saat pengguna mengkliknya.`}</p>
            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: '25px',
                borderRadius: '0.8rem',
                marginBottom: '1.5rem'
              }}
            >
              {attribut}
            </SyntaxHighlighter>
            <span className="artikel__desc-subtitle">Struktur Dokumen:</span>
            <p>{`Halaman HTML biasanya memiliki struktur dasar yang terdiri dari beberapa elemen. Elemen <html> adalah elemen induk yang membungkus seluruh konten halaman. Elemen <head> berisi informasi meta seperti judul halaman, deskripsi, dan tautan gaya (CSS). Elemen <body> berisi konten aktual yang akan ditampilkan kepada pengguna.`}</p>
            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: '25px',
                borderRadius: '0.8rem',
                marginBottom: '1.5rem'
              }}
            >
              {nilai}
            </SyntaxHighlighter>
            <span className="artikel__desc-subtitle">
              Hyperlink dan Tautan:
            </span>
            <p>{`Hyperlink memungkinkan kita menghubungkan halaman-halaman web. Elemen <a> (anchor) digunakan untuk membuat tautan hyperlink. Atribut href dalam elemen <a> menentukan alamat URL tujuan. Ini adalah cara utama bagi pengguna untuk berpindah dari satu halaman ke halaman lain atau menuju sumber daya lain di web.`}</p>
            <span className="artikel__desc-subtitle">Gambar</span>
            <p>{`Elemen <img> memungkinkan kita menyisipkan gambar dalam halaman web. Atribut src menunjukkan lokasi atau URL gambar yang ingin ditampilkan. Atribut alt memberikan deskripsi alternatif tentang gambar tersebut, yang berguna jika gambar gagal dimuat atau untuk aksesibilitas.`}</p>
            <span className="artikel__desc-subtitle">Daftar dan Tabel :</span>
            <p>{`HTML mendukung pembuatan berbagai jenis daftar, seperti daftar terurut dengan elemen <ol>, daftar tak terurut dengan elemen <ul>, dan daftar definisi dengan elemen <dl>. Selain itu, elemen <table> dan sejumlah elemen terkait lainnya memungkinkan pembuatan tabel untuk menyajikan data secara terstruktur.`}</p>
            <span className="artikel__desc-subtitle">Elemen Semantik:</span>
            <p>{`Elemen semantik membantu menggambarkan makna konten. Misalnya, elemen <header> dapat digunakan untuk menandai bagian atas halaman yang berisi judul atau navigasi. Elemen <nav> menunjukkan bagian yang berisi tautan navigasi, sedangkan elemen <section> dan <article> membantu mengelompokkan dan merencanakan konten dalam halaman.`}</p>
            <p>
              Dalam praktiknya, HTML sering digabungkan dengan CSS (Cascading
              Style Sheets) untuk mengatur tampilan visual halaman web, dan
              JavaScript untuk menambahkan interaksi dan perilaku dinamis. HTML
              adalah dasar dari pengembangan web modern, dan pemahaman yang baik
              tentang bahasa ini adalah langkah awal yang penting untuk
              membangun halaman web yang efektif, informatif, dan menarik bagi
              pengunjung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentKetiga;
