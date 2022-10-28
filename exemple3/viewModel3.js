//class
function ViewModel3(){

    var self = this;
    self.list                   = ko.observableArray([]);
    self.input_descriptionItem  = ko.observable();
    self.alert                  = ko.observable({dislay: false, message: "Formulaire", type: "alert-info"})

    self.addItem = function(){
        if (self.input_descriptionItem() == "" ){
            self.alert({dislay: true, message: "Veuillez ajouter un item!", type: "alert-info"})
            return this.list() < 0 ? "alert" : "profitPositive";
        }else{
            self.list.push({ description: self.input_descriptionItem(), coche:false })
            self.input_descriptionItem("");//clean fild
            self.alert({dislay: true, message: "Intem ajouté avec succes!", type: "alert-info"})
        }
    };

}// end class

v3 = new ViewModel3();
// Activates knockout
ko.applyBindings(v3);





