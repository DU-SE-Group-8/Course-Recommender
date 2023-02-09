import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_URL

const getQuestions = async (round=1, log=[]) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseUrl}/questions/${round}`,
      data: log,
    })
    return res.data
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getQuestions,
}