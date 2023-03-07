import { Payload } from './Payload';





export class Cargo implements Payload {
    material: string;
    massKg: number;

    constructor(material: string, massKg: number){
        this.material = material;
        this.massKg = massKg;
    }
}
