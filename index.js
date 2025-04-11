const addL2HeaderButton = document.getElementById('addL2Header')
const addHyperlink = document.getElementById('addHyperlink')

addL2HeaderButton.addEventListener('click', () => {
  const header = document.createElement('h2')
  const headerText = document.createTextNode('THIS IS A HEADER')
  header.appendChild(headerText)
  document.body.appendChild(header)
})

addHyperlink.addEventListener('click', () => {
  const header = document.createElement('a')
  header.setAttribute('href', 'google.com')
  const headerText = document.createTextNode('THIS IS A HEADER')
  header.appendChild(headerText)
  document.body.appendChild(header)
})
