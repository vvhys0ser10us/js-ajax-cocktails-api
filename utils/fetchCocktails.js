import getElement from './getElement.js'

const loading = getElement('.loading')

export default async (URL) => {
  try {
    const res = await fetch(URL)
    const data = await res.json()
    const raw = [...data.drinks]
    console.log(raw)
    let cocktails = []
    raw.map((item) => {
      cocktails.push({
        id: item.idDrink,
        name: item.strDrink,
        picture: item.strDrinkThumb,
      })
    })
    loading.classList.add('hide-loading')
    return cocktails
  } catch (error) {
    console.log(error)
  }
}
