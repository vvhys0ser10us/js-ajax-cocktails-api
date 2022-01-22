import fetchCocktails from './fetchCocktails.js'
import displayCockTails from './displayCockTails.js'

export default async (URL) => {
  const cocktails = await fetchCocktails(URL)
  const wait = await displayCockTails(cocktails)
}
