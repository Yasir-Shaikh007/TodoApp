let todo = document.querySelector('.todo ul')
let add = document.querySelector('.add button')
let input = document.querySelector('.add input')
let li;
let count;
let num = document.querySelector(".numbers")

window.addEventListener("DOMContentLoaded", () => {
    todo.innerHTML = localStorage.getItem("Todo") || '';
    updateCount()
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value == '') {
            alert("Please Enter A Todo")
            updateCount()
        }
        else {
            li = document.createElement('li')
            li.innerHTML = `<span class = "text">${input.value}</span><span><button class = "done">Done</button> <button class = "delete">Delete</button></span>`
            todo.appendChild(li)
            updateCount()
        }
        input.value = ''
        saveData()
    }
})

add.addEventListener("click", () => {

    if (input.value == '') {
        alert("Please Enter A Todo")
        updateCount()
    }
    else {
        li = document.createElement('li')
        li.innerHTML = `<span class = "text">${input.value}</span><span><button class = "done">Done</button> <button class = "delete">Delete</button></span>`
        todo.appendChild(li)
        updateCount()
    }
    input.value = ''
    saveData()

})

todo.addEventListener("click", (e) => {
    if (e.target.classList == 'done') {
        const liItem = e.target.closest('li');
        const textSpan = liItem.querySelector('.text');
        textSpan.classList.toggle('done-click'); // Toggle only on the text span
        updateCount();
    }
    else if (e.target.classList == 'delete') {
        e.target.closest('li').remove();
        updateCount()
    }
    saveData()
})

function saveData() {
    localStorage.setItem("Todo", todo.innerHTML);
    updateCount()
}

function updateCount() {
    let activeTodos = Array.from(todo.children).filter(li => {
        return !li.querySelector('.text').classList.contains('done-click');
    }).length;
    num.innerHTML = activeTodos;
}
