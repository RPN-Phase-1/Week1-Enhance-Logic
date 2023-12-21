class Vehicle {
  constructor(nama, tipe, tahun) {
    this.nama = nama;
    this.tipe = tipe;
    this.tahun = tahun;
  }

  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} `;
  }
}

class Car extends Vehicle {
  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} Car`;
  }
}

class Motorcycle extends Vehicle {
  getInfo() {
    return `${this.nama} ${this.tipe} ${this.tahun} Motorcycle`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle
