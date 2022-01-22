import fetchCocktails from './fetchCocktails.js'
import displayCockTails from './displayCocktails.js'
import setCocktail from './setCocktail.js'

export default async (URL) => {
  const cocktails = await fetchCocktails(URL)
  const section = await displayCockTails(cocktails)

  if (section) {
    setCocktail(section)
  }
}
