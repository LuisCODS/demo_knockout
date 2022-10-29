//class
function ViewModel3(){

    var self = this;

    self.list               = ko.observableArray([]);
    self.input_description  = ko.observable("");
    self.alert              = ko.observable( {show: true, msn: "Add itens to list!", type: "alert alert-secondary"} )

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

    //  Return a total of checked itens
    self.totalCheckedItens = ko.pureComputed(function(){
         var count = self.list().filter(function(item){
             return item.coche();
         }).length;
         return count;
    });

    //  Return a total of unchecked itens
    self.totalUchekedsItens = ko.pureComputed(function(){
        var count = self.list().filter(function(item){
            return !item.coche();
        }).length;
        return count;
    });

}// end class

v3 = new ViewModel3();
// Activates knockout
ko.applyBindings(v3);





