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

export const getAllReceptByUserId = async (userId) => {
  try {
    const { data } = await $host.get('/recepts')

    const recepts = data.filter(item => item.userId === +userId)

    if (recepts && recepts.length > 0) {
      return recepts
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const postData = async (receptName, url, dataIng, cookingData, userId) => {
  try {
    const { data } = await $host.post('/recepts', { receptName, userId, img: url, ingredients: dataIng.ingredients, cooking: cookingData.cooking })
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const deleteRecept = async (id) => {
  try {
    const { data } = await $host.delete(`/recepts/${id}`)
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}