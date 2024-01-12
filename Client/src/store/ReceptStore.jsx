import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._recepts = []

    this._liked = []
    this._isRemoved = false
    makeAutoObservable(this)
  }

  setRemoved(bool) {
    this._isRemoved = bool
  }

  get removed() {
    return this._isRemoved
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

  addRecept(recept) {
    this._recepts.push(recept)
  }

  get liked() {
    return this._liked
  }
}