// // Write your code here
// class dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
// }
// let bigFluffyDog1 = new dog("Buzz", "great Pyreness");
// let bigFluffyDog2 = new dog("Woody", "labrador");

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}
