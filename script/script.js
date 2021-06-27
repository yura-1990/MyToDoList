const root = document.getElementById('root')
const div = document.createElement('div')
const resultUl = document.createElement('ul')
const input = document.createElement('input')
const button = document.createElement('button')
const txt = document.createElement('p')
const span = document.createElement('span')


input.setAttribute('class', 'input-class')
input.type = "search"
button.innerHTML = 'add'
button.setAttribute('class', 'todo__btn')
txt.innerHTML = 'Total :'
div.setAttribute('class', 'block')
resultUl.setAttribute('class', 'todo__list')
span.className = 'todo__list'
div.appendChild(input)
div.appendChild(button)
root.appendChild(div)
root.appendChild(resultUl)
root.appendChild(txt)

i = 0

button.addEventListener('click', (e) => {
    console.log(e);
    if (input.value === '') return
    i++
    // resultUl.innerHTML += `<li>${input.value}</li>`
    deleteListener(input.value, i)
    input.value = ''
    txt.innerText = `Total : ${i}`
    

})

function deleteListener(value, el) {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.className = 'button__delete'
    btn.textContent = 'Delete'
    li.className = 'li'
    li.innerText = `${el}) ${value}`
    li.appendChild(span)
    li.appendChild(btn)
    resultUl.append(li)
    btn.addEventListener('click', e => deleteTodoList(li))

}

function deleteTodoList(vel) {
    resultUl.removeChild(vel)
    i--
    txt.innerText = `Total : ${i}`
}