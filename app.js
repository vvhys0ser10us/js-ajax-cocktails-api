import getElement from './utils/getElement.js'
import showCockTails from './utils/showCockTails.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m'

window.addEventListener('DOMContentLoaded', showCockTails(URL))
