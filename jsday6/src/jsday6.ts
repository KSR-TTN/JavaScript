interface User1 {
    id: number;
    name: string;
    email: string;
    age?: number;
}


// -------------------------------------------------------------------------------------------------------



interface User {
    fname:string,
    lname:string,
    userId:number,
    mail:string
}


function printUserDetails(user: User): void {
    const { fname, lname, userId, mail} = user;
    console.log("fname =>", fname)
    console.log("lname =>", lname);
    console.log("userId =>", userId);
    console.log("mail =>", mail);
}


let user :User= {
    fname:"kapil",
    lname:"rathore",
    userId:8174,
    mail:"kapil@gmail.com"
}

printUserDetails(user);



// -------------------------------------------------------------------------------------------------------



const getUser = (name: string = "Guest"): string => {
    return `hello ${name}`;
};

console.log(getUser());
console.log(getUser("Kapil"));



// -------------------------------------------------------------------------------------------------------


class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    removeUser(id: number): void {
        this.users = this.users.filter(user => user.userId !== id);
    }

    getUser(id: number): User | undefined {
        return this.users.find(user => user.userId === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}



const user1: User = {
    fname: "rahul",
    lname: "sharma",
    userId: 1,
    mail: "rahul@.com"
};

const user2: User = {
    fname: "sachin",
    lname: "rathore",
    userId: 2,
    mail: "sachin@.com"
};

const user3: User = {
    fname: "ksr",
    lname: "valorant",
    userId: 3,
    mail: "ksr@.com"
};

const user4: User = {
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