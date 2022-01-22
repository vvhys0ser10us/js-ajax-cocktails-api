import getElement from './utils/getElement.js'
import showCockTails from './utils/showCockTails.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m'

const searchBar = getElement('.search-form')

window.addEventListener('DOMContentLoaded', () => {
  showCockTails(URL)
})

searchBar.addEventListener('input', (e) => {
  e.preventDefault()
  if (!e.target.value) return
  showCockTails(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`
  )
})

// const input = getElement('[name="drink"]')

// searchBar.addEventListener('keyup', (e) => {
//   e.preventDefault()
//   const value = input.value
//   if (!value) return
//   showCockTails(`${URL}${value}`)
// })
