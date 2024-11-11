let i = document.querySelector('#result');

function append(inputs) {
    i.value += inputs;
}

let c = document.querySelector('#c')
c.addEventListener('click', () => {
    i.value = '';
    i.style.color = "white";
    i.style.fontSize = '70px';
})

let e = document.querySelector('#e')
e.addEventListener('click', () => {
    i.value = eval(i.value);
    i.style.color = "red";
    i.style.fontSize = '50px';
})
