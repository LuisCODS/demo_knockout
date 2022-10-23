// =====================  EXEMPLE 2  ==================================

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
// Activates knockout
ko.applyBindings(new ReservationsViewModel());





