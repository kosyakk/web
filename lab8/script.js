
const entries = document.getElementById('entries');

function move_up(e) {
    const previous = this.parentElement.previousElementSibling;
    if (previous != null) {
        this.parentElement.after(previous);
    }
}

function move_down(e) {
    const next = this.parentElement.nextElementSibling;
    if (next != null) {
        this.parentElement.before(next);
    }
}

function remove(e) {
    this.parentElement.remove();
}

function entry() {
    let element = document.createElement('div');
    element.className = 'entry';
    element.innerHTML = `
        <input class='entry-key' type='text'>
        <input class='entry-value' type='text'>
    `;
    
    let button_up = document.createElement('button');
    button_up.className = 'entry-up';
    button_up.innerHTML = '▲';
    button_up.addEventListener('click', move_up);
    
    let button_down = document.createElement('button');
    button_down.className = 'entry-down';
    button_down.innerHTML = '▼';
    button_down.addEventListener('click', move_down);
    
    let button_remove = document.createElement('button');
    button_remove.className = 'entry-remove';
    button_remove.innerHTML = 'x';
    button_remove.addEventListener('click', remove);
    
    element.appendChild(button_up);
    element.appendChild(button_down);
    element.appendChild(button_remove);
    
    return element;
}

function dot(a, b) {
    if (a.length != b.length) return null;
    
    let result = [];
    for (let i = 0; i < a.length; i += 1) {
        result.push([a[i], b[i]]);
    } return result;
}

function save(e) {
    let result = {};
    
    dot(
        [...document.querySelectorAll('.entry-key')],
        [...document.querySelectorAll('.entry-value')]
    )
    .map(([key_input, val_input]) => [key_input.value, val_input.value])
    .forEach(([key, val]) => result[key] = val);
    
    document.getElementById('printout').innerHTML = JSON.stringify(result);
}

function add(e) {
    entries.appendChild(entry());
}

[['button-save', save], ['button-add', add]]
.forEach(([id, f]) => document.getElementById(id).addEventListener('click', f));

add(null);
