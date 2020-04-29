import { ref } from 'vue'

export default function (url, options) {
  const response = ref({})

  const fetchData = async () => {
    try {
      const res = await fetch(url, options)
      const data = await res.json()
      response.value = data
    } catch (e) {
      console.log(e)
    }
  }
    
  fetchData()

  return { response }
}