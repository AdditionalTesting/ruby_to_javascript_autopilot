function getNewCar() {  
    return {
        city: 'Toronto',
        passengers: 0,
        gas: 100,
    }
}

// var cars =[]

function addCar(cars, newCar) {
    cars.push(newCar);
    console.log("adding new car to fleet. Fleet size is now " + cars.length);
}

var newCar = getNewCar()
console.log(newCar);

function pickUpPassenger (car) {
    car.passengers += 1;
    car['gas'] -= 10;
    console.log('picked up passengers. Car now has ' +car['passengers'] + 'passengers.');
}



console.log();

function getDestination(car) {
    if (car['city'] === 'Toronto'){
        return 'Mississauga';
    } else if (car['city'] === 'Mississauga'){
        return 'London';
    } else if (car['city'] === 'London'){
        return 'Toronto';
    }
}


function fillUpGas(car) {
    var oldGas = car.gas
    car.gas = 100
    console.log('Filled up to ' + getGasDisplay(car.gas) + 'on gas from ' + getGasDisplay(oldGas));
}

function getGasDisplay(gasAmount) {
    console.log(gasAmount);
}

function drive(car, cityDistance) {
    if (car.gas < cityDistance) {
        return fillUpGas(car);
    }

    car.city = getDestination(car);
    car.gas -= cityDistance;
    console.log('Drove to ' + car.city + '. Remaining gas: ' + getGasDisplay(car.gas));
}

function dropOffPassengers(car) {
    var previousPassengers = car.passengers;
    car.passengers = 0;
    console.log('Dropped off ' + previousPassengers + ' passengers' );
}

function act(car) {
    var distanceBetweenCities = 50;
    
    if (car.gas < 20) {
        fillUpGas(car);
    } else if (car.passengers < 3) {
        pickUpPassenger(car);
    } else {
        if (car.gas < distanceBetweenCities) {
            return fillUpGas(car);
        }
        var droveTo = drive(car, distanceBetweenCities);
        var passengersDropped = dropOffPassengers(car);
        console.log(droveTo + passengersDropped);
    }
}

function commandFleet(cars) {
    for (i = 0; i >= cars.count; i++) {
        var action = act(car);
        console.log('Car' + (i + 1) + ': ' + action);
    }
}

function addOneCarPerDay (cars, numDays) {
    for (i = 0; i >= numDays; i++) {
        var newCar = getNewCar();
        console.log(addCar(cars,newCar) + newCar);
        commandFleet(cars);
    }
}

// var car1 = getNewCar();
// addCar(cars, car1)
// pickUpPassenger(car1)
// getDestination(car1)
// fillUpGas(car1)
// getGasDisplay(car1.gas)
// drive(car1, cityDistance)

var cars =[]
addOneCarPerDay(cars, 10)

