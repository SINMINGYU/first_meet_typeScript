// type Nickname = string;
// type Health = number;
// type Friends = Array<string>;

// type Player2 = {
//     nickname: Nickname;
//     healthBar: Health;
// };

// const nico2: Player2 = {
//     nickname: "nico",
//     healthBar: 10,
// };

// type Food1 = string;
// const kimchi1: Food1 = "delecious";
// type Team = "red" | "blue" | "yellow";
// type Health = 1 | 5 | 10;

// type Player2 = {
//     nickname: string;
//     team: Team;
//     health: Health;
// };

// const nico2: Player2 = {
//     nickname: "nico",
//     team: "blue",
//     health: 10,
// };

// interface User2 {
//     name: string;
// }

// interface Player3 extends User2 {}
// const nico: Player3 = { name: "nico" };

interface User2 {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
}
interface Human {
    health: number;
}

class Player2 implements User2, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName}`;
    }
}

function makeUser(user: User2): User2 {
    return {
        firstName: "nico",
        lastName: "las",
        fullName: () => "xx",
        sayHi: (name) => "string",
    };
}

makeUser({
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
});

/* ------------------------------------------- */

// type PlayerA = {
//     name: string;
// };
// type PlayerAA = PlayerA & { lastName: string };
// const playerA: PlayerAA = {
//     name: "nico",
//     lastName: "las",
// };

// interface PlayerB {
//     name: string;
// }
// interface PlayerBB extends PlayerB {
//     lastName: string;
// }
// interface PlayerBB {
//     health: number;
// }

// const playerB: PlayerBB = {
//     name: "nico",
//     lastName: "las",
//     health: 10,
// };

type PlayerA = {
    firstName: string;
};

interface PlayerB {
    firstName: string;
}

class UserA implements PlayerB {
    constructor(public firstName: string) {}
}
