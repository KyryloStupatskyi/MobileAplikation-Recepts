import { $host } from "./instance"

export const getRecepts = async () => {
  try {
    const { data } = await $host.get('/recepts')
    return data
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getOneRecept = async (receptId) => {
  try {
    const { data } = await $host.get(`/recepts/${receptId}`)
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const postData = async (receptName, url, dataIng, cookingData) => {
  try {
    const { data } = await $host.post('/recepts', { receptName, img: url, ingredients: dataIng.ingredients, cooking: cookingData.cooking })
    return data
  } catch (error) {
    console.log(error)
  }
}