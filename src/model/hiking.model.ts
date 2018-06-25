import {Step} from "./step.model";

export class Hiking {
    id: number;
    name: string;
    description: string;
    beginAdress: string;
    rate: number;
    duration: string;
    heightDifference: number;
    image: string;
    steps: Step[];

    constructor(id: number, name: string, description: string, beginAdress: string, rate: number, duration: string, heightDifference: number, image: string, steps: Step[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.beginAdress = beginAdress;
        this.rate = rate;
        this.duration = duration;
        this.heightDifference = heightDifference;
        this.image = image;
        this.steps = steps;
    }
}
