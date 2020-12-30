const regButton = document.querySelector("button");
let fanName;
let fanGender;
let fanCountry;
let fanDate;
let fanFood = [];
const welcomeMessage = document.querySelector("#welcome");
const foodOptions = document.querySelectorAll("input[type='checkbox']");
const genderOptions = document.querySelectorAll("input[type='radio']");

regButton.addEventListener("click", checkFanGender);

function checkFanGender() {
    if (genderOptions[0].checked == true || genderOptions[1].checked == true || genderOptions[2].checked == true) {
        fanRegistration();
    } else {
        alert("Kérlek, add meg a nemedet!");
    }
}

function fanRegistration() {
    fanName = document.querySelector("input[name='name']").value;
    fanGender = document.querySelector("input[name='gender']:checked").value;
    fanCountry = document.querySelector("select[name='country']").value;
    fanDate = document.querySelector("input[name='birthday']").value;
    createFoodArray();
    
    welcomeMessage.innerText = "Kedves " + fanName + "! Köszönjük a regisztrációd, mint első számú "+ fanGender + " nemű rajongónk! " + fanCountry + " egy igazán csodálatos ország. Úgy tűnik, személyedben egy igazán fiatal rajongót köszönthetünk, hiszen elválasztási időd: "+ fanDate + " ! Ízlésedhez pedig csak gratulálni tudunk, hiszen a " + fanFood + " nekünk is nagy kedvencünk. További kellemes böngészést!";
}

function createFoodArray() {
    fanFood = [];
    for (let i = 0; i < foodOptions.length; i++) {
        if (foodOptions[i].checked == true) {
            fanFood.push(foodOptions[i].name);
        }
    }
}