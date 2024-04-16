import { Soldier } from "./Soldier";

export class Viking extends Soldier {

  name: string;
  constructor( name: string, health: number, strength: number ){
    super( health, strength );
    this.name = name;
  }

  receiveDamage(damage: number): string {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage`: `${this.name} has died in act of combat`;
  }

  battleCry(): string {
    return 'Odin Owns You All!';
  }
}