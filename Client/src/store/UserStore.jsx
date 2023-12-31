import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    this._comments = []
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