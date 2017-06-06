import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe-Box</h1>
    <ul>
      <li>{{firstRecipe.title}}</li>
      <ul>
        <li>{{firstRecipe.ingredients[0]}}</li>
        <li>{{firstRecipe.ingredients[1]}}</li>
      </ul>
      <h3>Directions</h3>
      <ul>
        <li>{{firstRecipe.directions[0]}}</li>
        <li>{{firstRecipe.directions[1]}}</li>
      </ul>
    </ul>
  </div>
  `
})

export class AppComponent {

  recipes: Recipe[] = [
    new Recipe("Omelette", ["eggs", "cheese"], ["crack eggs.", "cook eggs."]),
    new Recipe("Chicken Parm", ["Chicken", "Parmesean"], ["cook chicken.", "eat chicken."]),
    new Recipe("Ice Cream", ["milk", "sugar"], ["mix ingredients.", "make it cold."])
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
