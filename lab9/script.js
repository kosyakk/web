
const t_state = {
    eval_ok: 0,
    eval_err: 1,
    expr_input: 2,
};

const t_input = {
    clear: 0,
    erase_last_char: 1,
    append_char: 2,
    evaluate: 3,
};

const ans_element = document.getElementById('ans');
const usr_element = document.getElementById('usr');
const err_element = document.getElementById('err');

let usr = '';
let ans = '';
let err = '';
let state = t_state.expr_input;

function raw_to_display(s) {
    const table = {
        ['-']: '−',
        ['*']: '×',
        ['/']: '÷',
    }; return [...s].map(c => Object.keys(table).includes(c) ? table[c] : c).join('');
}

function set_usr(value) {
    usr = value;
    usr_element.innerHTML = raw_to_display(usr);
}

function set_ans(value) {
    ans = value;
    ans_element.innerHTML = ans;
}

function set_err(value) {
    err = value;
    err_element.innerHTML = err;
}

function append_char(c) {
    set_usr(usr + c);
    set_err('');
    state = t_state.expr_input;
}

function erase_last_char() {
    set_usr(usr.slice(0, -1));
    set_err('');
    state = t_state.expr_input;
}

function clear() {
    set_usr('');
    set_ans('');
    set_err('');
    state = t_state.expr_input;
}

function evaluate() {
    const syntax_error = () => {
        set_err('syntax error');
        set_ans('');
        set_usr('');
        state = t_state.eval_err;
    };
    
    switch (state) {
        case t_state.eval_err: 
        case t_state.eval_ok:
        break;
        
        case t_state.expr_input: {
            try {
                let result = eval(ans + usr);
                if (!usr.includes('//') && result != null && result != undefined && typeof result == "number") {
                    set_ans(String(result));
                    set_usr('');
                    set_err('');
                    state = t_state.eval_ok;
                } else syntax_error();
            } catch (error) { syntax_error(); }
        } break;
    }
}

[
    ['zero',    '0'],
    ['one',     '1'],
    ['two',     '2'],
    ['three',   '3'],
    ['four',    '4'],
    ['five',    '5'],
    ['six',     '6'],
    ['seven',   '7'],
    ['eight',   '8'],
    ['nine',    '9'],
    ['comma',   '.'],
    ['add',     '+'],
    ['sub',     '-'],
    ['mul',     '*'],
    ['div',     '/'],
]
.forEach(([id, c]) => document.getElementById(id).addEventListener('click', e => append_char(c)));

[
    ['cls', clear],
    ['del', erase_last_char],
    ['equ', evaluate],
]
.forEach(([id, cb]) => document.getElementById(id).addEventListener('click', cb));
