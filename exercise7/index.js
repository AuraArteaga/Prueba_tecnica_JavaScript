let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blanco",
    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.make); // "Toyota"
console.log(car.getDescription()); // "2020 Toyota Camry"