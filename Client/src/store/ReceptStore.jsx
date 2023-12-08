import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._recepts = []

    this._liked = []
    makeAutoObservable(this)
  }

  setRecepts(recept) {
    this._recepts = recept
  }

  get recept() {
    return this._recepts
  }

  getRecipeById(recipeId) {
    return this._recepts.find((recipe) => recipe.id === recipeId);
  }

  setLiked(recept) {
    this._liked.push(recept)
  }

  get liked() {
    return this._liked
  }
}