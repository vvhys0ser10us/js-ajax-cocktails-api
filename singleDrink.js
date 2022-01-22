import fetchCocktails from './utils/fetchCocktails.js'
import displaySingleCocktail from './utils/displaySingleCocktail.js'

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const showCocktail = async () => {
  const id = localStorage.getItem('cocktail')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const cocktail = await fetchCocktails(`${baseURL}${id}`)
    displaySingleCocktail(cocktail)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  showCocktail()
})
