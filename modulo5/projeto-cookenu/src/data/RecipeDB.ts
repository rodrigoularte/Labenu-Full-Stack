import { Recipe } from "../model/Recipe"
import BaseDatabase from "./BaseDatabase"

const recipeTableName = "recipe_cookenu"

class RecipeDB extends BaseDatabase {

  public insertRecipe = async (recipe: Recipe) => {

    try {
      await BaseDatabase.connection(recipeTableName)
        .insert({
          id: recipe.getId(),
          title: recipe.getTitle(),
          description: recipe.getDescription(),
          createdAt: recipe.getCreatedAt()
        })

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  public selectRecipeByTitle = async (title: string): Promise<Recipe> => {

    try {
      const recipe = await BaseDatabase.connection(recipeTableName)
        .select("*")
        .where({ title })

      return recipe[0] && Recipe.toRecipeModel(recipe[0])

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  public selectRecipeById = async (id: string): Promise<Recipe> => {

    try {
      const recipe = await BaseDatabase.connection(recipeTableName)
        .select("*")
        .from(recipeTableName)
        .where({ id })

      return recipe[0] && Recipe.toRecipeModel(recipe[0])

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

}


export default RecipeDB