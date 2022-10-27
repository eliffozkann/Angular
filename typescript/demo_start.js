"use strict";
//type-safe
exports.__esModule = true;
console.log("Typescript dosyasından merhaba");
function sayHello(name) {
    console.log("Hello ".concat(name));
}
sayHello("Elif");
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp(); // burası sayesinde dışarıdan ulaşılabilir yaptık
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("What's up?");
    };
    return Greeter;
}());
var greeter = new Greeter("Elif");
greeter.sayHi();
// userService class'ı oluşturalım
// string[] dönüş tipi olarak getUserNames fonksiyonu oluşturalım
// string name alan bir ekleme methodu
// classin içinde bir alanda array ile tutalım. Ancak bu arraya dışardan erişim yasak!!
//built-in
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.add = function (user) {
        this.users.push(user);
    };
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
var userService = new UserService();
userService.add({ age: 15, name: "Halit", surname: "Kalaycı" });
console.log(userService.getUsers());
