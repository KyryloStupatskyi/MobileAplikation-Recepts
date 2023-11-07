import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._recepts = [
      {
        id: 1,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Sol", amount: "200g" },
          { name: "Pieprz", amount: '300g' }
        ]
      },

      {
        id: 2,
        receptName: 'Ziemniaki po Francuzku',
        img: 'https://praktykulinarni.com/wp-content/uploads/2020/12/kurczak-ziemniaki-hasselback-1024x682.jpg',
        ingredients: [
          { name: "Ziemniaki", amount: "2kg" },
          { name: "Ser", amount: '500g' }
        ]
      },

      {
        id: 3,
        receptName: 'Nalesniki',
        img: 'https://foodmagazine.pl/wp-content/uploads/2016/08/nale%C5%9Bniki-z-truskawkami-i-mascarpone.jpg',
        ingredients: [
          { name: "Maka", amount: "800g" },
          { name: "Mleko", amount: '800ml' }
        ]
      },

      {
        id: 4,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Sol", amount: "200g" },
          { name: "Pieprz", amount: '300g' }
        ]
      },
    ]
    makeAutoObservable(this)
  }

  setRecepts(recept) {
    this._recepts = recept
  }

  get Recept() {
    return this._recepts
  }
}