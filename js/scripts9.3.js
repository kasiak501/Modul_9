var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpper = dinosaur.toUpperCase();
var triceratops = text.replace('Velociraptor', dinosaurUpper);
var triceratopsCharsAfter = triceratops.substr(0, triceratops.length / 2);
console.log(triceratopsCharsAfter);

