"use strict";
function printUserDetails(user) {
    const { fname, lname, userId, mail } = user;
    console.log("fname =>", fname);
    console.log("lname =>", lname);
    console.log("userId =>", userId);
    console.log("mail =>", mail);
}
let user = {
    fname: "kapil",
    lname: "rathore",
    userId: 8174,
    mail: "kapil@gmail.com"
};
printUserDetails(user);
const getUser = (name = "Guest") => {
    return `hello ${name}`;
};
console.log(getUser());
console.log(getUser("Kapil"));
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        this.users = this.users.filter(user => user.userId !== id);
    }
    getUser(id) {
        return this.users.find(user => user.userId === id);
    }
    getAllUsers() {
        return this.users;
    }
}
const user1 = {
    fname: "rahul",
    lname: "sharma",
    userId: 1,
    mail: "rahul@.com"
};
const user2 = {
    fname: "sachin",
    lname: "rathore",
    userId: 2,
    mail: "sachin@.com"
};
const user3 = {
    fname: "ksr",
    lname: "valorant",
    userId: 3,
    mail: "ksr@.com"
};
const user4 = {
    fname: "solo",
    lname: "leveling",
    userId: 4,
    mail: "solo@.com"
};
const userManager = new UserManager();
userManager.addUser(user);
userManager.addUser(user1);
userManager.addUser(user2);
userManager.addUser(user3);
userManager.addUser(user4);
console.log(userManager.getUser(user.userId));
console.log(userManager.getAllUsers());
userManager.removeUser(8174);
console.log(userManager.getAllUsers());
