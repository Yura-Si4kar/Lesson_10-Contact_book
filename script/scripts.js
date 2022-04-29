const TABLE_CLASS = 'table_items';
const DELETE_BTN_CLASS = 'delete_btn';

const TABLE_TEMPLATE = document.querySelector('.table_template').innerHTML;

const addBtn = document.querySelector('.sending_btn');
const inputName = document.querySelector('.input_name');
const inputSurname = document.querySelector('.input_surname');
const inputPhoneNumber = document.querySelector('.input_phone_number')
const taskList = document.querySelector('.table');
const errorEl = document.querySelector('.error');


addBtn.addEventListener('click', onAddTable);
taskList.addEventListener('click', onTableElementsClick);

function onAddTable(e) {
    if (validateInput(true)) {
        e.preventDefault();
        showError();
        clearInputs();
    } else {
        e.preventDefault();
        remuveError();
        addTable();
        clearInputs();
    }
}

function addTable() {
    const taskItemHtml = getTableHTML();

    taskList.insertAdjacentHTML('beforeend', taskItemHtml);
}

function getTableHTML() {
        return TABLE_TEMPLATE.replace('{{Name}}', getInputName())
            .replace('{{Surname}}', getInputSurname())
            .replace('{{Phone_number}}', getInputPhoneNumber());    
}

function getInputName() {
    return inputName.value;
}

function getInputSurname() {
    return inputSurname.value;    
}

function getInputPhoneNumber() {
    return inputPhoneNumber.value;
}

function validateInput() {
    const contactName = getInputName();
    const contactSurname = getInputSurname();
    const contactPhoneNumber = getInputPhoneNumber();

    if (contactName==='' || contactSurname==='' || contactPhoneNumber==='') {
        return true;
    } else {
        return false;
    }
}

function clearInputs() {
    inputName.value = '';
    inputSurname.value = '';
    inputPhoneNumber.value = '';
}

function onTableElementsClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContacts(e.target.closest('.' + TABLE_CLASS));
    }
}

function showError() {
    errorEl.classList.add('show');
}

function remuveError() {
    errorEl.classList.remove('show');
}

function deleteContacts(el) {
    el.remove();
}