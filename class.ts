abstract class User {
    constructor(
        private firstName: string,
        protected lastName: string,
        protected nickname: string
    ) {}
    abstract getNickName(): void;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player1 extends User {
    getNickName() {
        console.log(this.nickname);
    }
}

const nico1 = new Player1("nico", "las", "니꼬");

nico1.getFullName();
