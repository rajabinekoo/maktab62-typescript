const sqaure = (num: number): number => {
    return num * num;
};

let isHappy: boolean = true;
let firstName: string = "ali";
let myAge: number = 20;

let fruit: string[] = ["apple", "persianApple", "banana"];
let odd: Array<number> = [1, 3, 5, 7, 9];

let company: object = {
    name: "maktabsharif",
};

let product: Array<[number, string]> = [];
product.push([1, "Kafsh Tantak"]);
product.push([2, "Damnush"]);

enum Size {
    Small = 3,
    Medium = 5,
    Large = 7,
}
let largePizz = Size["Large"];
let mediumPizza = Size[5];

let ts_fun: any = "chert&pert";
ts_fun = Size.Medium;

const greeting = (name: string): void => {
    console.log(`Hello ${name}`);
};

const error = (msg: string): never => {
    throw new Error(msg);
};

type uid = string | number;
// let userId: string | number = "190";
let userId: uid = "190";
userId = 190;

type userType1 = {
    uid: uid;
    username: string;
};
let newUser1: userType1 = { uid: 1, username: "ali" };

interface userType2 {
    uid?: uid;
    readonly username: string;
    getUsername(): string;
    setUsername(userName: string): void;
}
class User implements userType2 {
    uid: uid;
    username: string;
    getUsername(): string {
        return this.username;
    }
    setUsername(userName: string): void {
        this.username = userName;
    }
    constructor(uid, username) {
        this.uid = uid;
        this.username = username;
    }
}
let newUser2: userType2 = new User(1, "mohammad");
newUser2.setUsername("asdasd");
console.log(newUser2.username);

class User2 {
    private _uid: uid;
    public username: string;
    set setUid(uid: uid) {
        this._uid = uid;
    }
    get getUid() {
        return this._uid;
    }
    constructor(uid, username) {
        this._uid = uid;
        this.username = username;
    }
}
let newUser3: { username: string; setUid: any; getUid: any } =
    new User2(1, "mohammad");
console.log(newUser3.getUid);
newUser3.setUid = 2;
console.log(newUser3.getUid);
