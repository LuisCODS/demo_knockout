
function MyViewModel() {
    this.contextA = { name: 'alpha', credits: 250 };
    this.contextB = { name: 'bravo', credits: 500 };
    this.contextC = { name: 'charlie', credits: 5800 };
}
ko.applyBindings(new MyViewModel());

