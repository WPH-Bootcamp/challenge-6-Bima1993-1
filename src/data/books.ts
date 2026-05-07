// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

import { Book } from "../types";

export let books: Book[] = [
  {
    id: 1,
    title: "Belajar javascript",
    author: "Vincent",
    publicationYear: 2025,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    publicationYear: 2008,
  },
  {
    id: 3,
    title: "Edensor",
    author: "Andrea Hirata",
    publicationYear: 2007,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    publicationYear: 2020,
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    publicationYear: 1997,
  },
    {
    id: 6,
    title: "One Piece",
    author: "Eiichiro Oda",
    publicationYear: 1997,
  },
   {
    id: 7,
    title: "Kingdom",
    author: "Yasuhisa Hara and Dan Abnett",
    publicationYear: 2006,
  },



];
