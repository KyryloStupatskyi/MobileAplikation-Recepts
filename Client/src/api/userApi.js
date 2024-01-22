import { $host } from "./instance"

export const login = async (email, password) => {
  try {
    const { data } = await $host.get('/users')

    const candidate = data.find(user => user.email === email)

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


export const registration = async (email, password, name, country) => {
  try {
    const { data } = await $host.get('/users')

    const candidate = data.find(user => user.email === email)

    if (candidate) {
      return alert("User already exist")
    }

    if (!candidate) {
      const data = await $host.post('/users', { email, password, name, country })
      return data
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const userById = async (userId) => {
  const { data } = await $host.get(`/users/${userId}`);
  return data
}

export const getComments = async (receptId) => {
  try {
    const { data: comments } = await $host.get(`/comments?receptId=${receptId}`);

    const userPromises = comments.map(comment => userById(comment.userId));
    const users = await Promise.all(userPromises);

    const newArr = comments.map((comment, index) => {
      const temp = {
        id: comment.id,
        comments: comment.comments,
        receptId: comment.receptId,
        userId: comment.userId,
        user: users[index],
      }
      return temp;
    });

    return newArr;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const addComment = async (comments, receptId, userId) => {
  try {
    const { data } = await $host.post("/comments", {
      comments,
      receptId,
      userId
    })

    return data
  } catch (error) {
    throw new Error(error.message);
  }
}