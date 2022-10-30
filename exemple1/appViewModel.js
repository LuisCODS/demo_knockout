
// ========================= EXEMPLE 1 ==============================
// CLASS
function AppViewModel() {

    var self = this;

    // make properties observable
    self.firstName = ko.observable("Bert");         // set properties observable
    self.lastName  = ko.observable("Bertington");   // set properties observable
    // Defining pureComputed values
    self.fullName = ko.pureComputed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    // function to makes the "last name" value turn upper-case.
    self.capitalizeLastName = function() {
        //  to read or write an observable's value, you call it as a function.
        let currentVal = self.lastName();        // read observable value
        self.lastName(currentVal.toUpperCase()); // set observable value
        currentVal = self.lastName();
        self.lastName(currentVal.toUpperCase());
    };

}// fin class
/*
    Activates knockout:
    The first parameter says what view model object you want to use with the declarative bindings it activates
    second parameter to define which part of the document you want to search for data-bind attributes
*/
ko.applyBindings( new AppViewModel(), document.getElementById('exemple1')); // Activates knockout for class

// ========================= EXEMPLE 2 ==============================

// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) // end class
{
    // attributs
    let self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
    // methodes
    self.formattedPrice = ko.pureComputed(() => {
        // read observable value
        let price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

//class
function ReservationsViewModel()
{
    let self = this;
    // object providing meal data
    self.availableMeals = [
        { mealName: "Standard (sandwich)",      price: 0 },
        { mealName: "Premium (lobster)",        price: 34.95 },
        { mealName: "Ultimate (whole zebra)",   price: 290 }
    ];
    // observable array collection of SeatReservation instances
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);
    // push an extra entry into the seats array
    self.addSeat = function(){
        self.seats.push( new SeatReservation("", self.availableMeals[0]))
    };
    // remove a item from array
    self.removeSeat = function(seat){
        self.seats.remove(seat);
    };
    // calcul the total to pay
    self.totalSurcharge = ko.computed(function(){
        let total = 0;
        for (let i = 0; i < self.seats().length; i++) {
            total += self.seats()[i].meal().price;
        }
        return total.toFixed(2);
    });
}
ko.applyBindings(new ReservationsViewModel(), document.getElementById('exemple2'));


