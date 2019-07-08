


$(document).ready(function() {
  
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
  
    var burger_id = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  
  });
});







var dragger = document.querySelector('.dragger');
var dragTrack = document.querySelector('.dragTrack');
var isDragging = false, direction = 0, maxDragX = 270;

var burgerBits = [".bottomBun", ".middleBurger", ".cheese", ".tomato2", ".tomato1", ".lettuce", ".topBun", ".spot1" , ".spot2" , ".spot3" ];

var animIn = new TimelineMax({});
animIn.from( ".background", 0.4, {
  opacity: 0,
  y:10,
  ease:Power1.easeOut
},)

animIn.staggerFrom( burgerBits, 0.8, {
  opacity: 0,
  y:-100,
  ease: Elastic.easeOut.config(1, 0.9),
}, 0.1)
animIn.from( ".order", 0.8, {
  opacity: 0,
  scale: 0.5,
  ease:Bounce.easeOut,
  delay: -0.5
},)

