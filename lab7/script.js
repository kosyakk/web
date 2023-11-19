
Number.prototype.times = function(f) { for (let i = 1; i <= this; i += 1) f(); }

const [count_min, count_max] = [1, 10];
const [size_min, size_max] = [40, 100];

const canvas = document.getElementById('canvas');

function shape(size, [x, y], type) {
    let shape = document.createElement('div');
    
    shape.classList.add('shape', type);
    
    if (type === 'triangle') {
        // mhmm triangle is so special
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = size / 1.5 + 'px solid transparent';
        shape.style.borderRight = size / 1.5 + 'px solid transparent';
        shape.style.borderBottom = size / 1.5 + 'px solid #f14646';
    }
    
    else {
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
    }
    
    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    


    return shape;
}

function shape_on_click(e) {
    // mhmm triangle is so special
    if (this.classList.contains('triangle')) {
        this.style.borderBottomColor = '#fff45d';
    } else {
        this.classList.add('selected');
    }
    
    this.onclick = e => this.remove();
}

function place_shapes(type) {
    const random_size = () => (
        size_min + Math.floor(Math.random() * (size_max - size_min))
    );
    
    const random_pos = () => [
        size_max / 2 + Math.floor(Math.random() * (canvas.clientWidth - 1.75 * size_max)),
        size_max + Math.floor(Math.random() * (canvas.clientHeight - 1.75 * size_max)),
    ];
    
    const count = Number(document.getElementById('place-count').value);
    
    if (count < count_min || count > count_max) {
        console.error('invalid count value');
        document.getElementById('place-count').value = '1';
        return null;
    }
    
    count.times(_ => {
        const element = shape(random_size(), random_pos(), type);
        element.addEventListener('click', shape_on_click);
        canvas.append(element);
    });
}

[
    ['button-square',   _ => place_shapes('square')  ],
    ['button-triangle', _ => place_shapes('triangle')],
    ['button-circle',   _ => place_shapes('circle')  ],
]
.forEach(([id, f]) => document.getElementById(id).addEventListener('click', f));
