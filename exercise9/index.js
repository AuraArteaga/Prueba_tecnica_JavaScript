let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

let cars = [
    {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}, {
    make: "Chevrolet",
    model: "Camry",
    year: 2018,
    color: "white",
    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}, {
    make: "Renault",
    model: "Camry",
    year: 2020,
    color: "white",
    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
];

console.log(car.make); // "Toyota"
console.log(car.getDescription()); // "2020 Toyota Camry"
console.log("Cars", cars)