// import a CSS module
import classes from './main.css';
import Two from 'two.js';

var elem = document.getElementById('c');
var two = new Two({ width: 285, height: 200 }).appendTo(elem);

const lerp = (start, end, t) => start * (1 - t) + end * t;

const point_on_circle = (circle_x, circle_y, radius, angle) => {
  angle = angle * (Math.PI / 180);
  const x = circle_x + radius * Math.sin(angle);
  const y = circle_y + radius * Math.cos(angle);
  return { x, y };
}

const drawline = (s, e) => {
  var step = 30;
  
  for (i = 0; i < 1000;) {
     var factor = i / 1000;
     i += Math.round(Math.random() * (step * 2));
     var factor2 = i / 1000;



     var path = new paper.Path.Line({
        from: [lerp(s.x, e.x, factor), lerp(s.y, e.y, factor)],
        to: [lerp(s.x, e.x, factor2), lerp(s.y, e.y, factor2)],
        strokeColor: "green",
        strokeWidth: 1 + Math.floor(Math.random() * 2)
     });

     i += Math.round(Math.random() * (step / 2));
  }
}

// $(function() {
//   var canvas = document.getElementById("c");
//   paper.setup(canvas);

//   for (var i = 0; i < 360; i += 2) {
//      drawline(f(org.x, org.y, 140, i), f(org.x, org.y, 1000, i));
//     paper.view.draw();
//   }

// });

export default () => {
  var elem = document.getElementById('c');
  var two = new Two({ width: 1600, height: 900 }).appendTo(elem);
  var circle = two.makeCircle(0, 0, 50);
  var rect = two.makeRectangle(70, 0, 100, 100);
  circle.fill = '#FF8000';
  circle.stroke = 'orangered';
  rect.fill = 'rgba(0, 200, 255, 0.75)';
  rect.stroke = '#1C75BC';
  
  // // Groups can take an array of shapes and/or groups.
  var group = two.makeGroup(circle, rect);
  
  // And have translation, rotation, scale like all shapes.
  group.translation.set(two.width / 2, two.height / 2);
  group.rotation = Math.PI;
  group.scale = 0.75;
  
  // You can also set the same properties a shape have.
  group.linewidth = 7;
  
  two.update();
};