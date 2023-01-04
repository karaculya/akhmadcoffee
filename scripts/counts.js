document.getElementById('btnCost').onclick = function () {
    calcCash();
};

document.getElementById('btnFill').onclick = function () {
    document.getElementById('qst').style.display = 'flex';
}

document.getElementById('btnConfirm').onclick = function () {
    sendQuest();
}

function calcCash() {
    var coffee = document.getElementById('cashCoffee').value;
    var level = document.getElementById('cashLevel').value;
    var cash = coffee * level;
    document.getElementById('cash').innerHTML = Math.round(cash);
    document.getElementById('infoCash').style.display = 'block';

    if (coffee == 0 || level == 0) {
        document.getElementById('infoCash').style.display = 'none';
        alert('Укажите значения');
        return;
    }
}

function sendQuest() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    document.getElementById('user-name').innerHTML = name;
    document.getElementById('request').style.display = 'block';

    if (name == 0 || age == 0 || phone == 0) {
        document.getElementById('request').style.display = 'none';
        alert('Заполните все поля анкеты');
        return;
    }
}
