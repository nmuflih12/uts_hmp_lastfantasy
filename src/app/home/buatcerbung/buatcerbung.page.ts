import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buatcerbung',
  templateUrl: './buatcerbung.page.html',
  styleUrls: ['./buatcerbung.page.scss'],
})
export class BuatcerbungPage implements OnInit {
  new_namaCerbung = "";
  new_deskripsiCerbung = "";
  new_gambarCerbung = "";
  new_genreCerbung = "" ;
  new_aksesCerbung ="";
  new_pembuatCerbung = "";
  new_paragrafCerbung = "";


  currentPage = 1;
  arr_genres = ["Aksi", "Romance", "Fantasy"]
  arr_akses = [
    {
      akses: "Restricted",
      deskripsi: "Hanya pengguna yang disetujui yang dapat berkontribusi."
    },
    {
      akses: "Public",
      deskripsi: "Semua pengguna dapat berkontribusi."
    }
  ]

  constructor() { }

  ngOnInit() {
  }



  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
  }

  nextPage() {
    if (this.currentPage < 3) {
      this.currentPage++
    }
  }

}
