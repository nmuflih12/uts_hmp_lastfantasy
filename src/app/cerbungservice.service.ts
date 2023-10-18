import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  cerbungs: any[] = [
    {
      nama: "Aku, Kamu dan Dia",
      genre: "Romance",
      pembuat: "LalaEskargot",
      disukai: 4,
      deskripsi: "Cerita tentang seorang remaja laki-laki yang tidak bisa memilih wanita yang dicintainya.",
      gambar: "https://thumb.viva.id/intipseleb/1265x711/2021/07/11/60ea7d826497b-kanojo-mo-kanojo.jpg"
    },
    {
      nama: "Aku Terlahir Lagi Sebagai Kulkas Dua Pintu",
      genre: "Fantasy",
      pembuat: "RudyTabuti",
      disukai: 8,
      deskripsi: "Cerita tentang seorang remaja laki-laki yang mati ditabrak truk, lalu terlahir kembali sebagai kulkas 2 pintu.",
      gambar: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/07/15/kulkas-7-3348427411.jpg"
    },
    {
      nama: "Ayahku Detektif, Ibuku Hitman, Aku Anak Pungut",
      genre: "Aksi",
      pembuat: "AnyaGeraldin",
      disukai: 8,
      deskripsi: "Cerita tentang seorang anak perempuan yang dipungut oleh seorang detektif yang kemudian mengangkat seorang pembunuh bayaran sebagai istri.",
      gambar: "https://koran-jakarta.com/images/article/jadi-trending-dunia-anime-spy-x-family-benarkah-berdasarkan-sejarah-nyata-antara-konflik-jerman-barat-dan-jerman-timur-220418181313."
    },
    {
      nama: "Cinta Palsu",
      genre: "Romance",
      pembuat: "KomiChan",
      disukai: 100,
      deskripsi: "Cerita tentang seorang anak laki-laki dari ketua yakuza yang menjalin hubungan palsu dengan anak perempuan bos mafia",
      gambar: "https://i.pinimg.com/750x/f2/b9/b9/f2b9b97fad5ee5fbb922cfcd16eaa98d.jpg"
    },
  ]
  constructor() { }
}
