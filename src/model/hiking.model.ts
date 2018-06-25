export class Hiking {
    id: number;
    name: string;
    description: string;
    beginAdress: string;
    rate: number;
    image: string;
    steps: object;

    constructor(id: number, name: string, description: string, beginAdress: string, rate: number, image: string, steps: object) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.beginAdress = beginAdress;
        this.rate = rate;
        this.image = image;
        this.steps = steps;
    }
}
