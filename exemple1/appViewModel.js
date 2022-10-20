
// ========================= EXEMPLE 1 ==============================
// CLASS
function AppViewModel() {

    // ======================= ATTRIBUTS =======================
    var self = this;
    // make properties observable
    self.firstName = ko.observable("Bert");         // set properties observable
    self.lastName  = ko.observable("Bertington");   // set properties observable
    // Defining pureComputed values
    self.fullName = ko.pureComputed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    // ======================= METHODES =======================

    // function to makes the "last name" value turn upper-case.
    self.capitalizeLastName = function() {
        //  to read or write an observable's value, you call it as a function.
        let currentVal = self.lastName();        // read observable value
        self.lastName(currentVal.toUpperCase()); // set observable value
        currentVal = self.lastName();
        self.lastName(currentVal.toUpperCase());
    };
}// fin class
ko.applyBindings( new AppViewModel()); // Activates knockout for class




