const bodyElement = document.querySelector('body')

//button element
const buttonElement = document.createElement('button')
buttonElement.append('Remove')
bodyElement.append(buttonElement)

//main element
const mainElement = document.createElement('main')
bodyElement.append(mainElement)


//anchor element
const anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.href = 'https://roll20.net/'
anchorElement.target = '_blank'
anchorElement.append('Play online with friends!')

//image element
const imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://app.roll20.net/v2/images/roll20-logo.png?v=2'
imageElement.alt = 'Roll20 logo'

mainElement.append(imageElement, anchorElement)

//remove main button
buttonElement.addEventListener('click', function () {
    mainElement.remove()
})

//css selector input
const inputElement = document.createElement('input')
inputElement.type = 'text'
inputElement.name = 'Remove Class'
inputElement.id = 'removeClass'
inputElement.placeholder = 'Remove a valid CSS selector!'
bodyElement.append(inputElement)

//css remove button
const inputButtonElement = document.createElement('button')
inputButtonElement.append('Remove Selector')
bodyElement.append(inputButtonElement)

//remove element button
inputButtonElement.addEventListener("click", function () {
    // const userSelectorInput = document.getElementById("removeClass").value
    const removeCSSElement = document.querySelector(inputElement.value)
    removeCSSElement.remove()
})

//create element input
const inputCreateElement = document.createElement('input')
inputCreateElement.type = 'text'
inputCreateElement.name = 'Create element'
inputCreateElement.id = 'createElement'
inputCreateElement.placeholder = 'Create an element!'
bodyElement.append(inputCreateElement)

//create element button
const createElementButton = document.createElement('button')
createElementButton.append('Create Element')
bodyElement.append(createElementButton)

//create element button event
createElementButton.addEventListener("click", function () {
    const createElementInput = document.getElementById("createElement").value
    const createdElement = document.createElement('div')
    createdElement.append(createElementInput)
    bodyElement.append(createdElement)
})

