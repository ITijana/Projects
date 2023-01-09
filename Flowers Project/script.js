let inputRose = document.getElementById('rose');
let inputTulip = document.getElementById('tulip');
let inputLily = document.getElementById('lily');

let inputCandy = document.getElementsByName('candy');
let inputChoco = document.getElementsByName('choco');
let inputChamp = document.getElementsByName('champ');

let radioCash = document.getElementById('cash');
let radioCard = document.getElementById('card');

let btnCalculate = document.getElementById('calculate');
let btnReset = document.getElementById('reset');

let spanParagraph = document.getElementById('paragraph');
let spanDiscount = document.getElementById('paragraphDiscount');
let spanGiftOne = document.getElementById('giftOne');
let spanGiftTwo = document.getElementById('giftTwo');
let spanGifThree = document.getElementById('giftThree');

let spanRose = document.getElementById('imagesRose');
let spanTulip = document.getElementById('imagesTulip');
let spanLily = document.getElementById('imagesLily');

btnCalculate.addEventListener("click", () => {
    let ukupno = (inputRose.value * 150 + inputTulip.value * 120 + inputLily.value * 70);
    for (let i = 1; i <= inputRose.value; i++) {
        spanRose.innerHTML += `<img class="flower" src = "photos/roses.jpg">`;
    }
    for (let i = 1; i <= inputTulip.value; i++) {
        spanTulip.innerHTML += `<img class="flower" src = "photos/tulip.jpg">`;
    }
    for (let i = 1; i <= inputLily.value; i++) {
        spanLily.innerHTML += `<img class="flower" src = "photos/lily.jpg">`;
    }
    inputCandy.forEach(candy => {
        if (candy.checked) {
            spanGiftOne.innerHTML = '+ Box of chocolates';
            ukupno += 500;
        }
    });
    inputChoco.forEach(choco => {
        if (choco.checked) {
            spanGiftTwo.innerHTML = '+ Chocolate';
            ukupno += 500;
        }
    });
    inputChamp.forEach(champ => {
        if (champ.checked) {
            spanGifThree.innerHTML = '+ Champagne';
            ukupno += 500;
        }
    });

    let ukupnoPopust = ukupno - (ukupno * 0.1);
    if (radioCard.checked && ukupno > 2000) {
        spanParagraph.innerHTML = `The price without discount is: ${ukupno} RSD`;
        spanDiscount.innerHTML = `The price with discount is: ${ukupnoPopust} RSD`;
    }
    else {
        spanParagraph.innerHTML = `Price without discount is: ${ukupno} RSD`;
    }
    btnCalculate.disabled = true;

    inputRose.disabled = true;
    inputTulip.disabled = true;
    inputLily.disabled = true;

    candy.disabled = true;
    champ.disabled = true;
    choco.disabled = true;

    radioCard.disabled = true;
    radioCash.disabled = true;
});

btnReset.addEventListener("click", () => {
    location.reload();
});