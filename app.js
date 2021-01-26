'use strict';

//Global Variables//

let form = document.getElementById('all-cars');
let table = document.getElementById('cars-table');

let arrOfCars = [];
// let imageArr = ['bmw.png' , 'chevrolet.png' , 'hyundai.png' , 'tesla.png' , 'lexus.png' ,'toyota.png','kia.png' ];

//Constructor//

function CarList(name, category, model , image) {
    this.name = name;
    this.category = '/images' + image;
    this.model = model;
    // this.image = 'images/' + image;

    arrOfCars.push(this);

}

CarList.prototype.renderCars = function () {
    let carListRow = document.createElement('tr');

    let categoryTd = document.createElement('img');
    categoryTd.textContent = this.category;

    let nameModelTd = document.createElement('td');
    nameModelTd.textContent = `Car name ${this.name}  Model Year ${this.model}`;

    carListRow.appendChild(categoryTd);
    carListRow.appendChild(nameModelTd);

    table.appendChild(carListRow);
}


//Functions//

function submission(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let category = event.target.category.value;
    let model = event.target.model.value;

    let newItem = new CarList(name, category, model);
    newItem.renderCars();

    localStorage.setItem('carslist', JSON.stringify(arrOfCars));


}

function CheckLS() {
    if (localStorage.getItem('carslist')) {
        arrOfCars = JSON.parse(localStorage.getItem('carslist'));

            for (let index = 0; index < arrOfCars.length; index++) {

                let carListRow = document.createElement('tr');

                let categoryTd = document.createElement('td');
                categoryTd.textContent = arrOfCars[index].category;

                let nameModelTd = document.createElement('td');
                nameModelTd.textContent =  `Car name ${arrOfCars[index].name}  Model Year ${arrOfCars[index].model}`;

                carListRow.appendChild(categoryTd);
                carListRow.appendChild(nameModelTd);

                table.appendChild(carListRow);
            }
        }
    }


//Calling Functions and Event Listener//
form.addEventListener('submit', submission);
CheckLS();

