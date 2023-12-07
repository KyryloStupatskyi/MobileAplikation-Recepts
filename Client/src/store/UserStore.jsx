import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    this._comments = [
      { id: 1, comment: 'Water Lemon Panela 1. Put the water to heat 2.Add the panela to the water 3.Mix the panela and the water and some drops of lemon', name: 'Adriana Swistak' },
      { id: 2, comment: 'I`m not very good at cooking but I can cook fried eggs, scrambled eggs and my favourite food, which is gratin tomatoes.', name: 'Stefania Meller' },
      { id: 3, comment: 'I can`t cook very well but I can cook easy dishes such as fried potatoes, egg salad, rice and spicy noddle.', name: 'Swietoslawa Choinska' },
      { id: 4, comment: 'Ok, I`ll try to remember things, that I`ve cooked well. Scrambled eggs, omelette, pasta with cheese, “Navy-Style” Pasta. I can also cook different cereals and fry some meat. I also did a cake, but I didn`t have an oven so i bought layers for the cake', name: 'Adriana Swistak' },
      { id: 5, comment: 'Hi I can not cook well but I sometimes help my mother. My friend can bake and cook very well. FlowerQueen', name: 'Swietoslawa Choinska' }
    ]
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  setComments(comment) {
    this._comments = comment
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  get comment() {
    return this._comments
  }
}