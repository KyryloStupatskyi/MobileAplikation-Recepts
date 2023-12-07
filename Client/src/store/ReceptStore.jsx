import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._recepts = [
      {
        id: 1,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },

      {
        id: 2,
        receptName: 'Ziemniaki po Francuzku',
        img: 'https://praktykulinarni.com/wp-content/uploads/2020/12/kurczak-ziemniaki-hasselback-1024x682.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },

      {
        id: 3,
        receptName: 'Nalesniki',
        img: 'https://foodmagazine.pl/wp-content/uploads/2016/08/nale%C5%9Bniki-z-truskawkami-i-mascarpone.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },

      {
        id: 4,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },

      {
        id: 5,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },
      {
        id: 6,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },
      {
        id: 7,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },
      {
        id: 8,
        receptName: 'Pasta mia',
        img: 'https://www.thespruceeats.com/thmb/8iAri1JnU2CKFqAW1ZCEKi9lcsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skillet-spaghetti-481948-final-hero-01-340363d6ed1c402a9a10b0a176e2a649.jpg',
        ingredients: [
          { name: "Olive Oil", amount: "2 tbsp" },
          { name: "Smoked Streaky Bacon", amount: '100g' },
          { name: "Chicken Breasts", amount: '4' },
          { name: "Red Onion", amount: '1' },
          { name: "Garlic Cloves", amount: '2' },
          { name: "Red Pepper", amount: '1' },
          { name: "Yellow Pepper", amount: '1' },
          { name: "Oregano", amount: '1 tsp' },
          { name: "Chilli Flakes", amount: '1/4 tsp' },
          { name: "Cans", amount: '2 x 400g' },
          { name: "Caster Sugar", amount: '1 tsp' },
          { name: "Parsley", amount: 'small bunch' },
          { name: "Mascarpone", amount: '3 tbsp' },
          { name: "Pasta", amount: '350g' },
          { name: "Cheddar", amount: '65g' },
          { name: "Mozzarella", amount: '50g' },
        ],
        cooking: [
          { step: 'STEP 1', description: 'Heat the oil in a large, wide casserole, over a medium heat. Stir in the bacon and cook for 5-7 mins, until crispy and browned. Remove to a bowl using a slotted spoon and set aside. Tip in the chicken and stir well to coat in the bacon fat. Turn the heat up to medium-high and cook for 3-5 mins until browned all over (it doesn’t need to be cooked through at this point). Remove to the same bowl as the bacon using a slotted spoon.' },
          { step: 'STEP 2', description: 'Mix the onion and garlic in with a pinch of salt and turn the heat down to medium. Cook for 10-12 mins until softened. Add the peppers, oregano and chilli flakes, if using. Cook for a further 8-10 mins until the peppers have softened. Pour in the canned tomatoes, then swill out the cans with a little water and tip this in as well. Sprinkle over the sugar and stir in the chicken and bacon and most of the parsley. Season well and bring to a simmer. Cook for 20-25 mins, until thickened. Mix in the mascarpone, stirring well until dissolved.' },
          { step: 'STEP 3', description: 'Meanwhile, cook the pasta for 2 mins less than the pack states, then drain thoroughly reserving a mug of the pasta cooking water. Heat the oven to 220C/200C fan/gas 7. Taste and season the sauce before tipping in the cooked pasta. Pour in a splash of the pasta cooking water to bring the sauce together before spooning the mixture into an ovenproof baking dish. Will keep covered and frozen for up to three months. Defrost thoroughly in the fridge overnight before baking. Top with both cheeses and bake for 10-15 mins until golden and bubbling. Scatter over the remaining parsley and serve straight from the dish.' }
        ]
      },
    ]

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