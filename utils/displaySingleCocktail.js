import { hideLoading } from './toggleLoading.js'
import getElement from './getElement.js'

export default (data) => {
  hideLoading()

  const cocktail = data.drinks[0]
  const {
    strDrinkThumb: image,
    strDrink: name,
    strInstructions: desc,
  } = cocktail
  const list = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
  ]
  const img = getElement('.drink-img')
  const drinkName = getElement('.drink-name')
  const description = getElement('.drink-desc')
  const ingredients = getElement('.drink-ingredients')
  img.src = image
  document.title = name
  drinkName.textContent = name
  description.textContent = desc
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return
      return `<li><i class="far fa-check-square"></i>${item}</li>`
    })
    .join('')
}
