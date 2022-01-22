import getElement from './getElement.js'

const container = getElement('.section-center')

export default (cocktails) => {
  const allCocktails = cocktails
    .map((cocktail) => {
      return `<a href="drink.html">
          <article class="cocktail" data-id=${cocktail.id}>
            <img src=${cocktail.picture} alt="cocktail" />
            <h3>${cocktail.name}</h3>
          </article>
        </a>`
    })
    .join('')

  container.innerHTML = allCocktails
}
