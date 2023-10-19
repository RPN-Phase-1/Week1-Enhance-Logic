class Vehicle{
    constructor(merek, type, tahun) {
        this.merek = merek
        this.type = type
        this.tahun = tahun
    }
    getInfo(){
        return `${this.merek} ${this.type} ${this.tahun}`
    }
}

class Car extends Vehicle{    
    getInfo(){
        return `${this.merek} ${this.type} ${this.tahun} Car`
    }
}

class Motorcycle extends Vehicle{   
    getInfo(){
        return `${this.merek} ${this.type} ${this.tahun} Motorcycle`
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle