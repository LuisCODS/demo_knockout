//class
function ViewModel3(){

    var self = this;

    self.list               = ko.observableArray([]);
    self.input_description  = ko.observable("");
    self.deleteItem         = ko.observable("");
    self.alert              = ko.observable( {show: true, msn: "Add itens to list!", type: "alert alert-secondary"} );

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
    self.deleteItem = (obj) => {
        console.log(obj);
        const index = self.list.indexOf(obj);
        if (index > -1) { // only splice array when item is found
            // 2nd parameter means remove one item only
            self.list.splice(index, 1);
        }
    }

    //  Return a total of checked itens
    self.totalCheckedItens = ko.pureComputed(function(){
        return count = self.list().filter(function(item){ return item.coche(); }).length;
    });

    //  Return a total of unchecked itens
    self.totalUchekedsItens = ko.pureComputed(function(){
        return  self.list().filter(function(item){ return !item.coche(); }).length;
    });

}// end class

v3 = new ViewModel3();
// Activates knockout
ko.applyBindings(v3);






