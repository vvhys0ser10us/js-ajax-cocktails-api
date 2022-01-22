import { showLoading } from './toggleLoading.js'

export default async (url) => {
  showLoading()
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
