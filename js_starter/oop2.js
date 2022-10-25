import { BaseLogger, EmailLogger, FileLogger, SmsLogger } from "./oop3.js";

import House from "./oop.js";

console.log("------------------------------------------------------------");

class HouseService1 {
  constructor() {
    this.houses = [];
  }

  list1(filterData){
    console.log(this.houses.filter(filterData));
  }

  add1(house1) {
    this.houses.push(house1);
  }
}


const houseService1 = new HouseService1();
const newHouse1 = new House (1, 1, "Doğu", 100, 5000);
houseService1.add1(newHouse1);
const newHouse2 = new House (1, 2, "Batı", 50, 6000);
houseService1.add1(newHouse2);

houseService1.list1((house1) => house1.cephe === "Batı");


console.log("------------------------------------------------------------");


class HouseService {
  constructor(logger) {
    //x loggerType
    this.houses = [];
    this.logger = logger;
    // this.loggerType = loggerType;
  }

  list(filterCb) {
    // callback
    console.log(filterCb !== undefined ? this.houses.filter(filterCb) : this.houses); // ternary operator
    // false, 0, null, undefined, NaN, ""
    // Boolean()
  }

  add(house) {
    this.houses.push(house);
    this.logger.log("Yeni bir ev eklendi.", house); //x , this.loggerType
  }
}

// konfigürasyon
const logger = new SmsLogger(); // PnP, plug and play mimarisi
//
const houseService = new HouseService(logger); //x , "email"
const newHouse = new House(3, 2, "Kuzey", 100, 5000);
houseService.add(newHouse);