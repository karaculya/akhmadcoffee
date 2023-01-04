var price = 0;
var taste = 0;
const minWeight = 50;
var totalPrice = 0;

function plusTaste(tast){
    window.taste = tast;
    price = tast;
    window.totalPrice = price;
    document.getElementById('totalPrice').innerHTML = price;
}

function plusPackage(pack){  
    price += pack;
    window.totalPrice = price;
    document.getElementById('totalPrice').innerHTML = price;
}

function plusGrams(gr){
    var weight = gr / minWeight;
    price = taste * weight;
    window.totalPrice = price;
    document.getElementById('totalPrice').innerHTML = price;
}

function openInfo(){
    var string = ""
    if(totalPrice > 1000)
        string = "Для вас доставка бесплатная"
    else if(totalPrice == 0){
        alert('Выберите товары для доставки');
        return;
    }
    else
        string = "Стоимость доставки составит 100 ₽"
    document.getElementById('del').innerHTML = string;
    document.getElementById('del-description').style.display = 'flex';
}


