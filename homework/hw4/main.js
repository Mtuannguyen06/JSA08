const person = {
    name: 'Phuoc',
    job: 'student',
    age: '15',
};

const createBtn = document.getElementById('create');
createBtn.addEventListener('click', create);
function create() {
    localStorage.setItem('user', JSON.stringify(person));
};


const changeBtn = document.getElementById('change-name');
changeBtn.addEventListener('click', change)
function change() {
        person.name = 'Ha';
    localStorage.setItem('user', JSON.stringify(person));
};

const clearElm = document.getElementById('clear');
clearElm.addEventListener('click', clear);
function clear() {
    localStorage.clear();
};

const delBtn = document.getElementById('del');
delBtn.addEventListener('click', delPhuoc);
function delPhuoc() {
    localStorage.removeItem('user')

};



