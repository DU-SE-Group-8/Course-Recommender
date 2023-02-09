import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_URL

const getCourses = async (log) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseUrl}/courses`,
      data: log,
    })
    return res.data
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getCourses,
}