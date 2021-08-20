class Rectangle {
 constructor(length, width){
   this.length = length;
   this.width = width;
 }
 rectangle_area = () => this.length * this.width;
 rectangle_perimeter = () => 2 * this.length + 2 * this.width;


 length = document.getElementById("length_input").value
 width = document.getElementById("width_input").value;



}


const rec_1 = new rectangle(3,3)
console.log(' the area of your rectangle is: $(rec_1.rectangle_area(3,3')