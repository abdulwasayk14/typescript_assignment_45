"use strict";
// Function to store information about a car in an object
function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        Object.keys(option).forEach(key => {
            car[key] = option[key];
        });
    });
    return car;
}
// Call the function with required information and two other name-value pairs
let my_car = car_info('Toyota', 'Camry', { color: 'red' }, { year: 2022 });
// Print the object returned to ensure all information was stored correctly
console.log(my_car);
