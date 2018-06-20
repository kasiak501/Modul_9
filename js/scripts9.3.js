var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpper = dinosaur.toUpperCase();
var triceratops = text.replace('Velociraptor', dinosaurUpper);
var length = triceratops.length;
var halfOfTriceratops = length/2;
var triceratopsCharsAfter = triceratops.substr(0, halfOfTriceratops);
console.log(triceratopsCharsAfter);
