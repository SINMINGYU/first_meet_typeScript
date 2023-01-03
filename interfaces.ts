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
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player2 = {
    nickname: string;
    team: Team;
    health: Health;
};

const nico2: Player2 = {
    nickname: "nico",
    team: "blue",
    health: 10,
};

interface User2 {
    name: string;
}

interface Player3 extends User2 {}
const nico3: Player3 = { name: "nico" };
