function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
  	return a * h / 2;
  } else {
    return 'Nieprawidłowe dane';
  } 
}
console.log(getTriangleArea(10, 6))
var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(150, 150),
    triangle3Area = getTriangleArea(-3, 6);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);