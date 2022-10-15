// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

// ========================== class 1 =======================================

function AppViewModel() {

    let self = this;
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
        self.lastName(currentVal.toUpperCase()); // modified observable value
        currentVal = this.lastName();            // read observable value
        this.lastName(currentVal.toUpperCase()); // modified observable value
    };

}
// Activates knockout to have the Observables
ko.applyBindings(new AppViewModel());

// ========================== class 2 =======================================

// JavaScript class constructor that stores a passenger name with a meal selection
function SeatReservation(name, initialMeal) {
    let self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
}

// ========================== class 3 =======================================
// View-model class

function ReservationsViewModel() {
    let self = this;

    // JavaScript object providing meal data
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // array holding an initial collection of SeatReservation instances
    self.seats = ko.observableArray([
                                        new SeatReservation("Steve", self.availableMeals[0]),
                                        new SeatReservation("Bert", self.availableMeals[0])
                                    ]);
}
ko.applyBindings(new ReservationsViewModel());