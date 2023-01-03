type Player<E> = {
    name: string;
    extraInfo: E;
};
type NicoExtra = { favFood: string };
type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
    name: "nico",
    extraInfo: { favFood: "kimchi" },
};

const lynn: Player<null> = {
    name: "Lynn",
    extraInfo: null,
};

function printAllNumbers1(arr: Array<number>) {
    return arr;
}

function printAllNumbers2(arr: number[]) {
    return arr;
}

// useState<number>();
