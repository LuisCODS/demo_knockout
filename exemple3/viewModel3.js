// class data model
function ViewModel3(){

    var self = this;

    self.list               = ko.observableArray([]);
    self.input_description  = ko.observable("");
    self.deleteItem         = ko.observable("");
    self.alert              = ko.observable( {show: true, msn: "Add itens to list!", type: "alert alert-secondary"} );

    // add item into list
    self.addItem = () => {
        // if no input data
        if (self.input_description() == ""){
            // update objet
            self.alert({show: true, msn: "Warning...no item selected!!", type: "alert alert-danger" })
        }else{
            // add an objet
            self.list.push( {description: self.input_description(), coche: ko.observable(false)} )
            //clean fild
            self.input_description("");
            // update objet
            self.alert({show: true, msn: "Intem ajouté avec succes!", type: "alert alert-info"})
        }
    };

    // delete itens from list
    self.deleteItem = (data) => {
        self.list.remove(data);
    }

    //  Return a total of checked items
    self.totalCheckedItens = ko.pureComputed(function(){
        return self.list().filter(function(item){ return item.coche(); }).length;
    });

    //  Return a total of unchecked items
    self.totalUchekedsItens = ko.pureComputed(function(){
        return self.list().filter(function(item){ return !item.coche(); }).length;
    });

}// end class

// Activates knockout
ko.applyBindings(new ViewModel3());






