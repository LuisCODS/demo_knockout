
// ========================= EXEMPLE 1 ==============================

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

ap = new AppViewModel();
// Activates knockout for class
ko.applyBindings(ap);




