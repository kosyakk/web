const [displayArea, dog, cat, dogImg, catImg] = ['display-area', 'dog', 'cat', 'dog-img', 'cat-img'].map(id => document.getElementById(id));

function left() {
    cat.style.flex = '20';
    dog.style.flex = '1';
    dogImg.style.visibility = 'hidden';
    catImg.style.visibility = 'visible';
    catImg.style.width = '80%';
    catImg.style.height = '80%';
}

function both() {
    cat.style.flex = '1';
    dog.style.flex = '1';
    dogImg.style.visibility = 'visible';
    catImg.style.visibility = 'visible';
    dogImg.style.width = '100%';
    catImg.style.width = '100%';
    dogImg.style.height = '60%';
    catImg.style.height = '60%';
}

function right() {
    cat.style.flex = '1';
    dog.style.flex = '20';
    dogImg.style.visibility = 'visible';
    catImg.style.visibility = 'hidden';
    dogImg.style.width = '80%';
    dogImg.style.height = '80%';
}

[['left-button', left], ['both-button', both], ['right-button', right]].forEach(([id, f]) => {
    document.getElementById(id).addEventListener('click', f);
});
