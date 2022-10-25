import _Users from "./users.js";

class UsersService {
    constructor() {
      this.users = [];
    }
  
    list(){
      console.log(this.users);
    }
  
    add(oneuser) {
      this.users.push(oneuser);
    }
  }

const userService = new UsersService();

userService.list();