// Class
function AppViewModel() {

    var self = this;
    // make properties observable using ko.observable:
    self.firstName = ko.observable("Bert");         // set properties observable
    self.lastName  = ko.observable("Bertington");   // set properties observable

    // Defining computed values
    self.fullName = ko.computed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);

    // function to makes the "last name" value turn upper-case.
    self.capitalizeLastName = function() {
        //  to read or write an observable's value, you call it as a function.
        let currentVal = self.lastName();        // read observable value
        self.lastName(currentVal.toUpperCase()); // set observable value
        currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    };
    self.list = ko.observableArray([1,2,3,4,5]);

}// fin class

// Activates knockout for class
ko.applyBindings(new AppViewModel());

// ================================================================

// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
}

// ===============================================================

//class
function ReservationsViewModel() {
    var self = this;

    // JavaScript object providing meal data
    self.availableMeals = [
        { mealName: "Standard (sandwich)",      price: 0 },
        { mealName: "Premium (lobster)",        price: 34.95 },
        { mealName: "Ultimate (whole zebra)",   price: 290 }
    ];

    // array collection of SeatReservation instances
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);
}
// Activates knockout for class
ko.applyBindings(new ReservationsViewModel());