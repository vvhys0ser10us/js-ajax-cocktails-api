import getElement from './getElement.js'
import { hideLoading } from './toggleLoading.js'

const container = getElement('.section-center')
const loading = getElement('.loading')
const title = getElement('.title')

export default ({ drinks }) => {
  if (!drinks) {
    hideLoading()
    title.textContent = 'Sorry, no such drink is found'
    container.innerHTML = null
    return
  }

  const allCocktails = drinks
    .map((cocktail) => {
      return `<a href="drink.html">
          <article class="cocktail" data-id=${cocktail.idDrink}>
            <img src=${cocktail.strDrinkThumb} alt="cocktail" />
            <h3>${cocktail.strDrink}</h3>
          </article>
        </a>`
    })
    .join('')
  hideLoading()
  title.textContent = ''
  container.innerHTML = allCocktails
  return container
}
