// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
import { books } from "../data/books";
import { Book } from "../types";

export function addBook(book: Book): void {
  books.push(book);

  console.log(`Buku "${book.title}" berhasil ditambahkan`);
}


export function listBooks(): void {
  console.log("=== DAFTAR BUKU ===");

  books.forEach((book) => {
    console.log(`
ID: ${book.id}
Tittle: ${book.title}
Author: ${book.author}
Publication Year: ${book.publicationYear}
    `);
  });
}

export function searchBook(keyword: string | number): void {

  const foundBooks = books.filter((book) => {

    // pencarian berdasarkan id
    const matchId = book.id === Number(keyword);

    // pencarian berdasarkan title
    const matchTitle = book.title
      .toLowerCase()
      .includes(String(keyword).toLowerCase());

    // pencarian berdasarkan author
    const matchAuthor = book.author
      .toLowerCase()
      .includes(String(keyword).toLowerCase());

    return matchId || matchTitle || matchAuthor;
  });

  // jika tidak ditemukan
  if (foundBooks.length === 0) {
    console.log("Buku tidak ditemukan");
    return;
  }

  // tampilkan hasil
  console.log("=== HASIL PENCARIAN ===");

  foundBooks.forEach((book) => {
    console.log(`
ID: ${book.id}
Judul: ${book.title}
Penulis: ${book.author}
Tahun: ${book.publicationYear}
    `);
  });
}