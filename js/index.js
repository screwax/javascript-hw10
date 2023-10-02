const input1 = document.querySelector("#text-1");
const input2 = document.querySelector("#text-2");
const checkt = document.querySelector("#check-text");

checkt.addEventListener('click', () => {
    if (input1.value === input2.value) {
        alert('Обидва поля заповнені');
    } else {
        alert('Не всі поля заповнені');
    }
});

const number1 = document.querySelector("#number-1");
const number2 = document.querySelector("#number-2");
const checkn = document.querySelector("#check-number");

checkn.addEventListener('click', () => {
    if (Number(number1.value) + Number(number2.value) > 10) {
        alert("Сума більша за 10");
    }
    else {
        alert("Сума менша або дорівнює 10");
    }
});

const input = document.querySelector("#input-text");
const checktext = document.querySelector("#check-input");

checktext.addEventListener('click', () => {
    if (input.value.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    }
    else {
        alert("Текст не містить слово JavaScript");
    }
});

const inputf = document.querySelector("#input-form");
const buttonf = document.querySelector("#button-form");

buttonf.addEventListener('click', (e) => {
    e.preventDefault();
    if (10 < Number(inputf.value) && Number(buttonf.value) < 20) {
        alert("Число входить в діапазон від 10 до 20");
    }
    else {
        alert("Число не входить в діапазон від 10 до 20");
    }
});

const nameInput = document.querySelector("#text-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#pass-input");
const sendInput = document.querySelector("#button-input");

sendInput.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.length >= 3) {
        if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
            if (passInput.value.length >= 6) {
                alert("Надіслано");
            } else {
                alert("Неправильний пароль");
            }
        } else {
            alert("Неправильна пошта");
        }
    } else {
        alert("Неправильне ім'я");
    }
});