import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    material: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(material: string, totalCapacityKg: number) {
        this.material = material;
        this.totalCapacityKg = totalCapacityKg;
    }
   addCargo(cargo: Cargo) {
    if(this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
    }
    return false;
   }

   addAstronaut(astronaut: Astronaut) {
    if(this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
    }
    return false;
   }

   canAdd(item: Payload):boolean {
    return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
   }

   currentMassKg(): number {
    return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
   }

    sumMass(item: Payload[]): number {
        let sumMass: number =0;
        for (let i=0; i< this.cargoItems.length; i++) {
            sumMass += item[i].massKg;
        };
        return sumMass;
    }   
}