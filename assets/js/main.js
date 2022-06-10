function Car(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        document.write(this.mark + " " + this.model + " " + "released in" + this.year + " ")
    };

};

function Person(name, age, car) {
    this.name = name;
    this.age = age;
    this.car = car;
    this.personInfo = function() {
        document.write(this.name + " " + "არის" + " " + this.age + " " + "წლის და ყავს მანქანა" + " ")
    };
    this.carInfo = function(Car) {
        document.write(Car.mark + " " + Car.model + " " + " released in" + " " + Car.year)
    };
};

var tom = new Person("ტომი", 24);
tom.personInfo();

var bill = new Car("Tesla", "Model S", 2015);
tom.carInfo(bill);
