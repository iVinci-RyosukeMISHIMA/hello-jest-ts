type CanType = {
    flavor: string,
    ml: number
}

const can1: CanType = {
    flavor: 'guava',
    ml: 250
}

const can2: CanType = {
    flavor: 'guava',
    ml: 250
}

const can3: CanType = can2;

class Can {
    flavor: string
    ml: Number

    constructor({ flavor, ml }: CanType) {
        this.flavor = flavor;
        this.ml = ml;
    }
}

const can4 = new Can({ flavor: "guava", ml: 250 });

export { can1, can2, can3, can4 };