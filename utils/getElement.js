export default (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error('no such selction')
}
