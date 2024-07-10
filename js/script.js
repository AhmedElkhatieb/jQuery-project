$(".link").click(function(){
  const sectionId = $(this).text().toLowerCase();
  const sectionTop = $(`#${sectionId}`).offset().top;
  $("html, body").animate({
    scrollTop: sectionTop
  }, 2000);
});
// ================================================================= \\
$(".bar-btn").click(function(){
  let sideLeft = $(".side-bar").offset().left;
  if (sideLeft === 0){
    $(".side-bar").css({left: "-250px", transition: "left 0.5s"});
    $(".right").css({left: "0", transition: "left 0.5s"});
  }
  else{
    $(".side-bar").css({left: "0", transition: "left 0.5s"});
    $(".right").css({left: "250px", transition: "left 0.5s"});
  }
})
$(".x i").click(function(){
  $(".side-bar").css({left: "-250px", transition: "left 0.5s"});
  $(".right").css({left: "0", transition: "left 0.5s"});
})
// ================================================================== \\
$(".slide-down").hide(0);
$(".one").show(0);

$("h3").click(function(e) {
  let x = `.${e.target.id}`;
  let target = $(x);
  
  if (!target.is(":visible")) {
    $(".slide-down").slideUp(1000); 
    target.slideToggle(1000);
  }else{
    target.slideUp(1000);
  }
});
// ================================================================== \\
// Assuming event is on 17/7/2024 07:00 PM
const targetDate = new Date('2024-07-17T19:00:00').getTime();
function updateTimer(){
  const now = new Date().getTime();
  const difference = targetDate - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  $("#day").text(days);
  $("#hour").text(hours);
  $("#min").text(minutes);
  $("#sec").text(seconds);
}
setInterval(updateTimer, 1000);
updateTimer();
// =================================================================== \\
$("#msg").on('input', function () {
  const max = 100;
  const current = $(this).val().length;
  $("#rem").text(max - current);
});