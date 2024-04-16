import { Saxon } from "./Saxon";
import { Soldier } from "./Soldier";
import { Viking } from "./Viking";
export class War {
  public vikingArmy: Viking[] = [];
  public saxonArmy: Saxon[] = [];

  constructor(){
  }

  addViking( viking: Viking ): void {
    this.vikingArmy = [ ...this.vikingArmy, viking ];
  }

  addSaxon( saxon: Saxon ): void {
    this.saxonArmy = [ ...this.saxonArmy, saxon ];
  }

  vikingAttack(): string {
    let vikingArmyIndex = Math.floor( Math.random() * this.vikingArmy.length );
    let randomViking = this.vikingArmy[ vikingArmyIndex ];

    let saxonArmyIndex = Math.floor( Math.random() * this.saxonArmy.length );
    let randomSaxon = this.saxonArmy[ saxonArmyIndex ];

    let fightResult = randomSaxon.receiveDamage( randomViking.strength );

    if( randomSaxon.health <= 0 ){
      this.saxonArmy = this.saxonArmy.filter( ( saxon, index ) => {
        return index !== saxonArmyIndex;
      });
    }

    return fightResult;

  }

  saxonAttack(): string {
    let vikingArmyIndex = Math.floor( Math.random() * this.vikingArmy.length );
    let randomViking = this.vikingArmy[ vikingArmyIndex ];

    let saxonArmyIndex = Math.floor( Math.random() * this.saxonArmy.length );
    let randomSaxon = this.saxonArmy[ saxonArmyIndex ];

    let fightResult = randomViking.receiveDamage( randomSaxon.strength );

    if( randomViking.health <= 0 ){
      this.vikingArmy = this.vikingArmy.filter( ( viking, index ) => {
        return index !== vikingArmyIndex;
      });
    }

    return fightResult;

  }

  showStatus(): string {
    if( this.saxonArmy.length === 0 ){
      return `Vikings have won the war of the century!`;
    } else if( this.vikingArmy.length === 0 ){
      return `Saxons have fought for their lives and survive another day...`;
    } else{
      return `Vikings and Saxons are still in the thick of battle`;
    }
  }

}