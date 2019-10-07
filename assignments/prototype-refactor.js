/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attrs) {
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`
//   };

  class GameObject {
      constructor(attrs) {
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
      }
      destroy() {
        return `${this.name} was removed from the game.`
      }
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(attrs) {
//     this.healthPoints = attrs.healthPoints;
//     GameObject.call(this, attrs);
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`
//   };
  
  class CharacterStats extends GameObject {
      constructor(attrs) {
          super(attrs);
          this.healthPoints = attrs.healthPoints;
      }
      takeDamage() {
        return `${this.name} took damage.`
      }
  }

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
//   function Humanoid(attrs) {
//     this.team = attrs.team;
//     this.weapons = attrs.weapons;
//     this.language = attrs.language;
//     CharacterStats.call(this, attrs);
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };

  class Humanoid extends CharacterStats {
      constructor(attrs) {
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      }
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    function getRandomInt(maxNum) {
      return Math.floor(Math.random() * Math.floor(maxNum));
    }
  
    // function Villain(attrs) {
    //   Humanoid.call(this, attrs);
    //   this.maxDamage = attrs.maxDamage;
    // }
  
    // Villain.prototype = Object.create(Humanoid.prototype);
  
    // Villain.prototype.curse = function () {
    //   return getRandomInt(this.maxDamage);
    // };

    class Villain extends Humanoid {
        constructor(attrs) {
            super(attrs);
            this.maxDamage = attrs.maxDamage;
        }
        curse() {
            return getRandomInt(this.maxDamage);
        }
    }
  
  
    // function Hero(attrs) {
    //   Humanoid.call(this, attrs);
    //   this.maxDamage = attrs.maxDamage;
    // }
  
    // Hero.prototype = Object.create(Humanoid.prototype);
    
    // Hero.prototype.attack = function () {
    //   return getRandomInt(this.maxDamage);
    // }

    class Hero extends Humanoid {
        constructor(attrs) {
            super(attrs);
            this.maxDamage = attrs.maxDamage;
        }
        attack() {
            return getRandomInt(this.maxDamage);
        }
    }
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 3,
        height: 5,
      },
      healthPoints: 20,
      name: 'Katara',
      team: 'Southern Water Tribe',
      weapons: [
        'water', 
        'ice', 
        'snow'
      ],
      language: 'Common Tongue',
      maxDamage: 12,
    });
  
    const villain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 5,
      },
      healthPoints: 20,
      name: 'Azula',
      team: 'Fire Nation',
      weapons: [
        'fire', 
        'lightning', 
      ],
      language: 'Common Tongue',
      maxDamage: 15,
    });
  
  
    console.log(`\n\n-------------------------------\n\n`);
    console.log(`${villain.name} and ${hero.name} are battling!`);
  
    while (hero.healthPoints > 0 && villain.healthPoints > 0) {    
      console.log(`${villain.name} attacks with ${villain.weapons[getRandomInt(villain.weapons.length)]}!`);
      console.log(hero.takeDamage());
  
      let villainDamage = villain.curse();
      console.log(`${villain.name} dealt ${villainDamage} damage!`);
      hero.healthPoints = hero.healthPoints - villainDamage;
  
      if (hero.healthPoints <= 0) {
        console.log(hero.destroy());
      } else {
        console.log(`${hero.name} withstood the attack! ${hero.name} has ${hero.healthPoints}hp remaining.`);
        console.log(`${hero.name} counterattacks with ${hero.weapons[getRandomInt(hero.weapons.length)]}!`);
        console.log(villain.takeDamage());
  
        let heroDamage = hero.attack();
        console.log(`${hero.name} dealt ${heroDamage} damage!`);
        villain.healthPoints = villain.healthPoints - heroDamage;
  
        if (villain.healthPoints <= 0) {
          console.log(villain.destroy());
        } else {
          console.log(`${villain.name} withstood the attack! ${villain.name} has ${villain.healthPoints}hp remaining.`);
        }
      }
    }