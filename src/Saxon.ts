import { Soldier } from "./Soldier";

export class Saxon extends Soldier {

  constructor( health: number, strength: number ){
    super( health, strength );
  }

  receiveDamage(damage: number): string {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`;
  }
}