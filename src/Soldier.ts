export class Soldier {
  public health: number;
  public strength: number;

  constructor( health: number, strength: number ){
    this.health = health;
    this.strength = strength;
  }

  attack(): number{
    return this.strength;
  }

  receiveDamage( damage: number ): void{
    this.health -= damage;
  }
}