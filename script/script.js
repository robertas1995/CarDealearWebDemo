let CARS = [];

let manufacturerInput = document.querySelector("#marke");
let modelInput = document.querySelector("#modelis");
let releaseYear = document.querySelector("#metai");
let releaseMounth = document.querySelector("#menuo");
let bodyType = document.querySelector("#body_type_id");
let Price = document.querySelector("#kaina");
let Image = document.querySelector("#image");
let gearboxType = document.querySelector('input[name="gearbox"]:checked');
let vehicleStatus = document.querySelector('input[name="bukle"]:checked');
let fuelType  = document.querySelector("#kuroTipas");

let errorField = document.querySelector('#form-error');
let priceBlock = document.querySelector('#classified-price-block');

function onButtonClick(){
    
    let marke = manufacturerInput.value;
    let modelis = modelInput.value;
    let metai = releaseYear.value;
    let menuo = releaseMounth.value;
    let body_type_id = bodyType.value;
    let kaina = Price.value;
    let image = Image.value;
    let kuroTipas = fuelType.value;
    let gearbox = gearboxType.value;
    let status = vehicleStatus.value;

    if (!marke || !modelis || !metai || !menuo || !body_type_id || !kaina || !image || !kuroTipas) {
        errorField.style.display = 'block';
    } else {
        errorField.style.display = 'none';
        priceBlock.style.display = 'block';
        
        createCar(marke, modelis,metai,menuo,body_type_id,kaina,image,kuroTipas, gearbox, status);
    }
}
function createCar(marke, modelis, releaseYear, releaseMounth, body_type_id, price, image,kuroTipas, gearbox, status){
    let car = {
        marke: marke,
        modelis: modelis,
        releaseYear: releaseYear,
        releaseMounth: releaseMounth,
        body_type_id: body_type_id,
        kaina: price,
        image: image,
        kuroTipas: kuroTipas,
        gearbox: gearbox,
        status: status 

    };

    displayCar(car);

    CARS.push(car);
   
}

function displayCar(car) {
    document.querySelector('#classified-image').innerHTML = `<img src="${car.image}" alt="${car.marke} ${car.modelis}">`;
    document.querySelector('#classified-title-block').innerHTML = `${car.marke} ${car.modelis}, ${car.body_type_id}`;
    document.querySelector('#classified-price-block').innerHTML = `${car.kaina} €`;
    document.querySelector('#classified-details-block').innerHTML = `${car.releaseYear}-${car.releaseMounth} | ${car.kuroTipas} | ${car.gearbox} | ${car.status}`;
}

function onRemoveClick() {
    document.querySelector('#classified-image').innerHTML = '';
    document.querySelector('#classified-title-block').innerHTML = '';
    document.querySelector('#classified-price-block').innerHTML = '';
    document.querySelector('#classified-details-block').innerHTML = '';
    errorField.style.display = 'none';
    priceBlock.style.display = 'none';
}