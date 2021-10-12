import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() displayRecipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("A Test Recipe 1", "Test Desciption 1", "https://st3.depositphotos.com/13324256/16360/i/1600/depositphotos_163603140-stock-photo-woman-cutting-mushrooms.jpg"),
    new Recipe("A Test Recipe 2", "Test Desciption 2", "https://st3.depositphotos.com/13324256/16360/i/1600/depositphotos_163603140-stock-photo-woman-cutting-mushrooms.jpg")
  ];

  showDetails(index){
    this.displayRecipe.emit(this.recipes[index])
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
