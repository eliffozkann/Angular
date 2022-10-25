// OOP - Object Oriented Programing 
// Nesneye Yönelimli Programlama

export default class Ev {
  constructor(oda, kat, cephe, aidat, fiyat) { // constructor class ın özelliklerinin anlatıldığı yer
    this.odaSayisi = oda;
    this.kat = kat;
    this.cephe = cephe;
    this.aidat = aidat;
    this.fiyat = fiyat;
  }

  tanit() {
    console.log(this); // tanit() metot, fonksiyon değildir
  }
  tanit() {
    console.log("tanit2", this);
  }
}


export const ev1 = new Ev(3, 2, "Kuzey", 100, 5000);
ev1.tanit();

console.log("EV 1", ev1);

const ev2 = {
  odaSayisi: 1,
  kat: 1,
  cephe: "Kuzey",
  aidat: 50,
  fiyat: 1000,
};
console.log("EV 2", ev2);


function evOlustur(oda, kat, cephe, aidat, fiyat) {
  this.odaSayisi = oda;
  this.kat = kat;
  this.cephe = cephe;
  this.aidat = aidat;
  this.fiyat = fiyat;
}
evOlustur.prototype.tanit = function () {
  console.log(this);
};

evOlustur.prototype.tanit = function () {
  console.log("tanit2", this);
};

const ev3 = new evOlustur(3, 2, "Kuzey", 100, 5000);
ev3.tanit();


