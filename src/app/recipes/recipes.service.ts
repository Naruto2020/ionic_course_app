import { Injectable } from '@angular/core';
import {Recipe} from "./recipe-model"

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes:Recipe[] = [
    {
      id: "r1",
      title:"ndole",
      imageUrl:"https://gogocmr.com/wp-content/uploads/2020/06/Ndole-Crevettes-1.jpg",
      ingredients:["epeenar", "riz", "prawns", "cassava bread", "tomatoes", "ogions"  ]
    },
    {
      id: "r2",
      title:"atike poisson",
      imageUrl:"https://www.tabouencuisine.com/wp-content/uploads/2012/02/20120223_attieke_poisson_aloco_top-828x1024.jpg",
      ingredients:[ "plantain", "fish", "cassava", "tomatoes", "ogions"  ]
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [... this.recipes];
  }

  getRecipe(recipeId:String){
    return {...this.recipes.find(recipe =>
      {
        return recipe.id === recipeId
      }
    )};
  }

  deleteRecipe(recipeId:String){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
  }
}
