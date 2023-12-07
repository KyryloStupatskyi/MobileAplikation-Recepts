import { $host } from "./instance"

export const login = async (email, password) => {
  try {
    const { data } = await $host.get('/users')

    const candidate = data.find(user => user.login === email)

    if (!candidate) {
      return alert("Login or password is incorrect")
    }

    if (candidate && candidate.password === password) {
      return candidate
    }
  } catch (error) {
    alert(error.message)
  }
}


export const registration = async (email, password, name) => {
  try {
    const { data } = await $host.get('/users')

    const candidate = data.find(user => user.login === email)

    if (candidate) {
      return alert("User already exist")
    }

    if (!candidate) {
      const data = await $host.post('/users', { email, password, name })
      return data
    }
  } catch (error) {
    alert(error.message)
  }
}