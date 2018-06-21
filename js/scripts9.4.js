

function drawTree(height) {
  for (var i = 0; i < height; i++) {
  	var star = "";
    for (var j = i; j >= 0; j--) {
      star += " * ";
      
    }
    console.log(star);
  }
}
drawTree(10)
