export class Step {
    id: number;
    longitude: number;
    latitude: number;
    name: string;
    description: string;

    constructor(id: number, longitude: number, latitude: number, name: string, description: string) {
        this.id = id;
        this.longitude = longitude;
        this.latitude = latitude;
        this.name = name;
        this.description = description;
    }
}
